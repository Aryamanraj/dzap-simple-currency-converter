# Cryptocurrency Conversion API Services

This repository contains the backend services for a cryptocurrency conversion application. It's built with Node.js and Express, and includes endpoints for fetching supported currencies, market data, and calculating prices.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository to your local machine.
   ```
   git clone https://github.com/Aryamanraj/dzap-simple-currency-converter.git
   ```

2. Navigate to the `api-services` directory.
   ```
   cd api-services
   ```

3. Install the necessary dependencies.
   ```
   npm install
   ```

4. Start the server.
   ```
   npm start
   ```

The server will be running on `http://localhost:5000`.

## Project Structure

### `src/app.js`

The main server file that sets up Express with CORS, morgan for logging, and routes. It also includes Swagger documentation setup.

### `src/logic/cryptoLogic.js`

Contains the business logic for the API:
- `fetchSupportedCurrencies`: Fetches and caches the list of supported cryptocurrencies and fiat currencies.
- `fetchMarketData`: Retrieves and caches market data for cryptocurrencies.
- `computePrice`: Calculates the price for a given amount of cryptocurrency in a specified fiat currency.

### `src/handlers/cryptoOperations.js`

Request handlers for the API endpoints:
- `getSupportedCurrencies`: Handler for fetching supported currencies.
- `getMarketData`: Handler for fetching market data.
- `calculatePrice`: Handler for calculating the price based on the provided parameters.

### `src/endpoints/cryptoRoutes.js`

Defines the Express routes for the API:
- `/supported-currencies`: Route for fetching supported currencies.
- `/market-data`: Route for fetching market data.
- `/calculate-price`: Route for calculating cryptocurrency prices.

## Environment Variables

- `PORT`: The port number on which the server will run. Defaults to 5000 if not specified.

## API Usage

- `GET /api/supported-currencies`: Fetches a list of supported cryptocurrencies and fiat currencies.
- `GET /api/market-data`: Retrieves market data for cryptocurrencies.
- `GET /api/calculate-price?currency=[currency]&supported=[supported]&amount=[amount]`: Calculates the price for a given amount of cryptocurrency in a specified fiat currency.