const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());


app.get('/', (req, res) => {
    res.send('GoStudy is Running');
})

app.listen(port, () => {
    console.log(`Go study is serving on ${port}`);
})