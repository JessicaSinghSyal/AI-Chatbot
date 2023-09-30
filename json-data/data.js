
function createLink(link) {
    var x = `<a href=${link} target='_blank' style="color:#05f230">${link}</a>`
    return x;
}

const QA = [
    {
        id: "1",
        category: "About IP",
        data: [
            {
                q_id: "1",
                question: "What is IP?",
                answer: "Watch the below video<br>URL:" + createLink("https://www.youtube.com/watch?time_continue=142&v=OnKfrQrEOrk&feature=emb_logo")
            },
            {
                q_id: "2",
                question: "How to IP?",
                answer: "Watch the below video<br> URL:" + createLink("https://www.youtube.com/watch?v=Hs9npUUIg4I&feature=emb_logo")
            }
        ]
    },
    {
        id: "2",
        category: "IP training issues",
        data: [
            {
                q_id: "1",
                question: " Not able to access the LP1 page with my token/ When I put my token it redirects me to the home page/ Getting error while accessing the page- 'User Not Found'/Website Redirection Issue/Tokens not working.",
                answer: "Please watch the videos shared with the invite and you should not face any problems in accessing the training. Please follow the protocol shown in the videos."
            },
            {
                q_id: "2",
                question: "Login issues with training/ for every module of LP1/ LP2, do we have to register again for access to the content?",
                answer: "Yes, you need to register for every module of training. Some of you are facing login issues, we have kept the training visible without login. Even then, to post a comment and give a quiz you'll have to login. In case you face difficulty to do so, please try to perform your quiz or post a comment by using a different browser or incognito mode."
            },
            {
                q_id: "3",
                question: "I am applying my 2nd token that is the LP1 then it shows invalid user but the first token was accepted. What should I do?/ Tokens not working",
                answer: "For each training of LP1, there are different tokens. Please read the tasks or watch the videos again meticulously. Try accessing it in incognito mode."
            },
            {
                q_id: "4",
                question: "I did follow the instructions given in the video, but still, I'm not able to log in for the LP1 task",
                answer: "Ensure you're using the right token"
            },
            {
                q_id: "5",
                question: "Do I need to pass with the certificate in training.",
                answer: "No, but please ensure you complete the training."
            },
            {
                q_id: "6",
                question: "I tried it 3-4 times and have to enter token each time I visit it.",
                answer: "We understand that it sometimes becomes tedious to access the training and we highly appreciate your support in making the training possible. We only do this for security reasons and we're trying to find a way to minimise the token use. <br>For now, please note that in LP1 there are 3 types tokens:" +
                    "<br>1. One for each technology, you're a part of." +
                    "<br>2. The lp1 home page." +
                    "<br>3. The 6 tokens (one for each step)"
            },
            {
                q_id: "7",
                question: "I just joined the group and I am not understanding what to do further. How do I start my internship?",
                answer: "Please go through the mail from which you have accepted the invite and check the task section as well."
            },
            {
                q_id: "8",
                question: "What do I do after completing the quiz? How to complete the entire LP1?",
                answer: "There are tokens for each training in the task, if this learning path is done, please wait for the next learning path to begin and then please try to finish it. If you are done with LP3 please wait for Live Projects to begin."
            },
            {
                q_id: "9",
                question: "Do I need to register every time I do different tasks of lp1?",
                answer: "There are codes in the LP1 assignment, and each time you have to register also, please check your task description."
            },
            {
                q_id: "10",
                question: "I have complete one training, I didn't find any options to continue my training.",
                answer: "Go back to the technology Page. Enter the respective tokens and then work. follow the same process every time."
            },
            {
                q_id: "11",
                question: "I am not getting results of the training.",
                answer: "They are just for your practice and not for our record, so you don't need the results of LP1 and LP2 training."
            },
            {
                q_id: "12",
                question: " Unable to access the quiz",
                answer: "Please retry after some time in an incognito window"
            },
            {
                q_id: "13",
                question: "What to do after completing LP1/ LP2/ LP3?",
                answer: "Mark your task as finished and wait for the next instructions."
            },
            {
                q_id: "14",
                question: "Which Browser I should use?",
                answer: "Google Chrome is recommended."
            },
            {
                q_id: "15",
                question: "Do we need to complete all the six steps within 14 hours as you mentioned that we have to complete all the 6 steps within 2 weeks so it becomes 14 hours?",
                answer: "It's preferred if you complete the LP1 training in 2 weeks but not mandatory. LP1, LP2, and LP3 are expected to be completed before the live projects start in July; but that doesn't mean you should give anything less than 1 hour a day or 7 hours a week towards the learning paths (LP)."
            },
            {
                q_id: "16",
                question: "",
                answer: ""
            },
            {
                q_id: "17",
                question: "",
                answer: ""
            },
            {
                q_id: "18",
                question: "",
                answer: ""
            },
            {
                q_id: "19",
                question: "",
                answer: ""
            },
            {
                q_id: "20",
                question: "",
                answer: ""
            },
            {
                q_id: "21",
                question: "",
                answer: ""
            },
            {
                q_id: "22",
                question: "",
                answer: ""
            },


        ]
    },
    {
        id: "3",
        category: "Bitrix24 issues",
        data: [
            {
                q_id: "1",
                question: "I m not able to access my Bitrix24 account?",
                answer: "Go to " + createLink("https://cloudcounselage24.bitrix24.com/") + "<br> On the Login page, In the, ‘Enter the phone number or email’, type in your email id that you have registered with Cloud Counselage and Click ‘Forgot Password’. In case the problem persists, please write a mail to :<b><i>hrsupport@cloudcounselage.in</i></b>"
            },
            {
                q_id: "2",
                question: "What is the job profile? Will we be able to work only in the tech we have chosen for the internship?",
                answer: "Your job profile is 'Technology - Intern'; if you're in cloud computing technology to update in your LinkedIn or resume, you can write as 'Cloud Computing - Intern'. Yes, you'll only work in the technology you're selected for but you can take the training of other technologies."
            },
            {
                q_id: "3",
                question: "How many workgroups will an intern be a part of?/ How many workgroups should I be in?",
                answer: "Every intern should be a part of 2 workgroups." +
                    "1. '202003-IP'  -- This is a general workgroup. Everyone who is enrolled in IP should be a part of this workgroup." +
                    "2. '202003-IP-Technology'  -- This is a technology-specific workgroup. You'll be added to the technology you had enrolled for. For example '202003-IP-Python' for students who enrolled for python."
            },
            {
                q_id: "4",
                question: " I am not able to see my tasks.",
                answer: "Please remove the default 'In Progress' from your filter of the task section and try."
            },
            {
                q_id: "5",
                question: "What do we do in the work report?",
                answer: "As mentioned in the video, please write what you have done this week and request approval from your supervisor by clicking on 'send to supervisor'."
            },
            {
                q_id: "6",
                question: "I am having trouble finding the workgroup ( no workgroup is visible)",
                answer: "Please ensure that you have connected to the drive of that workgroup by going to your notification and connecting to the drive of that workgroup. If that is done, please try to search for your workgroup in the search bar at the top of your screen. To search, use the keywords, <b>202003-IP-TechnologyName</b>. Ex '<b>202003-IP-DevOps</b>'. In case there is no invitation to you, please message Cloud Counselage HR. You will be added to 2 groups '<b>202003-IP</b>' which is a general workgroup and the other one is '<b>202003-IP-Technology</b>' which is a technology-specific workgroup."
            },
            {
                q_id: "7",
                question: "I am not added into my technology workgroup./ actually there are n no of tokens and every token I entered it is showing user no found or redirecting to the same page",
                answer: "Please follow the instructions given in the videos or the one in the Bitrix24 mail (these are the same videos share in the task), the tokens are given to you. Ensure that you are putting the right token on the right page."
            }
        ]
    },
    
];

module.exports = QA;

