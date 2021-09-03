# trippin

A travel review app where users pin locations and write reviews on them. Has login and register functionality, using MongoDB Atlas for cloud storage.

## Demo
https://trip-pin-app.herokuapp.com/

## Overview

### Frontend
This application was created using [React](https://reactjs.org/) with [Sass](https://sass-lang.com/) and a few [Material-UI](https://material-ui.com/) icons and components. [Mapbox](https://www.mapbox.com/) was used to render the map.

### Backend, Database, Authentication, Deployment
This application uses [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/) for its backend. On the client side, [Axios](https://axios-http.com/docs/intro) was used to make HTTP requests.
[Mongoose](https://mongoosejs.com/) was used to model the data which were hosted using a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cloud database. Some of the data saved include the pins and users' usernames, hashed passwords, and display names.
To safely authenticate users, [bcrypt](https://www.npmjs.com/package/bcrypt) was used to hash passwords that were entered in the registration component.
Finally, [Heroku](https://www.heroku.com/) was used for deploying the app.
