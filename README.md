<h1 align ="center">Spawnpoint</h1>

![HTML/CSS](https://img.shields.io/badge/CSS-blue) ![JavaScript](https://img.shields.io/badge/JavaScript-red) ![Node.js](https://img.shields.io/badge/Node.js-orange) ![Express.js@4.18.2](https://img.shields.io/badge/Express.js@4.18.2-grey) ![MySQL2@3.9.2](https://img.shields.io/badge/MySQL2@3.9.1-lightgreen) ![Sequelize@6.37.1](https://img.shields.io/badge/Sequelize@6.37.1-lightblue) ![Dotenv@16.4.5](https://img.shields.io/badge/Dotenv@16.4.5-lavender) ![eslint@8.57.0](https://img.shields.io/badge/eslint@8.57.0-babyblue)

<h2 align ="center">Spawnpoint</h2>

Gaming Event Hub is a platform that allows gamers to discover, host, create, and join gaming events such as tournaments, LAN parties, and online matches. Users can browse upcoming events, create their own events, and connect with fellow gamers.

## Table of Contents

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Usage](#Usage)
- [Instruction](#instruction)
- [Overview](#overview)
- [Screenshots](#screenshots)
- [APIs Used](#apis-used)
- [Technologies Used](#technologies-used)
- [Contribution/Roles](#contributionroles)
- [Installation Instruction](#installation-instruction)
- [License](#license)

## User Story

```md
AS A Gamer
I WANT to be able to organise and schedule events
SO THAT I can co-ordinate play sessions with many people
```

## Acceptance Criteria

```md
GIVEN I am organising an event

WHEN I click Register
AND provide a valid email address
THEN I should receive an email confirming my membership, containing a magic link

WHEN I click Log in
AND I have an account
THEN I should receive an email with a magic link to sign in

WHEN I click the magic link
PROVIDED the link is not expired
THEN I should be able to sign in
ELSE I will receive a new link

WHEN I click New Event
THEN I should be presented with the options to specify a date, time, game, and notes

WHEN I enter the name of a game
THEN I should be presented with a list of suggestions for games to include OR presented with the option to add a game, if it is not listed

WHEN I choose to add a game THEN I should be presented with options to set the game name, platforms, maximum number of players, type of game, and notes about the game

WHEN I enter the date of the event
THEN I should be able to create the event
PROVIDED it starts at least 2 days after the current date

WHEN I click Save
THEN I should see my event appear on the calendar,
with the name of the game, the number of people attending, the maximum capacity, the starting time and finishing time

WHEN I click on the event as an organiser
THEN I should see the full details of the event, including those who are interested in attending

WHEN I click Manage Attendees THEN I should see a checkbox list of interested people, and checkboxes next to those who are already marked to attend

WHEN I check on attendees and click save PROVIDED there are no more than the maximum capacity THEN I should see the updated list of attendees matching my selection

WHEN I delete an Event
THEN attendees should be notified that the event is cancelled

GIVEN I am looking for an event to join

WHEN I am not signed in
THEN I will see a simplified view of upcoming events

WHEN I am signed in
THEN I will see a calendar view of all upcoming events
AND a summary of the events I will be attending

WHEN I view an event
THEN I will have the option to express interest AND attach a note
IF I am not signed in
THEN I will be prompted to create an account

WHEN I view an event I am attending
THEN I will see who else is attending, and their notes

WHEN I cancel my attendance
THEN I should no longer be able to see myself in the attendance list, nor the notes of attendees

WHEN I delete my account
THEN I should be removed from all events
```

## Usage

| Steps            | Details                                                           |
| ---------------- | ----------------------------------------------------------------- |
| Live application | [Spawnpoint](https://github.com/darrendoan/Group-5-Project-2.git) |
| Clone this repo  | ` git clone https://github.com/darrendoan/Group-5-Project-2.git`  |
| run on vs        | `cd ..`                                                           |

## Instruction

## Overview

#### Features:

#### Motivation For Development:

#### Challenges:

#### Successes:

## Screenshots

## APIs Used

- [MailGun](https://documentation.mailgun.com/)

```md
URL: https://documentation.mailgun.com/
```

- [example](https://.../)

```md
URL: https://api.rawg.io/api/games?key={YOUR-API-KEY}
```

## Technologies Used

- HTML/CSS
- Javascript
- Node.js
- Express.js
- mySQL2
- Sequelize ORM
- Handlebars.js
- Dotenv
- eslint
- [Google Fonts](https://fonts.google.com/)
- [Font Awesome](https://fontawesome.com/)

## Contribution/Roles

| Contributors                                       | Roles                | Task                                                                          |
| -------------------------------------------------- | -------------------- | ----------------------------------------------------------------------------- |
| [Darren Doan](https://github.com/darrendoan)             | Full Stack Developer | Created and Maintained Github Repository<br>                                  |
| [Jean Piere ](https://github.com/)                        | Full Stack Developer | Project Manager/Developer<br>                                                                  |
| [Muhamad Sahid](https://github.com/BrxwnSugxr)     | Full Stack Developer | Database<br> Created and Completed README<br> Prepared Presentation Slideshow |
| [Nathaniel Poulson](https://github.com/natpoulson) | Full Stack Developer | Project Manager/Developer                                                     |

_The roles mentioned above are rough representation of individual member's tasks. Thoroughout the project, we all collaborated and contributed to each other's coding._

## Installation Instruction

```md
- [npm Install]post img of packageson
```

## Installation Instruction

- [Install nodejs and npm](https://nodejs.org/en/download)
- [Install Insomnia](https://insomnia.rest/download)
- [Install MySQL](https://dev.mysql.com/downloads/mysql/)

## License

This project is licensed under the [MIT License](https://github.com/darrendoan/Group-5-Project-2/blob/main/LICENSE).
