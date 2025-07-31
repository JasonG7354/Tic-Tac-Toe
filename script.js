const choices = document.querySelectorAll(".box");
const startButton = document.querySelector(".button-start");
const playerOneId = document.querySelector("#playerOne");
const playerTwoId = document.querySelector("#playerTwo");
const container = document.querySelector(".button-reset-div");
let playerOne
let playerTwo
let playerNames





const board = [[0,0,0],
               [0,0,0],
               [0,0,0]];
function createPlayer(name){
    return {
        name,
        turn: true,
        point: 0
    }
}

function boxClickHandler(event){
    const div = event.target;

    if (div.innerText !== '') return;

    const parent = div.parentNode.classList
    const child = div.classList;
    const [row, col] = getRowCol(parent, child);

    addLetter(div, playerOne.turn);
    inputBoardChoice(row, col, div.innerText, playerOne);
    checkWin(board, container, playerNames, playerOne);

}

function addLetter(div, playerOneTurn){
    if (playerOneTurn === true){
        if (div.innerText === ''){
            div.innerText = "X"
        }

    } else {
        if (div.innerText === ''){
                div.innerText = "O";
            }
        }
}


function getRowCol(parentClassList, childClassList){
        let row = 0
        let col = 0
        if (parentClassList[0] === "row1"){
            row = 0;
        } else if (parentClassList[0] === "row2"){
            row = 1;
        } else if (parentClassList[0] === "row3"){
            row = 2;
        }
        if (childClassList[1] === "col-one"){
            col = 0;
        } else if (childClassList[1] === "col-two"){
            col = 1;
        } else if (childClassList[1] === "col-three") {
            col = 2;
        }
        return [row, col];

    };


function inputBoardChoice(row, column, letter, playerOne){
    if (board[row][column] === 0 && playerOne.turn === true){
        board[row][column] = letter;
        playerOne.turn = false;
    } else {
        board[row][column] = letter;
        playerOne.turn = true;
    }

}


function checkWin(board, container, name, playerOne){
    if (board[0][0] === "X" && board[0][1] === "X" && board[0][2] === "X"){
            createWinMessage(name[0], playerOne);

        } else if (board[1][0] === "X" && board[1][1] === "X" && board[1][2] === "X"){
            createWinMessage(name[0], playerOne);

        } else if (board[2][0] === "X" && board[2][1] === "X" && board[2][2] === "X"){
            createWinMessage(name[0], playerOne);

        } else if (board[0][0] === "X" && board[1][0] === "X" && board[2][0] === "X"){
            createWinMessage(name[0], playerOne);

        } else if (board[0][1] === "X" && board[1][1] === "X" && board[2][1] === "X"){
            createWinMessage(name[0], playerOne);
            
        } else if (board[0][2] === "X" && board[1][2] === "X" && board[2][2] === "X"){
            createWinMessage(name[0], playerOne);
            
        } else if (board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X"){
            createWinMessage(name[0], playerOne);
            
        } else if (board[0][2] === "X" && board[1][1] === "X" && board[2][0] === "X"){
            createWinMessage(name[0], playerOne);
            
        } else if (board[0][0] === "O" && board[0][1] === "O" && board[0][2] === "O"){
            createWinMessage(name[1], playerOne);

        } else if (board[1][0] === "O" && board[1][1] === "O" && board[1][2] === "O"){
            createWinMessage(name[1], playerOne);

        } else if (board[2][0] === "O" && board[2][1] === "O" && board[2][2] === "O"){
            createWinMessage(name[1], playerOne);

        } else if (board[0][0] === "O" && board[1][0] === "O" && board[2][0] === "O"){
            createWinMessage(name[1], playerOne);

        } else if (board[0][1] === "O" && board[1][1] === "O" && board[2][1] === "O"){
            createWinMessage(name[1], playerOne);
            
        } else if (board[0][2] === "O" && board[1][2] === "O" && board[2][2] === "O"){
            createWinMessage(name[1], playerOne);
            
        } else if (board[0][0] === "O" && board[1][1] === "O" && board[2][2] === "O"){
            createWinMessage(name[1], playerOne);
            
        } else if (board[0][2] === "O" && board[1][1] === "O" && board[2][0] === "O"){
            createWinMessage(name[1], playerOne);
    }
    function createWinMessage(winnerName, player){
        newDiv = document.createElement("h1");
        newButton = document.createElement("button");
        newDiv.innerText = `You Won ${winnerName}!`;
        newButton.innerText = "Restart Game";
        container.appendChild(newDiv);
        container.appendChild(newButton);
        removeClick(choices);
        function resetBoard(board){
            for (let i = 0; i < board.length; i++){
                for (let j = 0; j < board[i].length;j++){
                    board[i][j] = 0;
            }
        }
     choices.forEach((choice) => {
        choice.innerText = '';
        choice.addEventListener("click", boxClickHandler)
     })

}
        function removeClick(boxes){
            boxes.forEach((box) => {
                box.removeEventListener("click", boxClickHandler);

     })
        }
        newButton.addEventListener("click", () => {
            resetBoard(board);
            player.turn = true;
            container.removeChild(newDiv);
            container.removeChild(newButton);

            
            
            })

    }
    

}




startButton.addEventListener("click", (event) => {
    event.preventDefault();
    playerOne = createPlayer(playerOneId.value);
    playerTwo = createPlayer(playerTwoId.value);
    playerNames = [playerOne.name, playerTwo.name];
   


    choices.forEach((choice) => {
        choice.addEventListener("click", boxClickHandler);


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
 
*/