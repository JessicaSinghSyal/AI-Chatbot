
$(function () {

    $('.chat-window').hide();
    $('.chat-btn').click(function(){
        console.log("Clicked...");
        $(this).hide();
        $('.chat-window').show();
        $('#user-input').focus();
        //console.log("Socket status: "+socket.connected);
    });

    
    const socket = io();
    var questionCount = 0;
    var selectedCategory = null;
    var CATEGORIES = [];
    var CATEGORY_QUESTIONS=[];
    var categoryFlag = false;
    var questionsFlag = false;
    var welcomeMsg = "Hi, how may I help you?<br>Please reply with the numbers to the corresponding questions...<br>";

    //write the welcome message
    writeBotMessage(welcomeMsg);
    //get all the categories of questions
    getCategories();

    //check the key pressed and proceed
    $(document).on("keypress", "#user-input", (event) => {
        //check if "Enter" key was pressed
        if (event.which == 13) {
            var msg = $("#user-input").val();

            //if * then go back to main menu (i.e display categories)
            if (msg === "*") {
                selectedCategory = "";
                writeUserMessage(msg);
                writeBotMessage(prepareQuestions(CATEGORIES));
                $("#user-input").val("");
                $('#user-input').focus();
                categoryFlag = true;
                questionsFlag = false;
            }
            else if(msg==="y"){
                writeUserMessage(msg);
                writeBotMessage(prepareQuestions(CATEGORY_QUESTIONS));
                writeBotMessage("Press * to go to main menu");
                $("#user-input").val("");
                $('#user-input').focus();
            }

            //for other inputs, validate the input and proceed
            else if (validateInput(msg)) {
                //get questions for intended category
                writeUserMessage(msg)
                $("#user-input").val("");
                $('#user-input').focus();

                //if categories are already displayed then display questions  
                if (categoryFlag) {
                    selectedCategory = msg;
                    getCategoryQuestions(msg);

                }
                //if questions are already displayed, then get answer for selected question 
                else if (questionsFlag) {
                    //get answer
                    getAnswer(selectedCategory, msg);
                }
            }
        }
    });

    //function to receive categories from server and display them
    function getCategories() {
        socket.emit("getCategories", "");
        socket.once("reply-categories", (categories) => {
            //console.log(JSON.stringify(categories));
            CATEGORIES = categories;
            writeBotMessage(prepareQuestions(categories));
            categoryFlag = true;
            questionsFlag = false;
        });
    }

    //function to get questions of selected category and display them
    function getCategoryQuestions(catId) {
        socket.emit("getQuestionsForCategory", catId);
        socket.once("reply-category-questions", (questions) => {
            //console.log(JSON.stringify(questions));
            questionCount = questions.length;
            CATEGORY_QUESTIONS = questions;
            writeBotMessage(prepareQuestions(questions));
            writeBotMessage("Press * to go to main menu");
            categoryFlag = false;
            questionsFlag = true;
        });
    }

    //function to get answer to the selected question
    function getAnswer(selectedCategory, questionId) {
        socket.emit("getAnswer", { catId: selectedCategory, q_id: questionId });
        socket.once("reply-answer", (answer) => {
            writeBotMessage(answer);
            writeBotMessage("Want more assistance?<br>Enter 'y'");
            writeBotMessage("Enter * to go to main menu");
        });
    }

    //function to prepare data to be displayed
    function prepareQuestions(array) {
        var data = "";
        array.forEach(item => {
            data += item[0] + ") " + item[1] + "<br><hr>";
        });
        return data;
    }

    //function to validate the user input
    function validateInput(message) {
        var maxInput = 0;
        if (categoryFlag) {
            maxInput = CATEGORIES.length;
        }
        else if (questionsFlag) {
            maxInput = questionCount;
        }
        if (message === "" || isNaN(message) || message < 1 || message > maxInput) {
            writeErrorMessage("Please enter correct number");
            $("#user-input").val("");
            return false;
        }
        return true;
    }


    function writeBotMessage(text) {
        const bot_msg_template = document.querySelector('#bot-msg-template');
        const node1 = document.importNode(bot_msg_template.content, true);
        node1.querySelector('.bot-chat-msg').innerHTML = text;
        $(".conversation").append(node1);
        scrollToBottom();
    }

    function writeUserMessage(text) {
        const user_msg_template = document.querySelector("#user-msg-template");
        const node2 = document.importNode(user_msg_template.content, true);
        node2.querySelector('.user-chat-msg').innerHTML = text;
        $(".conversation").append(node2);
        scrollToBottom();
    }

    function writeErrorMessage(text) {
        const error_msg_template = document.querySelector('#bot-msg-template');
        const node3 = document.importNode(error_msg_template.content, true);
        var bot_chat_msg = node3.querySelector('.bot-chat-msg');
        $(bot_chat_msg).css({ 'color': 'white', 'background-color': '#ff4301' });
        node3.querySelector('.bot-chat-msg').innerHTML = text;
        $(".conversation").append(node3);
        scrollToBottom();
    }

    //scroll to bottom of the conversation
    function scrollToBottom() {
        var element = document.getElementsByClassName("conversation")[0];
        element.scrollTop = element.scrollHeight - element.clientHeight;

    }


});