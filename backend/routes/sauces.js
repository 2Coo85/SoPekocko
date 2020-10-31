const express = require('express');
const { route } = require('../app');
const router = express.Router();

const Sauce = require('../models/sauce');

router.post('/', (req, res, next) => {
    const sauce = new Sauce({
        sauce: req.body.name,
        imageUrl: req.body.imageUrl
    });
    sauce.save().then(
        () => {
            res.status(201).json({
                message: 'New sauce added to database successfully!'
            });
        }
    ).catch(
        (error) => {
            error: error
        }
    );
});

router.get('/:id', (req, res, next) => {
    const sauce = new Sauce({
        sauce: req.body.name,
        imageUrl: req.body.imageUrl
    });
    sauce.save().then(
        () => {
            res.status(201).json({
                message: ''
            });
        }
    ).catch(
        (error) => {
            error: error
        }
    );
});

router.put('/:id', (req, res, next) => {
    const sauce = new Sauce({
        sauce: req.body.name,
        imageUrl: req.body.imageUrl
    });
    sauce.save().then(
        () => {
            res.status(201).json({
                message: 'Updated successfully!'
            });
        }
    ).catch(
        (error) => {
            error: error
        }
    );
});

router.delete('/:id', (req, res, next) => {
    const sauce = new Sauce({
        sauce: req.body.name,
        imageUrl: req.body.imageUrl
    });
    sauce.save().then(
        () => {
            res.status(201).json({
                message: 'Deleted!'
            });
        }
    ).catch(
        (error) => {
            error: error
        }
    );
});

router.get('/:id/like', (req, res, next) => {
    const sauce = new Sauce({
        sauce: req.body.name,
        imageUrl: req.body.imageUrl
    });
    sauce.save().then(
        () => {
            res.status(201).json({
                message: 'New sauce added to database successfully!'
            });
        }
    ).catch(
        (error) => {
            error: error
        }
    );
});

router.get('/' + '', (req, res, next) => {
    const sauce = new Sauce({
        sauce: req.body.name,
        imageUrl: req.body.imageUrl
    });
    sauce.save().then(
        () => {
            res.status(201).json({
                message: 'New sauce added to database successfully!'
            });
        }
    ).catch(
        (error) => {
            error: error
        }
    );
});

module.exports = router;