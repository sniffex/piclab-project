const express = require ("express");
const cors = require ('cors');
const dotenv = require ('dotenv');
const path = require ('path');

dotenv.config();

const app = express();
const auth = require('./route/auth')
//connect mongo
require('./db');

//middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../uploads')));

//auth
app.use('/auth', auth);

app.listen(process.env.PORT, () => {
    console.log('server is running on port=' + process.env.PORT);
});