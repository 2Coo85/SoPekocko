const Sauce = require('../models/sauce');
const fs = require('fs');

exports.createSauce = (req, res, next) => {
    req.body.thing = JSON.parse(req.body.thing);
    const url = req.protocol + '://' + req.get('host');
    const sauce = new Sauce({
        name: req.body.name,
        imageUrl: url + '/images/' +req.file.filename,
        likes: req.body.likes,
        dislikes: req.body.dislikes,
        usersLiked: req.body.usersLiked,
        usersDisliked: req.body.usersDisliked
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
}

exports.getOneSauce = (req, res, next) => {
    Sauce.findOne({
        _id: req.params.id
    })
    .then(
        (sauce) => {
            res.status(200).json(sauce);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
}

exports.updateSauce = (req, res, next) => {
    let sauce = new Sauce({_id: req.params._id});
    if (req.file) {
        sauce = {
            _id: req.params.id,
            imageUrl: url + '/images/' + req.file.filename,
            description: req.body.sauce.description,
            manufacturer: req.body.sauce.manufacturer,
            mainPepper: req.body.sauce.mainPepper,
            heat: req.body.sauce.heat,
            name: req.body.sauce.name
        };
    } else {
        sauce = {
            _id: req.params.id,
            imageUrl: req.body.imageUrl,
            description: req.body.description,
            manufacturer: req.body.manufacturer,
            mainPepper: req.body.mainPepper,
            heat: req.body.heat,
            name: req.body.name
        };
    }
    sauce.updateOne({_id: req.params.id}, sauce).then(
        () => {
            res.status(201).json({
                message: 'Sauce updated successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}

exports.deleteSauce = (req, res, next) => {
    Sauce.findOne({_id: req.params.id}).then(
        (thing) => {
            const filename = thing.imageUrl.split('/images/')[1];
            fs.unlink('images/' + filename, () => {
                Sauce.deleteOne({_id: req.params.id}).then(
                    () => {
                        res.status(200).json({
                            message: 'Deleted!'
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
        }
    );  
};

exports.likeSauce = (req, res, next) => {
    const sauce = new Sauce({
        userId: req.body.userId,
        likes: req.body.likes,
        dislikes: req.body.dislikes,
        usersLiked: req.body.usersLiked,
        usersDisliked: req.body.usersDisliked
    });
    sauce.save().then(
        () => {
            res.status(201).json();
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}

exports.getAllSauces = (req, res, next) => {
    Sauce.find().then(
        (sauces) => {
            res.status(200).json(sauces);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}