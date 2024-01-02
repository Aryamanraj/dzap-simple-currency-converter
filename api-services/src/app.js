require('dotenv').config(); // Add this line at the top of your file

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cryptoRoutes = require('./endpoints/cryptoRoutes');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json()); 

const swaggerDocument = YAML.load('./src/configurations/swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', cryptoRoutes);

const port = process.env.PORT || 5000; // Use environment variable or default to 3000
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

module.exports = app;
