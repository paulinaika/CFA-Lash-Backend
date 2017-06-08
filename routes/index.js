var express = require('express');
var router = express.Router();

const Lash = require('../models/Lash')
const LashController = require('../controllers/lash_controller')

/* GET home page. */
router.get('/', LashController.getLash);
router.post('/', LashController.createLash);

// Edit page
router.get('/:id/edit', LashController.getEdit);
router.post('/:id/edit', LashController.updateLash);

// Delete
router.post('/:id/delete', LashController.deleteLash);

//Update quantity
// router.post('/:id/transaction'), LashController, newQuantity);

// APIs

// GET API

router.get('/api', LashController.getLashApi);
router.post('/api', LashController.createLashApi);

// EDIT API

router.get('/api/:id', LashController.getSingleLashApi);
router.post('/api/:id/edit', LashController.updateLashApi);

// DELETE API

router.delete('/api/:id/delete', LashController.deleteLashApi);


// Update Quantity API

router.post('/api/:id/transaction', LashController.newQuantityApi);

module.exports = router;
