# Travel Panner

[TODO: short overview of project here]

## Quickstart

[TODO: Bullet points on how to get this app running locally]

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

######################################## > INSERT PROJECT NAME HERE < ###################

what is our idea -

destination input - dates -

User's data / planning/ planner page -

user's trips : { trip1:
start date - end date - city - country - [optional params - ]
start date - end date - city - country
start date - end date - city - country
}

<tba step>

<suggest stuff to make trip better>
pick an activity/string, date, time, location -
and then get chatgpt to suggest where to go and how.

Base URL - https://travel-planner-vza0.onrender.com/
Test route - /api/test

- Start Command: `node server.js` for render.com

############################################## BEIWEIS ORIGINAL STUFF ######################################################

# README

This is the [Express](https://expressjs.com) [Hello world](https://expressjs.com/en/starter/hello-world.html) example on [Render](https://render.com).

The app in this repo is deployed at [https://express.onrender.com](https://express.onrender.com).

## Deployment

See https://render.com/docs/deploy-node-express-app or follow the steps below:

Create a new web service with the following values:

- Build Command: `yarn`
- Start Command: `node server.js`

That's it! Your web service will be live on your Render URL as soon as the build finishes.
