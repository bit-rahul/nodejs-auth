# NodeJS Authentication App
> A complete authentication app with login, logout, register, forget password, email verification(for added security), and access control. Can be used as starter for other Node.JS applications. using Node.js, Express, Passport, JWT, Mongoose, and more. 

## Web App Link
http://serene-headland-22338.herokuapp.com/

![Screenshot (4)](https://user-images.githubusercontent.com/49118089/90341145-b776a900-e01a-11ea-93c8-4f6864a141c1.png)

## Technologies Used
1.  NodeJS
2.  Express
3.  EJS
4.  MongoDB
5.  Mongoose
6.  PassportJS
7.  JWT
8.  Nodemailer


## Prerequisites
- Git
- NodeJS
- CLI

## Installation

##### Clone the latest Repository

`git clone https://github.com/rahulsups/nodejs-auth.git`

##### Into the project directory

`cd nodejs-auth`

##### Installing NPM dependencies

`npm install`

##### Then simply start your app

`npm start`

#### The Server should now be running at http://localhost:3006/

## Folder Structure

nodejs-auth <br>
├── assets <br>
│ --- ├── secure-icon.png <br>
│ --- ├── cyber-security-icon.jpg <br>
│ --- └── css <br>
│ -------- └── bootstrap.min.css <br>
├── config <br>
│ --- ├── checkAuth.js <br>
│ --- ├── key.js <br>
│ --- └── passport.js <br>
├── config <br>
│ --- └──authController.js
├── models <br>
│ --- └── User.js <br>
├── node_modules <br>
├── routes <br>
│ --- ├── auth.js <br>
│ --- └── index.js <br>
├── views <br>
│ --- ├── dash.ejs <br>
│ --- ├── forgot.ejs <br>
│ --- ├── layout.ejs <br>
│ --- ├── login.ejs <br>
│ --- ├── messages.ejs <br>
│ --- ├── register.ejs <br>
│ --- ├── reset.ejs <br>
│ --- └── welcome.ejs <br>
├── .gitignore <br>
├── package.json <br>
├── package-lock.json <br>
├── README.md <br>
└── server.js <br>
