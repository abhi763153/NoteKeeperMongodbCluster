const express = require('express');
const notes = require('./data/data');
const port = process.env.PORT || 5000;
const app = express();


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