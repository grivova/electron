require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db');
const employeeRoutes = require('./routes/employee');
const handbookRoutes = require('./routes/handbook');
const { logger } = require('./config/logger');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/api/employee', employeeRoutes);
app.use('/api/handbook', handbookRoutes);

app.get('/api/test', (req, res) => {
    res.json({ message: 'API работает' });
});

connectDB();

app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`);
}); 