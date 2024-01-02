const express = require('express');
const cryptoHandler = require('../handlers/cryptoOperations');

const router = express.Router();

router.get('/supported-currencies', cryptoHandler.getSupportedCurrencies);
router.get('/market-data', cryptoHandler.getMarketData);
router.get('/calculate-price', cryptoHandler.calculatePrice);

module.exports = router;
