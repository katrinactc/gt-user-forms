const { Router } = require('express')
const { getUserCollection } = require('../db/conn')
const router = Router()
const User = require('../models/user')

// get all users
router.get('/', async (req, res) => {
    try {
        let collection = await getUserCollection();
        const users = await collection.find({}).toArray();
        return res.status(200).json(users);
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
})

// create one user
router.post("/", async (req, res) => {
    let collection = await getUserCollection();
    let user = new User({
        name: req.body.name,
        dateOfBirth: req.body.dateOfBirth,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
    });
    try {
        const newUser = await collection.insertOne(user);
        return res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});


module.exports = router