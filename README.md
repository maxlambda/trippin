# trippin

A travel review app where users pin locations and write reviews on them. User data is stored and managed using MongoDB Atlas. New features are being worked on.

## Demo
https://trip-pin-app.herokuapp.com/

## Overview

### Frontend
This application was created using [React](https://reactjs.org/) with [Sass](https://sass-lang.com/) and a few [Material-UI](https://material-ui.com/) icons and components. [Mapbox](https://www.mapbox.com/) was used to render the map. A Geocoder is used for mapping place names to geographical coordinates (i.e. place-search functionality).

### Backend, Database, Authentication, and Deployment
This application uses [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/) for its backend. On the client side, [Axios](https://axios-http.com/docs/intro) was used to make HTTP requests.
[Mongoose](https://mongoosejs.com/) was used to model the data which were hosted using a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cloud database. Some of the data saved include the pins and users' usernames, hashed passwords, and display names.
To safely authenticate users, [bcrypt](https://www.npmjs.com/package/bcrypt) was used to hash passwords that were entered in the registration component.
Finally, [Heroku](https://www.heroku.com/) was used to deploy the app.

## Local Development

Run `npm install` to install the server's required dependencies. Then, run:
```
cd client
npm install
```
to install the necessary dependencies for the frontend. Finally, in `server.js` from the root directory, uncomment lines 17-21 while commenting out lines 23-25 to use a local database (MongoDB must be installed locally).

Finally, run `npm run dev` for local development. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. 
