// get HTML elements
const score = document.getElementById('score'),
    newGame = document.getElementById('new-game'),
    timer = document.getElementById('timer'),
    find = document.getElementById('find');

// Declare and initialize variables
let answer = 65,
    scoreCounter = 0,
    seconds = 60,
    reponse = document.getElementById('reponse');

// Add listeners events
newGame.addEventListener('click', gameStart)

// start the game
function gameStart() {
    score.innerHTML = "0";
    scoreCounter = 0;
    answer = getRandomChessCase()
    find.innerHTML = answer
    seconds = 60
    stopChrono()
    if (true) {
        scoreCounter += 1
        score.innerHTML = scoreCounter
    } else {
        caseClicked.classList.add('wrong-case')
    }
}


/**
 * Get a random squares of the chessboard
 * @returns { Number{1-64} }  
 */
function getRandomChessCase() {
    return Math.floor(Math.random() * 65)
}

const startChrono = setInterval(chrono, 1000);
const stopChrono = () => clearInterval(startChrono);

/**
 * One minute timer
 */
function chrono() {
        if(seconds < 61) {
            timer.innerHTML = seconds;
        if (seconds > 0 ) {
            seconds--
            timer.innerHTML = seconds;
        } else {
            stopChrono()
            answer = 101
            alert('STOP !')
         }
    }
}


// Build Chessboard
const chessboard = document.getElementById('chessboard');

// Build cases names
const letters = ['a','b','c','d','e','f','g','h'];
const casesName = [];
for(const letter of letters) {
        for(let i = 1; i < 9; i++) {
        casesName.push(letter+i)
    }
}


// build cases
function buildCases() {
    for(let i = 0; i < 64; i++ ){
        chessboard.insertAdjacentHTML('afterbegin', `<div class="case ${i % 2 ? 'case--white' : 'case--black'}" data-name=${casesName[i]} data-number${i}>
        <span class='d-none case-name'>${i}<span>
        </div>`)
    }
    const cases = document.getElementsByClassName('case')
    for (let item of cases) {
        item.addEventListener('click', function(e){
            for (span of document.getElementsByClassName('case-name')) {span.classList.add('d-none')};
            e.currentTarget.querySelector('span').classList.remove('d-none');
            console.log(item.dataset.name);
        })
    }
}
buildCases()



