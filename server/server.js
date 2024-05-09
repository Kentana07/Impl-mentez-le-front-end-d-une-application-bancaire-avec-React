const express = require('express');
const path = require('path');
const dotEnv = require('dotenv');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs');
const swaggerDocs = yaml.load('./swagger.yaml');
const dbConnection = require('./database/connection');

dotEnv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to the database
dbConnection();

// Handle CORS issues
app.use(cors());

// Request payload middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handle custom routes for the API
app.use('/api/v1/user', require('./routes/userRoutes'));

// API Documentation only in non-production environment
if (process.env.NODE_ENV !== 'production') {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
}


app.get('/', (req, res, next) => {
  res.send('Hello from my Express server v2!')
})

// Serve static files from the React app in the public directory
// app.use(express.static(path.join(__dirname, '..', 'src')));


// Redirect all non-API requests to the React app
// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'src', 'index.html'));
// });

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});