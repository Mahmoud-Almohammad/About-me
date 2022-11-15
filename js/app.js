'use strict';

var userName = prompt('What is your name?');

while (userName === '' || userName === null) {
    userName = prompt('What is your name?');
}
alert('Welcome ' + userName + ' to my webpage :)')

alert('okay ' + userName + ' we are going to play a fun game, I will ask you five quastions and you can only answer either y/n, (y) for yes and (n) for no')

var videoGames = prompt('Do you think I like playing video games?')

while (videoGames === '' || videoGames === null) {
    var videoGames = prompt('Do you think I like playing video games?')
}

if (videoGames.toLowerCase() === 'y') {
    alert('You are right, I like video games')
   // console.log('You are right, I like video games')
}  else {
    alert('opps, you got this wrong')
   // console.log('opps, you got this wrong')
}

var blackColor = prompt('Do you think I like black color?')

while (blackColor === '' || blackColor === null) {
    var blackColor = prompt('Do you think I like playing black color?')
}

if (blackColor.toLowerCase() === 'y') {
    alert('You are right, I like black color')
   // console.log('You are right, I like black color')
}  else {
    alert('opps, you got this wrong')
   // console.log('opps, you got this wrong')
}

var cats = prompt('Do you think I like cats?')

while (cats === '' || cats === null) {
    var cats = prompt('Do you think I like cats?')
}

if (cats.toLowerCase() === 'n') {
    alert('You are right, I do not like cats')
   // console.log('You are right, I do not like cats')
}  else {
    alert('opps, you got this wrong')
   // console.log('opps, you got this wrong')
}

var myAge = prompt('Do you think I look younger than my real age?')

while (myAge === '' || myAge === null) {
    var myAge = prompt('Do you think I look younger than my real age?')
}

if (myAge.toLowerCase() === 'y') {
    alert('You are right, I look younger than my age')
   // console.log('You are right, I look younger than my age')
}  else {
    alert('opps, you got this wrong')
   // console.log('opps, you got this wrong')
}

var user = prompt('Do you think I love you?')  

while (user === '' || user === null) {
    var user = prompt('Do you think I love you?')
}

if (user.toLowerCase() === 'y') {
    alert('You are right, I love you')
   // console.log('You are right, I love you')
}  else {
    alert('opps, you got this wrong')
  //  console.log('opps, you got this wrong')
}

alert('Thanks for playing '+ userName)
