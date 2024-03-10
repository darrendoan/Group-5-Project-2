/**
 * This helper substitutes the requiresAuth() function in auth0 to passively incorporate a check to create an equivalent entry in the database (if one doesn't exist already)
 */
// Import user model and original requiresAuth function for our helper
const { requiresAuth: oidcAuth } = require('express-openid-connect');
const { User } = require('../models');
const chrono = require('../utils/chronoFixer');

function requiresAuth() {
    // Because a function is required instead of a promise, we have to wrap the code for the middleware inside this block
    return (req, res, next) => {
        // The output of oidcAuth() is intercepted and passed through a function block that acts as though it's another middleware
        oidcAuth()(req, res, async () => {
            if (req.oidc.isAuthenticated()) {
                try {
                    let tz = chrono.inferTimezone(req.ip);
                    // Compensate for loopback IPs being passed from internal testing
                    if (tz === '::1' || tz === '127.0.0.1') {
                        tz = 'Australia/Sydney';
                    }
                    
                        await User.findOrCreate({
                            where: {
                                id: req.oidc.user.sub
                            }, 
                            defaults: {
                                id: req.oidc.user.sub,
                                name: req.oidc.user.nickname,
                                timezone: tz
                            }
                        });
                } catch (error) {
                    console.error('Error in checkUser:', error);
                    return res.status(500).json({message: "Internal server error."});
                }
            }

            next();
        });
    };
}

module.exports = requiresAuth;