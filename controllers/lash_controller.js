const mongoose = require('mongoose');
const Lash = require('../models/Lash')

exports.getLash = (req, res) => {
  Lash.find()
    .then((alllashes) => {
      // index refers to the to the file name index in the views folder
      res.render('index', {alllashes: alllashes, title: 'Lash Database'})
    });
};

exports.getLashApi = (req, res) => {
  Lash.find()
    .then((alllashes) => {
      res.json(alllashes)
    });
};

exports.createLash = (req, res) => {
  console.log(req)
  const name = req.body.name;
  const category = req.body.category;
  const price = req.body.price;
  const quantity = req.body.quantity;
  const description = req.body.description;
  const image = req.body.image;


  let lash = new Lash ();
  lash.name = name;
  lash.category = category;
  lash.price = price;
  lash.quantity = quantity;
  lash.description = description;
  lash.image = image;

  lash.save()
    .then(() => {
      res.redirect('/');
    })
};

exports.createLashApi = (req, res) => {
  console.log(req)
  const name = req.query.name;
  const category = req.query.category;
  const price = req.query.price;
  const quantity = req.query.quantity;
  const description = req.query.description;
  const image = req.query.image;

  let lash = new Lash ();
  lash.name = name;
  lash.category = category;
  lash.price = price;
  lash.quantity = quantity;
  lash.description = description;
  lash.image = image;

  lash.save()
    .then(() => {
      res.redirect('/api');
    })
};

exports.getEdit = (req, res) => {
  // edit refers to the file name edit in the views folder
  // Make sure that you start the model/class with a capital letter mate!
  Lash.findOne({_id: req.params.id})
    .then(lash => {
        res.render('edit', {lash: lash})
    })
};

exports.getSingleLashApi = (req, res) => {
  Lash.findOne({_id: req.params.id})
    .then(lash => {
        res.json(lash)
    })
};

exports.updateLash = (req, res) => {
  Lash.findOneAndUpdate({ _id: req.params.id}, req.body, {
    new: true
  })
    .then(() => {
      res.redirect('/');
    });
};

exports.updateLashApi = (req, res) => {
  Lash.findOneAndUpdate({ _id: req.params.id}, req.query, {
    new: true
  })
    .then(() => {
      res.redirect(`/api/${req.params.id}`);
    });
};

exports.deleteLash = (req,res) => {
  Lash.findOneAndRemove({ _id: req.params.id})
    .then(() => {
      res.redirect('/');
    });
};

exports.deleteLashApi = (req,res) => {
  Lash.findOneAndRemove({ _id: req.params.id})
    .then(() => {
      res.redirect('/api');
    });
};

// Update Quantity

exports.newQuantityApi = (req, res) => {
  Lash.findOneAndUpdate({ _id: req.params.id}, { $inc: { quantity : req.body.quantity }}, {
    new: true
  })
    .then((lash) => {
      // res.redirect(`/api/${req.params.id}`);
      res.json(lash)
    });
};
