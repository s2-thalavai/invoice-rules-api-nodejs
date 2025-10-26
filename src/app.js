require('dotenv').config();

const express = require('express');
const app = express();
const rulesRoutes = require('./routes/rules.routes');
const errorHandler = require('./middleware/errorHandler');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../config/swagger');

app.use(express.json());
app.use('/api/rules', rulesRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Invoice Rules API running on port ${PORT}`));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));