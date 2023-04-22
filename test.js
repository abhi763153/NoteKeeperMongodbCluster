// const dotenv = require('dotenv').config();

// console.log(process.env.DB_CONNECT);

const user = {
    id: 1,
    name: "Abhishek Kumar",
    email: "abhishekkamti723@gmail.com",
    notes: [
        {
            id: 1,
            title: "My Goals",
            description: "There are lots of goal I have to acheive"
        },
        {
            id: 2,
            title: "My Goals",
            description: "There are lots of goal I have to acheive"
        },
        {
            id: 3,
            title: "My Goals",
            description: "There are lots of goal I have to acheive"
        }
    ]
}

const name = "Aman";

module.exports = { user, name };