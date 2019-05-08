const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
app.use(cors({
    origin: '*'
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

const port = 8080;
const events = ['event 1', 'event 2'];

app.get('/events', function(req, res) {
    res.json({
        events
    })
})

app.post('/events', function(req, res) {
    const { title } = req.body;

    events.push(title);

    res.json({
        events,
    })
})

app.listen(port, () => {
    console.log(`PORT ${port}`);
});