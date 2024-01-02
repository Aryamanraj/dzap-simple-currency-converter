# Cryptocurrency Conversion Platform

This platform consists of a React-based web client and a Node.js/Express API service for converting cryptocurrencies to various fiat currencies. It offers a user-friendly interface for currency conversion and an API for fetching supported currencies, market data, and calculating prices.

## Components

1. **Web Client (Frontend)**: A React application for users to interact with the cryptocurrency conversion functionality.
2. **API Services (Backend)**: A Node.js server providing endpoints for the web client to fetch data and perform conversions.

## Getting Started

### Web Client Installation

1. Clone the repository to your local machine.
   ```
   git clone https://github.com/Aryamanraj/dzap-simple-currency-converter.git
   ```

2. Navigate to the `web-client` directory.
   ```
   cd web-client
   ```

3. Install the dependencies.
   ```
   npm install
   ```

4. Start the development server.
   ```
   npm start
   ```

   The application will be available at `http://localhost:3000`.

### API Services Installation

1. Navigate to the `api-services` directory.
   ```
   cd api-services
   ```

2. Install the dependencies.
   ```
   npm install
   ```

3. Start the server.
   ```
   npm start
   ```

   The server will be running on `http://localhost:5000`.

## Usage

- **Web Client (Frontend)**: Access the web client at [http://16.171.145.49:3000/](http://16.171.145.49:3000/).
- **API Services (Backend)**: Use the API endpoints for custom integrations. API documentation available at [http://51.20.9.119:5000/api-docs/](http://51.20.9.119:5000/api-docs/).

## Web Client Features

- Select cryptocurrencies and fiat currencies for conversion.
- Enter an amount and convert to see the conversion results.
- Fetches data from the backend API.

## API Services Features

- **Endpoints**:
  - `GET /api/supported-currencies`: Fetches supported cryptocurrencies and fiat currencies.
  - `GET /api/market-data`: Retrieves market data for cryptocurrencies.
  - `GET /api/calculate-price`: Calculates the price for a given amount of cryptocurrency.