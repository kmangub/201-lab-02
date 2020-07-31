'use strict';


//Get name

var getScore = 0;
var getName = prompt('What is your name');

function name(){  
  
  var message = 'Hello ' + getName + ', and welcome to my website! My name is Alan Karlo Mangubat and today you get to learn about me. I\'m going to ask you a series of questions and all you have to do is answer yes or no. Let\'s see how many you can get correct!';

  // console.log(getName);

  alert(message);
}
name();
//Question 1

function q1(){
var question1 = prompt('I first started playing video games when I was only three years old. The very first console I have owned is a Super Nintendo and I loved playing Super Mario World. Is Super Mario my all time favorite video game series?');

while (question1.toLowerCase() !== 'no' && question1.toLowerCase() !== 'yes') {
  question1 = prompt('Please answer with either a yes or a no. I first started playing video games when I was only three years old. The very first console I have owned is a Super Nintendo and I loved playing Super Mario World. Is Super Mario my all time favorite video game series?');
}
if (question1 === 'no') {
  alert('Correct!!!');
  //console.log(question1.toLowerCase());
  getScore++;
} else {
  alert('Incorrect');

}
}
q1();
//Question 2

function q2(){
var question2 = prompt('I might have mentioned that I proudly served in the United States military... but which branch was it? Was it the United States Air Force?');

while (question2.toLowerCase() !== 'no' && question2.toLowerCase() !== 'yes') {
  question2 = prompt('Please answer with either a yes or a no. I might have mentioned that I proudly served in the United States military... but which branch was it? Was it the United States Air Force?');
}

if (question2.toLowerCase() === 'no') {
  alert('Bingo!!!');
  // console.log(question2);
  getScore++;
} else {
  alert('Wrong.');

}
}
q2();
//Question 3
function q3(){
var question3 = prompt('You might recall that I reside and work in Japan. As far as grade school goes, did I attend elemetary, middle, and high school in Japan as well?');

while (question3.toLowerCase() !== 'no' && question3.toLowerCase() !== 'yes') {
  question3 = prompt('Please answer with either a yes or a no. You might recall that I reside and work in Japan. As far as grade school goes, did I attend elemetary, middle, and high school in Japan as well?');
}

if (question3.toLowerCase() === 'yes') {
  alert('Right on!!!');
  // console.log(question3);
  getScore++;
} else {
  alert('Sorry, but no.');

}
}
q3();
//Question 4
function q4(){
var question4 = prompt('I love animals, especially cats and dogs. I love one of them more than the other and it\'s dogs, isn\'t it?');

while (question4.toLowerCase() !== 'no' && question4.toLowerCase() !== 'yes') {
  question4 = prompt('Please answer with either a yes or a no. I love animals, especially cats and dogs. I love one of them more than the other and it\'s dogs, isn\'t it?');
}

if (question4.toLowerCase() === 'yes') {
  alert('You\'re right!');
  getScore++;
  // console.log(question4);
} else {
  alert('You are incorrect, my friend.');

}
}
q4();
//Question 5
function q5(){
var question5 = prompt('I attended Jacksonville University and got my Bachelor of Science in Biology, right?');

while (question5.toLowerCase() !== 'no' && question5.toLowerCase() !== 'yes') {
  question5 = prompt('Please answer with either a yes or a no. I attended Jacksonville University and got my Bachelor of Science in Biology, right?');
}

if (question5.toLowerCase() === 'no') {
  alert('Very nice!!');
  // console.log(question5);
  getScore++;
} else {
  alert('Biology? No way!');

}
}
q5();
//Question 6
function q6(){
var question6 = parseInt(prompt('I\'m thinking of a number from 0 to 10, what is it? Please answer with a number.'));

var guesses = 0;

while (guesses < 3) {
  if (question6 === 8) {
    alert('Great Job!');
    guesses++;
    getScore++;
    break;
  }
  else if (question6 < 8) {
    alert('Too low.');
    guesses++;
    question6 = parseInt(prompt('I\'m thinking of a number from 0 to 10, what is it? Please answer with a number.'));
  }
  else if (question6 > 8) {
    alert('Too high.');
    guesses++;
    question6 = parseInt(prompt('I\'m thinking of a number from 0 to 10, what is it? Please answer with a number.'));
  }
}
if (guesses === 3) {
  alert('So close... The answer I\'m thinking is 8.');
  console.log('guesses', guesses);
}
console.log(guesses);
}
q6();
//Question 7
function q7(){
var question7 = prompt('Name one of my favorite colors.');

var colorGuess = 6;

var answerCorrectly = false;

var colorArray = ['blue', 'green', 'black'];

while (colorGuess > 0 && !answerCorrectly) {
  colorGuess--;
  //console.log(colorGuess);
  for (var i = 0; i < colorArray.length; i++) {
    //console.log(colorArray[i]);
    if (colorArray[i] === question7) {
      alert(`Yes! ${question7} is one of my favorite colors!`);
      answerCorrectly = true;
      getScore++;
    }
  }
  if (!answerCorrectly && colorGuess > 0) {
    alert('Incorrect');
    question7 = prompt('Name one of my favorite colors.');
  }
  //console.log('colorGuess', colorGuess);
}

if (colorGuess === 0 && !answerCorrectly) {
  alert('Wrong. the answer is blue, green, or black.');
}
}
q7();
//Closing Remarks
function end(){
var closing = 'Well, it\'s been real ' + getName + '. I hope you come back soon and if you have time, try to get all my questions right! I\'ll be waiting. Over and out!';

alert(closing);

alert(`You got a ${getScore} out of 7.`);
}
end();