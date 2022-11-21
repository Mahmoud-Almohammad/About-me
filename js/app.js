'use strict';

let userName;
function getName() {
  userName = prompt('What is your name?');
  while (userName === '' || userName === null) {
    userName = prompt('What is your name?');
  }return userName;
}
getName();
alert('Welcome ' + userName + ' to my webpage :)');
alert('okay ' + userName + ' we are going to play a fun game, I will ask you seven quastions and you can only answer either y/n for the first five questions, (y) for yes and (n) for no');

let correctAnswers = 0;

let videoGames;
function question1() {
  videoGames = (prompt('Do you think I like playing video games?')).toLowerCase();
  while (videoGames === '' || videoGames === null) {
    videoGames = prompt('Do you think I like playing video games?');
  }

  if (videoGames === 'y' || videoGames === 'yes') {
    alert('You are right, I like video games');
    correctAnswers += 1;
  // console.log('You are right, I like video games')
  } else {
    alert('opps, you got this wrong, I like video games');
  // console.log('opps, you got this wrong')
  }
}
question1();
let blackColor;
function qusetion2(){
  blackColor = (prompt('Do you think I like black color?')).toLowerCase();
  while (blackColor === '' || blackColor === null) {
    blackColor = prompt('Do you think I like playing black color?');
  }
  if (blackColor === 'y' || blackColor === 'yes') {
    alert('You are right, I like black color');
    correctAnswers += 1;
    // console.log('You are right, I like black color')
  } else {
    alert('opps, you got this wrong, I love black color');
    // console.log('opps, you got this wrong')
  }
}
qusetion2();
let cats;
function qusetion3(){
  cats = (prompt('Do you think I like cats?')).toLowerCase();
  while (cats === '' || cats === null) {
    cats = prompt('Do you think I like cats?');
  }
  if (cats === 'n' || cats === 'no') {
    alert('You are right, I do not like cats, I like dogs');
    correctAnswers += 1;
    // console.log('You are right, I do not like cats')
  } else {
    alert('opps, you got this wrong, I don\'t like cats, I love dogs');
    // console.log('opps, you got this wrong')
  }
}
qusetion3();
let myAge;
function question4() {
  myAge = (prompt('Do you think I look younger than my real age?')).toLowerCase();
  while (myAge === '' || myAge === null) {
    myAge = prompt('Do you think I look younger than my real age?');
  }

  if (myAge === 'y' || myAge === 'yes') {
    alert('You are right, I look younger than my age');
    correctAnswers += 1;
  // console.log('You are right, I look younger than my age')
  } else {
    alert('opps, you got this wrong, I look younger than my age');
  // console.log('opps, you got this wrong')
  }
}
question4();
let user;
function qusetion5(){
  user = (prompt('Do you think I love you?')).toLowerCase(); 
  while (user === '' || user === null) {
    user = prompt('Do you think I love you?');
  }
  if (user === 'y' || user === 'yes') {
    alert('You are right, I love you');
    correctAnswers += 1;
    // console.log('You are right, I love you')
  } else {
    alert('opps, you got this wrong, I love you');
    //  console.log('opps, you got this wrong')
  }
}
qusetion5();
let ownerAge;
for (let i = 0; i <= 3; i++) {
  ownerAge = prompt('Can you guess mt age correctly? you have just 4 opportunities');
  ownerAge = parseInt(ownerAge);
  if (ownerAge === 19) {
    alert('awesome! you got it correctly');
    correctAnswers++;
    break;
  }else if (ownerAge > 19) {
    alert('Too high');
  } else if (ownerAge < 19) {
    alert('Too low');
  } else {
    alert('Invalid answer, try again');
  }
}
if (ownerAge !== 19) {
  alert('My age is 19');
}

let realMadrid = ['ronaldo', 'bale', 'casillas', 'pepe', 'ramos', 'marcelo'];
let userTeam;
let i = 0;
let correctAnswer = false;
while (i <= 5 && !correctAnswer) {
  userTeam = (prompt('Can you name one of the players who played in RealMadrid in 2013? You have 6 opportunities')).toLowerCase();
  for (let j = 0; j < realMadrid.length; j++){
    if(realMadrid[j] === userTeam) {
      alert('You such a clever');
      correctAnswer = true;
      correctAnswers++;
      break;
    }
  }
  i++;
}
alert('The correct answers are: ronaldo, bale, casillas, pepe, ramos and marcelo');
alert('Thanks for playing ' + userName + ', you got ' + correctAnswers + ' answers correct');
