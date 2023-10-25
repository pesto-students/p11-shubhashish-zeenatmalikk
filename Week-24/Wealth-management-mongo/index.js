const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./config/database');
const cors=require('cors')
app.use(bodyParser.json());
app.use(cors())


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
