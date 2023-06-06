const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, {useUnifiedTopology: true, useNewUrlParser: true}, () => {
    console.log('connected to db');
});