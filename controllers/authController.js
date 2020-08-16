const passport = require('passport');
const bcryptjs = require('bcryptjs');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const JWT_KEY = "jwtactive987";
const CLIENT_URL = "https://localhost:3006";

//------------ User Model ------------//
const User = require('../models/User');

//------------ Register Handle ------------//
exports.registerHandle = (req, res) => {
    const { name, email, password, password2 } = req.body;
    let errors = [];

    //------------ Checking required fields ------------//
    if (!name || !email || !password || !password2) {
        errors.push({ msg: 'Please enter all fields' });
    }

    //------------ Checking password mismatch ------------//
    if (password != password2) {
        errors.push({ msg: 'Passwords do not match' });
    }

    //------------ Checking password length ------------//
    if (password.length < 8) {
        errors.push({ msg: 'Password must be at least 8 characters' });
    }

    if (errors.length > 0) {
        res.render('register', {
            errors,
            name,
            email,
            password,
            password2
        });
    } else {
        //------------ Validation passed ------------//
        User.findOne({ email: email }).then(user => {
            if (user) {
                //------------ User already exists ------------//
                errors.push({ msg: 'Email ID already registered' });
                res.render('register', {
                    errors,
                    name,
                    email,
                    password,
                    password2
                });
            } else {
                const newUser = new User({
                    name,
                    email,
                    password
                });

                const token = jwt.sign({ name, email, password }, JWT_KEY, { expiresIn: '20m' });

                const output = `
                <h2>Please click on below link to activate your account</h2>
                <p>${CLIENT_URL}/auth/activate/${token}</p>
                `;

                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: "nodejsa@gmail.com",
                        pass: "nodejs123",
                    },
                });

                // send mail with defined transport object
                const mailOptions = {
                    from: '"Auth Admin" <nodejsa@gmail.com>', // sender address
                    to: email, // list of receivers
                    subject: "Account Verification: NodeJS Auth ✔", // Subject line
                    html: output, // html body
                };

                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        return console.log(error);
                    }
                    console.log('Mail sent : %s', info.response);
                })
            }
        });
    }
}

exports.activateHandle = (req, res) => {
    // const { token } = req.params.token;
    res.send("hiii" + req.params.token);
    // if (token) {
    //     jwt.verify(token, JWT_KEY, (err, decodedToken) => {
    //         if (err) {
    //             return res.status(400).json({
    //                 error: 'Incorrect or expired link! Please re-try.'
    //             })
    //         }
    //         const { name, email, password } = decodedToken;
    //         User.findOne({ email: email }).then(user => {
    //             if (user) {
    //                 //------------ User already exists ------------//
    //                 errors.push({ msg: 'Email ID already registered' });
    //                 res.render('register', {
    //                     errors,
    //                     name,
    //                     email,
    //                     password,
    //                     password2
    //                 });
    //             } else {
    //                 const newUser = new User({
    //                     name,
    //                     email,
    //                     password
    //                 });

    //                 bcryptjs.genSalt(10, (err, salt) => {
    //                     bcryptjs.hash(newUser.password, salt, (err, hash) => {
    //                         if (err) throw err;
    //                         newUser.password = hash;
    //                         newUser
    //                             .save()
    //                             .then(user => {
    //                                 req.flash(
    //                                     'success_msg',
    //                                     'Registration successful. Please log in.'
    //                                 );
    //                                 res.redirect('/auth/login');
    //                             })
    //                             .catch(err => console.log(err));
    //                     });
    //                 });
    //             }
    //         });
    //     })
    // }
    // else {
    //     console.log("Account activation error!")
    // }

}

//------------ Login Handle ------------//
exports.loginHandle = (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/auth/login',
        failureFlash: true
    })(req, res, next);
}

//------------ Logout Handle ------------//
exports.logoutHandle = (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/auth/login');
}