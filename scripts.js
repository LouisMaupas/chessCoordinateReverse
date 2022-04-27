// get HTML elements
const score = document.getElementById('score'),
    newGame = document.getElementById('new-game'),
    timer = document.getElementById('timer'),
    find = document.getElementById('find'),
    gameClick = document.getElementById('game-click'),
    gameWrite = document.getElementById('game-write');

// Declare and initialize variables
let answer = 65,
    scoreCounter = 0,
    seconds = 60,
    reponse = document.getElementById('reponse'),
    playerClickedOnCase = 0;

// Add listeners events
newGame.addEventListener('click', gameStart);

/**
 * Start the game
 */
function gameStart() {
    score.innerHTML = "0";
    scoreCounter = 0;
    newTurn()
    seconds = 60
    // stopChrono()
}


/**
 * Get a random squares of the chessboard
 * @returns {string} column + row
 */
const getRandomChessCase = () => {
   return casesName[Math.floor(Math.random() * 65)]
}

// const startChrono = setInterval(chrono, 1000);
// const stopChrono = () => clearInterval(startChrono);

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

/**
 * Build cases names
 */
const letters = ['a','b','c','d','e','f','g','h'];
const casesName = [];
for(const letter of letters) {
        for(let i = 1; i < 9; i++) {
        casesName.push(letter+i)
    }
}


/**
 * Build chessboard game
 */
function buildCases() {
    // for (let i = 0 ; i < 8 ; i++) {
    //     chessboard.insertAdjacentHTML('afterbegin', `
    //     <div class="chessboard-strip"}>
    //         ${letters[i]}
    //     </div>`)
    // }
    // build square
    for(let i = 0; i < 64; i++ ){
        chessboard.insertAdjacentHTML('afterbegin', `
        <div class="case ${i % 2 ? 'case--white' : 'case--black'}" data-name=${casesName[i]} data-number${i}>
            <span class='d-none case-name'>${casesName[i]}<span>
        </div>`)
    }
    const cases = document.getElementsByClassName('case')
    // handle span text case name
    for (let item of cases) {
        item.addEventListener('click', function(e){
            for (span of document.getElementsByClassName('case-name')) {span.classList.add('d-none')};
            e.currentTarget.querySelector('span').classList.remove('d-none');
            playerClickedOnCase = item.dataset.name
            isTheCaseClickedTheGoodOne(e)
        })
    }
}
buildCases()

/**
 * 
 */
function isTheCaseClickedTheGoodOne(e) {
    if (playerClickedOnCase === answer) {
            scoreCounter += 1
            score.innerHTML = scoreCounter
            newTurn()
        e.currentTarget.classList.add('case--right')
    }
}

/**
 * Start a new game
 */
const newTurn = () => {
    answer = getRandomChessCase()
    find.innerHTML = answer
}

/* RULES & PARAMETERS */

/**
 * 
 * @param {*} param 
 */
function displayCasesNames(param) {
    switch(param) {
        case 'hoover':
            break;
        case 'always':
            break;
        case 'never':
            break;
        case 'click':
            break;
    }
}

/**
 * Display Black or White point of view
 */
function reverseBoard() {

}


