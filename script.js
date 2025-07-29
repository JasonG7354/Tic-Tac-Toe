const choices = document.querySelectorAll(".box");
const startButton = document.querySelector(".button-start");
const playerOneId = document.querySelector("#playerOne");
const playerTwoId = document.querySelector("#playerTwo");
const container = document.querySelector(".button-reset-div");



function createPlayer(name){
    return {
        name,
        turn: true,
        point: 0
    }
}

const board = [[0,0,0],
               [0,0,0],
               [0,0,0]];
            
function inputBoardChoice(row, column, letter){
    if (board[row][column] === 0){
        board[row][column] = letter;
        return true;
    } else {
        return false;
    }

}

/*function removingClick(){
     choices.forEach((choice) => {
        choice.removeEventListener();
     })
}
*/
function resetBoard(board){
    for (let i = 0; i < board.length; i++){
        for (let j = 0; j < board[i].length;j++){
            board[i][j] = 0;
        }
    }
     choices.forEach((choice) => {
        choice.innerText = '';
     })

}


function checkWin(board){
    if (board[0][0] === "X" && board[0][1] === "X" && board[0][2] === "X"){
            return true;

        } else if (board[1][0] === "X" && board[1][1] === "X" && board[1][2] === "X"){
            return true;

        } else if (board[2][0] === "X" && board[2][1] === "X" && board[2][2] === "X"){
            return true;

        } else if (board[0][0] === "X" && board[1][0] === "X" && board[2][0] === "X"){
            return true;

        } else if (board[0][1] === "X" && board[1][1] === "X" && board[2][1] === "X"){
            return true;
            
        } else if (board[0][2] === "X" && board[1][2] === "X" && board[2][2] === "X"){
            return true;
            
        } else if (board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X"){
            return true;
            
        } else if (board[0][2] === "X" && board[1][1] === "X" && board[2][0] === "X"){
            return true;
            
        } else if (board[0][0] === "O" && board[0][1] === "O" && board[0][2] === "O"){
            return true;

        } else if (board[1][0] === "O" && board[1][1] === "O" && board[1][2] === "O"){
            return true;

        } else if (board[2][0] === "O" && board[2][1] === "O" && board[2][2] === "O"){
            return true;

        } else if (board[0][0] === "O" && board[1][0] === "O" && board[2][0] === "O"){
            return true;

        } else if (board[0][1] === "O" && board[1][1] === "O" && board[2][1] === "O"){
            return true;
            
        } else if (board[0][2] === "O" && board[1][2] === "O" && board[2][2] === "O"){
            return true;
            
        } else if (board[0][0] === "O" && board[1][1] === "O" && board[2][2] === "O"){
            return true;
            
        } else if (board[0][2] === "O" && board[1][1] === "O" && board[2][0] === "O"){
            return true;
    } else {
        return false;
    }

}

startButton.addEventListener("click", (event) => {
    event.preventDefault();
    const playerOne = createPlayer(playerOneId.value);
    const playerTwo = createPlayer(playerTwoId.value);
    let row
    let col

    choices.forEach((choice) => {
    choice.addEventListener("click", (event) => {
    if (playerOne.turn === true){
        if (choice.innerText === ''){
            choice.innerText = "X";
        }
        if (event.target.parentNode.classList[0] === "row1"){
            row = 0;
        } else if (event.target.parentNode.classList[0] === "row2"){
            row = 1;
        } else if (event.target.parentNode.classList[0] === "row3"){
            row = 2;
        }
        if (event.target.classList[1] === "col-one"){
            col = 0;
        } else if (event.target.classList[1] === "col-two"){
            col = 1;
        } else if (event.target.classList[1] === "col-three"){
            col = 2;
        }
        if (inputBoardChoice(row,col,choice.innerText) === false){
            playerOne.turn = true;
        } else {
            playerOne.turn = false;
        }

        if (checkWin(board) === true){
            
            newDiv = document.createElement("h1");
            newButton = document.createElement("button");
            newDiv.innerText = `You Won ${playerOne.name}!`;
            newButton.innerText = "Restart Game";
            container.appendChild(newDiv);
            container.appendChild(newButton);

            newButton.addEventListener("click", () => {
                resetBoard(board);
                container.removeChild(newDiv);
                container.removeChild(newButton);
                console.log(board)
            })

            
        }

    } else {
        if (choice.innerText === ''){
            choice.innerText = "O";
        }
        if (event.target.parentNode.classList[0] === "row1"){
            row = 0;
        } else if (event.target.parentNode.classList[0] === "row2"){
            row = 1;
        } else if (event.target.parentNode.classList[0] === "row3"){
            row = 2;
        }
        if (event.target.classList[1] === "col-one"){
            col = 0;
        } else if (event.target.classList[1] === "col-two"){
            col = 1;
        } else if (event.target.classList[1] === "col-three"){
            col = 2;
        }
        if (inputBoardChoice(row,col,choice.innerText) === false){
            playerOne.turn = false;
        } else {
            choice.innerText = "O";
            playerOne.turn = true;
        }


        if (checkWin(board) === true){

            newDiv = document.createElement("h1");
            newButton = document.createElement("button");
            newDiv.innerText = `You Won ${playerTwo.name}!`;
            newButton.innerText = "Restart Game";
            container.appendChild(newDiv);
            container.appendChild(newButton);

            newButton.addEventListener("click", () => {
                resetBoard(board);
                container.removeChild(newDiv);
                container.removeChild(newButton);
            })
            
        }

    }
        })
    })


})






























/*function createGameBaord(){
    return {
        gameBoard: createBoard()
    }
    function createBoard(){
        return {
            firstRow: [0,0,0],
            secondRow: [0,0,0],
            thirdRow: [0,0,0]
        }


    }

}

function createPlayer(name, board){
    return {
        name,
        turn: isPlayerTurn(),
        point: 0,
        checkWin: checkWin(board)

    }
    function isPlayerTurn(){
        return true;

    }
    function checkWin(board){
        if (board[0][0] === "X" && board[0][1] === "X" && board[0][2] === "X"){
            return true;

        } else if (board[1][0] === "X" && board[1][1] === "X" && board[1][2] === "X"){
            return true;

        } else if (board[2][0] === "X" && board[2][1] === "X" && board[2][2] === "X"){
            return true;

        } else if (board[0][0] === "X" && board[1][0] === "X" && board[2][0] === "X"){
            return true;

        } else if (board[0][1] === "X" && board[1][1] === "X" && board[2][1] === "X"){
            return true;
            
        } else if (board[0][2] === "X" && board[1][2] === "X" && board[2][2] === "X"){
            return true;
            
        } else if (board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X"){
            return true;
            
        } else if (board[0][2] === "X" && board[1][1] === "X" && board[2][0] === "X"){
            return true;
            
        } else if (board[0][0] === "O" && board[0][1] === "O" && board[0][2] === "O"){
            return true;

        } else if (board[1][0] === "O" && board[1][1] === "O" && board[1][2] === "O"){
            return true;

        } else if (board[2][0] === "O" && board[2][1] === "O" && board[2][2] === "O"){
            return true;

        } else if (board[0][0] === "O" && board[1][0] === "O" && board[2][0] === "O"){
            return true;

        } else if (board[0][1] === "O" && board[1][1] === "O" && board[2][1] === "O"){
            return true;
            
        } else if (board[0][2] === "O" && board[1][2] === "O" && board[2][2] === "O"){
            return true;
            
        } else if (board[0][0] === "O" && board[1][1] === "O" && board[2][2] === "O"){
            return true;
            
        } else if (board[0][2] === "O" && board[1][1] === "O" && board[2][0] === "O"){
            return true;
    } else {
        return false;
    }
}
}

function gameFlow(player1, player2, board){
    return {
        start: gameStart(player1, player2, board)
    }
    function gameStart(p1, p2, boardObjeect) {
        if (p1.turn === true){
            const div = document.querySelector(".box")

            div.addEventListener("click", () => {
                div.innerText = "X";

            })


            //Player 1 will pick where he wants to put his choice

            p1.turn = false;
        } else {
            const div = document.querySelector(".box")

            div.addEventListener("click", () => {
                div.innerText = "O";

            })
            //player 2 will pick where he wants to put his choice
            p1.turn = true;
        }
    }
}

//Creates the logic behind the gameboard
const boardOne = createGameBaord();

//Each time player submits their name then create player
const player1 = createPlayer("jason", boardOne.gameBoard);
const player2 = createPlayer("daniel", boardOne.gameBoard);

//
gameFlow(player1, player2, boardOne.gameBoard);
 
*/