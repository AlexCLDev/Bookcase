const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/node-db-app') .then(() => {
    console.log("connected to database");
})
