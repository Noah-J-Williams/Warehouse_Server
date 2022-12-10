require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.listen(5050, () => {
    console.log(`🛰️ Launcing server on port 5050`);
});