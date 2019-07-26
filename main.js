const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))
var cors = require('cors');
app.use(cors());

app.use(express.static('public'))


const path = require('path');
const router = express.Router();
router.get('/', function (req, res) {
    console.log(req.query);
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/subview', function (req, res) {
    console.log(req.query);
    res.sendFile(path.join(__dirname + '/views/subview.html'));
});
router.get('/external', function (req, res) {
    console.log(req.query);
    res.sendFile(path.join(__dirname + '/views/external.html'));
});

router.get('/detail', function (req, res) {
    console.log(req.query);
    res.send('Request parameters : '+req.query.email+', '+req.query.status)
});

router.get('/cookies', function (req, res) {
    console.log(req.query);
    res.sendFile(path.join(__dirname + '/views/cookies.html'));
});

router.get('/ajaxget', function (req, res) {
    console.log(req.query);
    res.sendFile(path.join(__dirname + '/views/ajax_get.html'));
});

// Rest API
let tasksList = [
    {
        'id': 1,
        'title': 'Buy groceries',
        'description': 'Milk, Cheese, Pizza, Fruit, Tylenol', 
        'done': 'False'
    },
    {
        'id': 2,
        'title': 'Learn Python',
        'description': 'Need to find a good Python tutorial on the web', 
        'done': 'False'
    }
];

let tasksMap = {
    'first' : {
        'id': 1,
        'title': 'Buy groceries',
        'description': 'Milk, Cheese, Pizza, Fruit, Tylenol', 
        'done': 'False'
    },
    'second' : {
        'id': 2,
        'title': 'Learn Python',
        'description': 'Need to find a good Python tutorial on the web', 
        'done': 'False'
    }
};

router.get('/api/v1.0/tasks', function (req, res) {
    console.log(req.query);
    res.send(tasksList);
});

router.get('/api/v1.0/tasksList', function (req, res) {
    console.log(req.query);
    res.send(tasksList);
});

router.post('/api/v1.0/tasksMap', function (req, res) {
    console.log(req.query);
    res.send(tasksMap);
});

app.use('/', router);

app.listen(port, '0.0.0.0', () => console.log(`Example app listening on port ${port}!`))

// var http = require('http');
// //서버를 실행한다.
// http.createServer(app).listen(port, function () {
//     console.log('Server running at http://127.0.0.1:3000');
// });

