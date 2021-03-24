var express = require('express');
var router = express.Router();
var config = require('../config/keys');
const stripe = require('stripe')(config.STRPE_SK);

/* GET home page. */
router.get('/', async function(req, res, next) {

  const charges = await stripe.charges.list({
    limit: 3,
  });

  const firstCharge = charges.data[0];

  res.render('index', {
    title: 'Ecommerce', 
    charge: firstCharge
  });
});

module.exports = router;
