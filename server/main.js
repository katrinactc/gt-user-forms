
const express = require('express')
require('dotenv').config();

const app = express()

app.use(express.json());
const userRoutes = require('./routes/users');
app.use('/users', userRoutes)

const { connectToServer } = require('./db/conn');

async function start() {
    await connectToServer();
    app.listen(process.env.PORT, () => console.log(`App is listening at http://localhost:${process.env.PORT}`));
}

start().catch(console.dir);