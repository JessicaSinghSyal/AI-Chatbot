const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT || 5000;

const json_data = require('./json-data/data');

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));
app.use(morgan('tiny'));

const server = app.listen(PORT, console.log('Server is listening at port : ' + PORT));
app.get('/', (req, res) => {
    res.sendFile('index.html');
});

const io = require('socket.io')(server);

function prepareCategories() {
    var categories = [];
    json_data.forEach(element => {
        categories.push([element.id, element.category]);
    });
    return categories;
}

io.on('connection', function (socket) {

    socket.on("getCategories", (text) => {
        var categories = prepareCategories();
        socket.emit("reply-categories", categories);
    });

    socket.on("getQuestionsForCategory", (catId) => {
        var questions = [];
        json_data.find(item => {
            if (item.id == catId) {
                item.data.forEach(element => {
                    questions.push([element.q_id, element.question]);
                });
            }
        });
        socket.emit("reply-category-questions", questions);
    });

    socket.on("getAnswer", (req) => {
        //console.log("catId: " + req.catId + "|questionId: " + req.q_id);
        var answer;
        json_data.find(item => {
            if (item.id == req.catId) {
                //console.log(item.data);
                item.data.find(element => {
                    if (element.q_id == req.q_id) {
                        answer = element.answer;
                    }
                });
            }
        });
        socket.emit("reply-answer", answer);
    });

});

