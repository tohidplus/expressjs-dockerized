const Post = require('../models').Post;
exports.index = (req, res) => {
    res.json({message: "Hello world!"});
}
exports.create = (req, res) => {
    return Post.create({
        title: req.body.title,
        body: req.body.body
    })
    .then(post => res.status(201).send(post))
    .catch(error => res.status(400).send(error));
}