'use strict';

var userName = prompt('What is your name?');

while (userName === '' || userName === null) {
    userName = prompt('What is your name?');
}
alert('Welcome ' + userName + ' to my webpage :)');

alert('okay ' + userName + ' we are going to play a fun game, I will ask you five quastions and you can only answer either y/n, (y) for yes and (n) for no')

let correctAnswers = 0;

var videoGames = prompt('Do you think I like playing video games?');

while (videoGames === '' || videoGames === null) {
    var videoGames = prompt('Do you think I like playing video games?');
}

if (videoGames.toLowerCase() === 'y') {
    alert('You are right, I like video games')
    correctAnswers += 1;
    // console.log('You are right, I like video games')
} else {
    alert('opps, you got this wrong')
    // console.log('opps, you got this wrong')
}

var blackColor = prompt('Do you think I like black color?')

while (blackColor === '' || blackColor === null) {
    var blackColor = prompt('Do you think I like playing black color?')
}

if (blackColor.toLowerCase() === 'y') {
    alert('You are right, I like black color')
    correctAnswers += 1;
    // console.log('You are right, I like black color')
} else {
    alert('opps, you got this wrong')
    // console.log('opps, you got this wrong')
}

var cats = prompt('Do you think I like cats?')

while (cats === '' || cats === null) {
    var cats = prompt('Do you think I like cats?')
}

if (cats.toLowerCase() === 'n') {
    alert('You are right, I do not like cats')
    correctAnswers += 1;
    // console.log('You are right, I do not like cats')
} else {
    alert('opps, you got this wrong')
    // console.log('opps, you got this wrong')
}

var myAge = prompt('Do you think I look younger than my real age?')

while (myAge === '' || myAge === null) {
    var myAge = prompt('Do you think I look younger than my real age?')
}

if (myAge.toLowerCase() === 'y') {
    alert('You are right, I look younger than my age')
    correctAnswers += 1;
    // console.log('You are right, I look younger than my age')
} else {
    alert('opps, you got this wrong')
    // console.log('opps, you got this wrong')
}

var user = prompt('Do you think I love you?')

while (user === '' || user === null) {
    var user = prompt('Do you think I love you?')
}

if (user.toLowerCase() === 'y') {
    alert('You are right, I love you')
    correctAnswers += 1;
    // console.log('You are right, I love you')
} else {
    alert('opps, you got this wrong')
    //  console.log('opps, you got this wrong')
}

for (var i = 0; i <= 3; i++) {

    var myAge = prompt('Can you guess mt age correctly? you have just 4 opportunities');
    myAge = parseInt(myAge);

    if (myAge === 19) {
        alert('awesome! you got it correctly');
        correctAnswers += 1;
        break;
    } else if (myAge > 19) {
        alert('Too high');
    } else if (myAge < 19) {
        alert('Too low');
    } else {
        alert('Invalid answer, try again');
    }
}

if (myAge !== 19) {
    alert('My age is 19');
}

const realMadrid = ['Ronaldo', 'Bale', 'Casillas', 'Pepe', 'Ramos', 'Marcelo'];

for (let i = 0; i < realMadrid.length; i++) {

    let userTeam = (prompt('Can you name one of the players who played in RealMadrid in 2013?')).toLowerCase();

    if (userTeam === 'ronaldo') {
        alert('You such a clever');
        correctAnswers += 1;
        break;
    } else if (userTeam === 'bale') {
        alert('You such a clever');
        correctAnswers += 1;
        break;
    } else if (userTeam === 'casillas') {
        alert('You such a clever');
        correctAnswers += 1;
        break;
    } else if (userTeam === 'pepe') {
        alert('You such a clever');
        correctAnswers += 1;
        break;
    } else if (userTeam === 'ramos') {
        alert('You such a clever');
        correctAnswers += 1;
        break;
    } else if (userTeam === 'marcelo') {
        alert('You such a clever');
        correctAnswers += 1;
        break;
    } else {
        alert('Wrong answer, please try again')
    }
}

alert('The correct answer are: ronaldo, bale, casillas, pepe, ramos and marcelo')

alert('Thanks for playing ' + userName + ', you got ' + correctAnswers + ' answers correct');
