const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const nodemailer = require('nodemailer')
const cookieparser = require('cookie-parser')
// const { sendEmail } = require('./mailer')
require('dotenv').config();


const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieparser());
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connected successfully');
})

const usersRouter = require('./routes/users')

app.use('/users', usersRouter)

const { sendEmail } = require('./mailer');

app.post('/api/sendMail',(req, res) => {
    
    console.log(req.body)


    sendEmail(req.body.email, req.body.name)

})




app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});