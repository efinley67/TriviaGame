$(document).ready(showQuestions);

var questions = [

    {
      q: "Let's start off easy. The first National Park in the country was established in Wyoming in 1872. Which park is it? ",
      choices: ["Yosemite", "Yellowstone", "Tetons", "Devil's Tower"],
      answer: "Yellowstone"
    },

    {
      q: "Why is Wyoming known as the Equality State?",
      choices: ["It was the first state to give women the right to vote", "It was the first state to allow women to work in government jobs", "People moved there because of equal opportunity employment", "It is the same shape and roughly the same size as Colordo"],
      answer: "It was the first state to give women the right to vote"
    },

    {
      q: "With a population of less than 600,000, Wyoming is the least populous state in the US. Some think there are more antelope than people. Is this true or false?",
      choices: ["True", "False","" , ""],
      answer: "False"
    },

    {
      q: "Casper, my hometown, is one of the windiest cities in the country. What is the average annual wind speed?",
      choices: ["12.6 mph", "19.3 mph", "21.4 mph", "25.9 mph" ],
      answer: "21.4 mph"
    },

    {
      q: "Former Vice President Dick Cheney is also from Casper but he went to the lame high school. Where did he graduate from?",
      choices: ["Kelly Walsh High School", "Roosevelt High School", "Midwest High School", "Natrona County High School"],
      answer: "Natrona County High School"
    },

    {
      q: "True or false. Grand Teton is the tallest peak in the state.",
      choices: ["True", "False", "", ""],
      answer: "False"
    },

    {
      q: "Black Thunder is the largest open pit coal mine in the country. Which city is it closest to?",
      choices: ["Gillette", "Cody", "Douglas", "Wright"],
      answer: "Wright"
    },

    {
      q: "What famous historical event took place at Como Bluff outside of Laramie?",
      choices: ["The Battle of Medicine Bow", "The Dinosaur Wars", "Oil was discovered in Wyoming", "Fur trading began in the state"],
      answer: "The Dinosaur Wars"
    }
  ];

  var score = 0;
  var counter = 0;
  var answerSelected;
  var fractionCorrect;
  var counter = 0;
  $("#score").html(score);

  function showQuestions(){
    $("#score").html(score);
    $("#question").html(questions[counter].q);
    $("#answer1").html(questions[counter].choices[0]);
    $("#answer2").html(questions[counter].choices[1]);
    $("#answer3").html(questions[counter].choices[2]);
    $("#answer4").html(questions[counter].choices[3]);

      console.log(questions[counter].q);
  };

    $("#answer1").click(function() {
      answerSelected = questions[counter].choices[0];
      console.log(answerSelected);
      checkAnswer();
    });

    $("#answer2").click(function() {
      answerSelected = questions[counter].choices[1];
      console.log(answerSelected);
      checkAnswer();
    });

    $("#answer3").click(function() {
      answerSelected = questions[counter].choices[2];
      console.log(answerSelected);
      checkAnswer();
    });

    $("#answer4").click(function() {
      answerSelected = questions[counter].choices[3];
      console.log(answerSelected);
      checkAnswer();
    });

    function checkAnswer() {
      if (answerSelected === questions[counter].answer) {
        alert("Correct");
        score++;
        showQuestions();
      } else {
        alert("Wrong");
      }
      counter++;
        if (counter < questions.length) {
          showQuestions();
        } else {
          alert("Your score is " + score + " out of 8!");
        }
    };

var secs = 180;
var timeCounter = $("#timer");
setTimeout(countdown, 1000);

function countdown() {
  secs--;
  if (secs > 0) {
    setTimeout(countdown, 1000);
  }
  timeCounter.html(secs);

  if (secs == 0) {
    alert("Your score is " + score + " out of 8!");
  }
};
