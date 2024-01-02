const cryptoLogic = require('../logic/cryptoLogic');

const getSupportedCurrencies = async (req, res, next) => {
  try {
    const data = await cryptoLogic.fetchSupportedCurrencies();
    res.json(data);
  } catch (error) {
    next(error);
  }
};

const getMarketData = async (req, res, next) => {
  try {
    const data = await cryptoLogic.fetchMarketData();
    res.json(data);
  } catch (error) {
    next(error);
  }
};

const calculatePrice = async (req, res, next) => {
  try {
    const { currency, supported, amount } = req.query;
    const data = await cryptoLogic.computePrice(currency, supported, amount);
    res.json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = { getSupportedCurrencies, getMarketData, calculatePrice };
