const express = require('express');
const cors = require('cors');

const app = express();

baseUrlUsers = '/api/v1/users';

app.use(cors())

app
    .get(baseUrlUsers, function(req, res, next) {
        res.json({name: 'test', lastName: 'test2'});
    })
    .post(baseUrlUsers, function(req, res, next) {
        res.json({
            ok: true, 
            user: {name: 'cursor', lastName: 'test'}
        });
    })
    .put(baseUrlUsers, function() {})
    .delete(baseUrlUsers, function() {})



app.get('/api/v1/offers', function() {
    console.log('test done! 2');
})

app.listen(9191);

// localhost:9191/api/v1/users

//1: npm install
//2: node server