'use strict';
// console.log(document.querySelector('.message').textContent) 

// document.querySelector('.message').textContent='🎉 Correct Number!';

// document.querySelector('.number').textContent= 13;
// document.querySelector('.score').textContent= 10;

// document.querySelector('.guess').value=23;
// console.log(document.querySelector('.guess').value);

let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displaymessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guessvalue = Number(document.querySelector('.guess').value);

    console.log(guessvalue, typeof guessvalue);

    //when there is no input
    if (!guessvalue) {
        // document.querySelector('.message').textContent = '⛔ No Number!';
        displaymessage('⛔ No Number!')
    }
    //when player wins
    else if (guessvalue === secretnumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('.number').textContent = secretnumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';


        if(score > highscore){
            highscore = score
            document.querySelector('.highscore').textContent= highscore;
        }
    } 
    // When guess is wrong
    else if (guessvalue !== secretnumber){
        if(score > 1){
            // document.querySelector('.message').textContent= guessvalue >  secretnumber ? '📈 Too High!' : '📉 Too Low!';
            displaymessage(guessvalue >  secretnumber ? '📈 Too High!' : '📉 Too Low!')
            score--;
            document.querySelector('.score').textContent = score;
        } else{
            // document.querySelector('.message').textContent = '💥 You lost the game!';
            displaymessage('💥 You lost the game!')
            document.querySelector('.score').textContent=0;
        }
    }
   
});

//challenge #1 || AGAIN BUTTON

document.querySelector('.again').addEventListener('click', function () {

     score = 20;
     secretnumber = Math.trunc(Math.random() * 20) + 1;

    // document.querySelector('.message').textContent='Start Guessing...';
    displaymessage('Start guessing...')
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});


 //when guess is too high
    // else if (guessvalue > secretnumber) {

    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📈 Too High!'
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '💥 You lost the game!'
    //         document.querySelector('.score').textContent = 0;
    //     }

    // }
    // //when guess is too low
    // else if (guessvalue < secretnumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📉 Too Low!'
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '💥 You lost the game!'
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }













