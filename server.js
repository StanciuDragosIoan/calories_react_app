const express = require('express');
const connectDB = require('./config/db');

const app = express();

//connect to DB
connectDB();

//init middleware (bodyparser)
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API for calorica Running'));

//define routes
app.use('/api/foods', require('./routes/api/foods'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server for calorica started on port ${PORT}`)
);
