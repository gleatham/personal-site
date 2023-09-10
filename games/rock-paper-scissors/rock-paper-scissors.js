let score = 0;
let compScore = 0;

function play(playerSelection) {
    // get computer choice and set image
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        document.getElementById('computer').src='images/the-rock.jpeg';
    } else if (computerChoice === 1) {
        document.getElementById('computer').src='images/paper.webp';
    } else {
        document.getElementById('computer').src='images/scissors.webp';
    }

    // Set player image
    if(playerSelection === 'r') {
        document.getElementById('player').src='images/the-rock.jpeg';
    } else if (playerSelection === 'p'){
        document.getElementById('player').src='images/paper.webp';
    } else {
        document.getElementById('player').src='images/scissors.webp';
    }

    // who won?
    switch (playerSelection) {
        case 'r':
            if (computerChoice === 2) {
                document.getElementById('result').innerHTML="You Win!";
                score++;
                document.getElementById('player-score').innerHTML="Player: " + score.toString();
            } else if (computerChoice === 1) {
                document.getElementById('result').innerHTML="You Lose!";
                compScore++;
                document.getElementById('computer-score').innerHTML="Computer: " + compScore.toString();
            } else {
                document.getElementById('result').innerHTML="You tied, try again.";
            }
            break;
        case 'p':
            if (computerChoice === 0) {
                document.getElementById('result').innerHTML="You Win!";
                score++;
                document.getElementById('player-score').innerHTML="Player: " + score.toString();
            } else if (computerChoice === 2) {
                document.getElementById('result').innerHTML="You Lose!";
                compScore++;
                document.getElementById('computer-score').innerHTML="Computer: " + compScore.toString();
            } else {
                document.getElementById('result').innerHTML="You tied, try again.";
            }
            break;
        case 's':
            if (computerChoice === 1) {
                document.getElementById('result').innerHTML="You Win!";
                score++;
                document.getElementById('player-score').innerHTML="Player: " + score.toString();
            } else if (computerChoice === 0) {
                document.getElementById('result').innerHTML="You Lose!";
                compScore++;
                document.getElementById('computer-score').innerHTML="Computer: " + compScore.toString();
            } else {
                document.getElementById('result').innerHTML="You tied, try again.";
            }
            break;
    }
}

const buttonRock = document.querySelector('[data-rock]');
const buttonPaper = document.querySelector('[data-paper]');
const buttonScissors = document.querySelector('[data-scissors]');

buttonRock.addEventListener('click', button => {
    document.getElementById('computer').src="images/the-rock.webp";
    play('r');
})

buttonPaper.addEventListener('click', button => {
    play('p');
})

buttonScissors.addEventListener('click', button => {
    play('s');
})