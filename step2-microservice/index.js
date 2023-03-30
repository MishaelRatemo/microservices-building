const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

const port = 3000;

app.get('/video',(req, res) => {
    const path="~/Microservices/SampleVideo_1280x720_5mb.mp4";
    fs.stat(path, (err, stats) =>{
        if (err){
            console.error('An Error has ocurred');
            res.sendStatus(500);
            return;
        }
        res.writeHead(200,{
            'Content-Length':stats.size,
            'Content-Type': 'video/mp4',
        });
        fs.createReadStream(path).pipe(res);
    });
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}!!`);
})