const express = require('express');
const users = require('./data/cars');
const port = process.env.PORT || 5000;
const app = express();



app.get('/notes', (req, res) => {
    res.json(users);
})

app.get('/notes/:id', (req, res) => {

    const note = users.find((e) => {
        return e.id === req.params.id;
    })

    console.log(note);

    res.json(note);

})


app.listen(port, (req, res) => {
    console.log(`Server started on port ${port}`);

})