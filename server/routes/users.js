const { Router } = require('express')
const { getUserCollection } = require('../db/conn')
const { transporter } = require('../notification/mail')
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
    // phone validation
    if (req.body.phoneNumber == null || req.body.phoneNumber.trim() == '') {
        return res.status(500).json({ message: "Phone number is required" })
    }

    let collection = await getUserCollection();
    let user = new User({
        name: req.body.name,
        dateOfBirth: req.body.dateOfBirth,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
    });
    try {
        const newUser = await collection.insertOne(user);
        // send mail
        const dob = new Date(user.dateOfBirth).toLocaleDateString();
        const mailData = {
            from: process.env.MAIL_USER,  // sender address
            to: req.body.email,   // list of receivers
            subject: '[GT] Form received',
            text: `We successfully received your form: \n\nName: ${user.name}, \nDate of birth:  ${dob}, \nEmail:  ${user.email}, \nPhone number:  ${user.phoneNumber}`,
        };
        transporter.sendMail(mailData, function (err) {
            if (err)
                console.log(err)
        })
        return res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});


module.exports = router