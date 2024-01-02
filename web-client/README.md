# Web Client for Cryptocurrency Conversion

This project is a web client built with React, designed for converting cryptocurrencies to various fiat currencies. It fetches market data and supported currencies from a backend API and provides a user-friendly interface for currency conversion.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository to your local machine.
   ```
   git clone https://github.com/Aryamanraj/dzap-simple-currency-converter.git
   ```

2. Navigate to the project directory.
   ```
   cd web-client
   ```

3. Install the necessary dependencies.
   ```
   npm install
   ```

4. Start the development server.
   ```
   npm start
   ```

The application will be available at `http://localhost:3000`.

## Project Structure

### `src/App.js`

The main React component that sets up the Router and defines the route for the home page.

### `src/pages/Home.js`

A React component for the home page. It handles the main logic for fetching supported currencies, fetching market data, currency conversion, and managing the application state.

### `src/components/Header.js`

A simple React component for the application header.

### `src/utils/CurrencyAPI.js`

Contains functions to interact with the backend API:
- `fetchSupportedCurrencies`: Fetches a list of supported fiat and cryptocurrencies.
- `fetchMarketData`: Retrieves the latest market data for cryptocurrencies.
- `calculatePrice`: Calculates the converted price based on user input.

### `src/pages/home.css`

CSS file for styling the Home component.

### `src/components/header.css`

CSS file for styling the Header component.

## Environment Variables

- `REACT_APP_API_BASE_URL`: Base URL for the backend API. Defaults to `http://localhost:5000/api` if not specified.

## Usage

- Select a cryptocurrency and a fiat currency.
- Enter an amount to convert.
- Click 'Convert' to see the conversion results.

## Contributing

Contributions are welcome. Please feel free to submit pull requests or open issues for improvements.

## License

[Your License Choice]

## Contact

Your Contact Information
