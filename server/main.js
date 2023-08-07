
const express = require('express')
require('dotenv').config();

const app = express()

app.use(express.json());
const userRoutes = require('./routes/users');
app.use('/users', userRoutes)

async function start() {
    app.listen(process.env.PORT, () => console.log(`App is listening at http://localhost:${process.env.PORT}`));
}

start().catch(console.dir);