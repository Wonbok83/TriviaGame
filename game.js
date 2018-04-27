$(document).ready(function () {

    //variables 
    var number = 30; //timer
    var questionCount = 0;
    var intervalId; //second
    var correctAnswerNum = 0;
    var incorrectAnswerNum = 0;
    var unAnsweredNum = 0;
    var output = []; //showing question 

    var myQuestion = [  //questions in Array 
        {
            question: "Which class did Severus Snape always want to teach?",
            answers: {
                a: "Defence Against the Dart Arts",
                b: "Potions",
                c: "Charms",
                d: "Transfiguration"
            }, correctAnswer: 'a',
            image: "img/snape.jpeg"
        }, {
            question: "Which of these is not a wizarding school?",
            answers: {
                a: "Durmstrang",
                b: "Mahoutokoro",
                c: "Uagadou",
                d: "Slavdovoretz"
            }, correctAnswer: 'd',
            image: "img/school.jpeg"
        }, {
            question: "Which of these is a type of Love Potion??",
            answers: {
                a: "Felix felicis",
                b: "Amortentia",
                c: "Ployjuice potion",
                d: "Veritaserum"
            }, correctAnswer: 'b',
            image: "img/potion.jpeg"
        }, {
            question: "Which of these are not one of Hagrid's many pets?",
            answers: {
                a: "Grawp",
                b: "Fluffy",
                c: "Aragog",
                d: "Norberta"
            }, correctAnswer: 'a',
            image: "img/hagrid.jpeg"
        }, {
            question: "Which Hogwarts house did Moaning Myrtle belong in?",
            answers: {
                a: "Gryffindor  ",
                b: "Slytherin",
                c: "Ravenclaw",
                d: "Hufflepuff"
            }, correctAnswer: 'c',
            image: "img/ghost.jpeg"
        }
        


    ];


    function run() {
        console.log("start-------------------");
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        $("#start").attr("style", "display: none");
        question();
    }

    function question() {
        output = [];
       

        $(".result").attr("style", "display: none");


        output = myQuestion[questionCount];
        $("#question").text(output.question);
        $("#a").text(output.answers.a);
        $("#b").text(output.answers.b);
        $("#c").text(output.answers.c);
        $("#d").text(output.answers.d);
        $("#showimage").html("<img src=" + output.image + " width='400px'>");

        console.log(questionCount + ":" + output.correctAnswer);
    }

    function resetTimer() {
        number = 30;
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);

    }

    function nextQuestion() {
        console.log(questionCount);
        questionCount++;
        if (questionCount == 5) {
            result();
        } else {
            question();
        }
    }


    // $("h5").hover(function(){
    //     $(this).css("background-color", "gray")
    //     }, function(){
    //         $(this).css("background-color", "white")
    //     });

    function result() {
        
        $(".questionsection").attr("style", "display: none");
         $(".result").attr("style", "display: box");
         $(".result").html("<img src = 'img/cong.gif' width='400px'/>");


            setTimeout(function(){
                console.log("end-------------------");
                alert("CorrectAnswers: " + correctAnswerNum + "\n" +
                    "IncorrectAnswers: " + incorrectAnswerNum + "\n" +
                    "Unanswered: " + unAnsweredNum + "\n" + "press 'Enter' or click 'Ok' to restart the game");
                    
                    //reset 
                    number = 30;
                    questionCount = 0;
                    intervalId;
                    correctAnswerNum = 0;
                    incorrectAnswerNum = 0;
                    unAnsweredNum = 0;
                    output = [];
            
                    question();
                    $(".questionsection").attr("style", "display: box");
            }, 1000);
    }


    function decrement() {

        number--;
        $(".time").html("time remaining: " + number);



        if (number == 0) {


            alert("Time up, move to next question");
            resetTimer();
            nextQuestion();
            unAnsweredNum++;


        } else if (number < 0) {
            return number = 30;
            console.log("out of Time");
        }
    }






    /////////////////////////

    $("#start").on("click", run); //start code




    $(".container1").on("click", "h5", function () {
        //$(this).attr('id')   or this.id         

        if ($(this).attr('id') == output.correctAnswer) {
            console.log("correct");
            correctAnswerNum++;

        } else {
            console.log("wrong");
            incorrectAnswerNum++;

        }

        resetTimer();
        nextQuestion();
    });
});