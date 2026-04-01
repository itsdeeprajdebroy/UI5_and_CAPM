const express = require('express');

const app = express();

// we will use a middleware to expose entire folder -- will allow to expose employees
app.use(express.static('webapp'));

// register as an end point for our server if someone calls
app.get('/', function (req, res) {
    res.send("Hey Its Deepraj from heaven...");
});

// this is not best practise
// app.get('/Employees', function (req, res) {
//     res.send({
//         "name": "Deepraj",
//         "isDev": true
//     })
// })

app.listen(3000);

