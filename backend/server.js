const express = require('express');
const notes = require('./data/data');
const dbConnect = require('./config/db');
const User = require('./Models/userNotesModel');
const bcrypt = require('bcrypt');
const cors = require('cors');
const saltRounds = 10;
const port = process.env.PORT || 5000;
const app = express();

dbConnect();

app.use(express.json());
app.use(cors())


app.post('/register', async (req, res) => {

    const { name, email, password } = req.body;


    try {

        const doc = await User.findOne({ email });

        if (doc) {
            res.json({ message: "User already exit", isUserAlreadyExist: true })
            console.log("User already exist");
        }
        else {
            bcrypt.hash(password, saltRounds, function (err, hash) {
                const newUser = new User({
                    name,
                    email,
                    password: hash,
                    notes: []
                });

                newUser.save()
                    .then(() => {
                        console.log('Registered successfully');
                        res.json({ message: "Registeration successfull", isUserAlreadyExist: false })

                    })
                    .catch((err) => {
                        console.error(err);
                    });
            });

        }
    }
    catch (err) {
        console.log(err);
    }



});

app.post('/login', async (req, res) => {

    const { email, password } = req.body;


    try {

        const doc = await User.findOne({ email });
        console.log(doc);

        if (doc) {
            bcrypt.compare(password, doc.password, function (err, result) {
                if (result) {
                    res.json({ LoggedIn: true, message: "Logged in successfull", user: doc })
                }
                else {
                    res.json({ LoggedIn: false, message: "Logged in Failed" })
                }
            });
        }
        else {
            res.json({ LoggedIn: false, message: "User not registered" })
        }
    }
    catch (err) {
        console.error(err);
    }

})

app.get('/notes', (req, res) => {
    console.log(typeof notes);

    res.json(notes);
})

app.get('/notes/:id', (req, res) => {
    const note = notes.find((e) => {
        console.log(typeof e.id, typeof req.params.id);
        return e.id === Number(req.params.id);
    })



    res.json(note);

})


app.listen(port, (req, res) => {
    console.log(`Server started on port ${port}`);

})