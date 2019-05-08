const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000'
}))

var events = ['Event 1', 'Event 2'];
const port = 8080;

app.listen(port, () => {
    console.log(`app run on port: ${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello');
});

app.get('/events', (req, res) => {
    res.json({
        events
    })
});

app.post('/events', (req, res) => {
    const { title } = req.body;

    events.push(title);

    res.json({
        'events': events
    })
});