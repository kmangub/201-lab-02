'use strict';
//Get name

var getName = prompt('What is your name');
var message = 'Hello ' + getName + ', and welcome to my website! My name is Alan Karlo Mangubat and today you get to learn about me. I\'m going to ask you a series of questions and all you have to do is answer yes or no. Let\'s see how many you can get correct!';

// console.log(getName);

alert(message);

//Question 1


var question1 = prompt('I first started playing video games when I was only three years old. The very first console I have owned is a Super Nintendo and I loved playing Super Mario World. Is Super Mario my all time favorite video game series?');

while (question1.toLowerCase() !== 'no' && question1.toLowerCase() !== 'yes'){
  question1 = prompt('Please answer with either a yes or a no. I first started playing video games when I was only three years old. The very first console I have owned is a Super Nintendo and I loved playing Super Mario World. Is Super Mario my all time favorite video game series?');
}
if (question1 === 'no') {
  alert('Correct!!!');
  //console.log(question1.toLowerCase());
} else {
  alert('Incorrect');

}





//Question 2
var question2 = prompt('I might have mentioned that I proudly served in the United States military... but which branch was it? Was it the United States Air Force?');

while (question2.toLowerCase() !== 'no' && question2.toLowerCase() !== 'yes'){
  question2 = prompt('Please answer with either a yes or a no. I might have mentioned that I proudly served in the United States military... but which branch was it? Was it the United States Air Force?');
}

if (question2.toLowerCase() === 'no') {
  alert('Bingo!!!');
  // console.log(question2);
} else {
  alert('Wrong.');

}

//Question 3
var question3 = prompt('You might recall that I reside and work in Japan. As far as grade school goes, did I attend elemetary, middle, and high school in Japan as well?');

while (question3.toLowerCase() !== 'no' && question3.toLowerCase() !== 'yes'){
  question3 = prompt('Please answer with either a yes or a no. You might recall that I reside and work in Japan. As far as grade school goes, did I attend elemetary, middle, and high school in Japan as well?');
}

if (question3.toLowerCase() === 'yes') {
  alert('Right on!!!');
  // console.log(question3);
} else {
  alert('Sorry, but no.');

}
//Question 4
var question4 = prompt('I love animals, especially cats and dogs. I love one of them more than the other and it\'s dogs, isn\'t it?');

while (question4.toLowerCase() !== 'no' && question4.toLowerCase() !== 'yes'){
  question4 = prompt('Please answer with either a yes or a no. I love animals, especially cats and dogs. I love one of them more than the other and it\'s dogs, isn\'t it?');
}

if (question4.toLowerCase() === 'yes') {
  alert('Wrong!!!');
  alert('Just kidding, you\'re right!');
  // console.log(question4);
} else {
  alert('You are incorrect, my friend.');

}
//Question 5

var question5 = prompt('Last question, I attended Jacksonville University and got my Bachelor of Science in Biology, right?');

while (question5.toLowerCase() !== 'no' && question5.toLowerCase() !== 'yes'){
  question5 = prompt('Please answer with either a yes or a no. I attended Jacksonville University and got my Bachelor of Science in Biology, right?');
}

if (question5.toLowerCase() === 'no') {
  alert('Very nice!!');
  // console.log(question5);
} else {
  alert('Biology? No way!');

}

//Closing Remarks

var closing = 'Well, it\'s been real ' + getName + '. I hope you come back soon and if you have time, try to get all my questions right! I\'ll be waiting. Over and out!';

alert(closing);
