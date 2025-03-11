const express = require('express');
const app = express();
const dotenv = require('dotenv');


const router=require("./routes/leadRoutes")

// Load environment variables
dotenv.config("./.env")

// Connect to MongoDB
const connectDB = require('./config/db');
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api',router)

// Default route
app.get('/', (req, res) => {
    return res.send('Welcome to the server');
})

// Start server
let PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});