## TripTales

This is the third project out 4 of for General Assembly Software Engineering Intensive Course.
TripTales is a travel logger app that allows users to log their destinations, travel dates and they receive OpenAI suggestions based on destinations entered.

[**_You can access the app via this link_**](https://google.com/)

## Technologies used

- HTML
- CSS
- Bootstrap
- JavaScript
- Express
- Node.js
- MongoDB
- OpenAI API
- Unsplash API
- The app is deployed on Render

## Quickstart

Clone this repo locally, and then run the following commands in your terminal:

```bash
npm install
```

To run the app:

```bash
nodemon server.js
```

...

## Project layout

This project roughly follows a MVC layout.

```bash
├── README.md
├── client             # VIEW: frontend code lives here
│   ├── css
│   │   └── ... # css files here
│   ├── index.html
│   └── js
│       └── ... # js files here
├── config
│   └── mongoConfig.js  # Basic settings. Probably should be top leve file...
├── middleware
│   └── sessions.js
├── model               # MODEL: CRUD operations and DB schema live here
│   ├── tripsModel.js
│   ├── userModel.js
│   ├── sessionController.js
│   ├── tripsController.js
│   └── usersController.js
├── package-lock.json
├── package.json
├── routes              # CONTROLLER: our routes live here
│   ├── api
│   ├── login.js
│   ├── logout.js
│   └── register.js
└── server.js           # App entrypoint
```
