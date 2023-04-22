const mongoose = require('mongoose');
const dotenv = require('dotenv').config();


const dbConnect = () => {

    mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((conn) => { console.log(`Database connected successfully with ${conn.connection.host}`); })
        .catch((err) => { console.error(err); });

}


module.exports = dbConnect;
