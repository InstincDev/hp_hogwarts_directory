# Hogwarts Directory

A Harry Potter themed roster of Hogwarts students, staff, and alumni.
Created to accompany [Harry Potter Themed MVC Lecture](https://youtu.be/__oXGxIcDCM) video.

## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Demo

Insert gif or link to demo


## Packages/Dependencies

connect-mongo, dotenv, ejs, express, express-ejs-layouts, mongodb, mongoose, nodemon


## Installation
    clone https://github.com/insticdev/hp_hogwarts_directory
    install node and run npm install
    Create an account in https://www.mongodb.com/ and create a collection, ensure network access from 0.0.0.0/0
    Copy the connection url from MongoDB to your local directory in a .env file.
    Name the variable dbURI_time=<mongodb+srv://connection url>


## Deployment

To deploy this project run

```bash
For Developement, run npm run dev in the root directory. (the express app will serve the .ejs frontend)
For Production, run npm start in the root directory. (the express app will serve the .ejs frontend)
```


## Features

- Visit the Great Hall to see a complete list of students, staff, and alumni
- Visit Each of the four (4) Houses to see a list of students and staff belonging to that House
- Add new individuals to the school roster.


## Optimizations

Completed:
- Converted HTML Template from Handlebars to EJS
- Implimented EJS Layaouts

Future:
- Update directory information
- User authentication
- Specify access to information depending on users school status


## Lessons Learned

- Handlebars and EJS syntax differences


