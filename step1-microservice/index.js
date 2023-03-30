const express = require('express');

const app = express();

const port = 3000;

// Registers a HTTP GET route.
app.get('/', (req, res)=> {
    res.send('Running!!!');
})

// initiate/start the HTTP server
app.listen(port, () => {
    console.log(`App is listeing to port ${port}  at http://localhost:3000`)
})