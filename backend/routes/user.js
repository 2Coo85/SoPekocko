const express = require('express');
const router = express.Router();

const User = require('../models/users');

router.post('/signup', (req, res, next) => {
    const newUser = new User({
        email: req.body.email,
        password: req.body.password
    });
    newUser.save().then(
        () => {
            res.status(201).json({
                message: 'New User registered successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
});

router.post('/login', (req, res, next) => {
    const existingUser = new User({
        email: req.body.email,
        password: req.body.password
    });
    newUser.save().then(
        () => {
            res.status(201).json(userId);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
});

module.exports = router;