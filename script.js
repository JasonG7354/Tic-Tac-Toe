const choices = document.querySelectorAll(".box");


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        choice.innerText = "X";
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

function createPlayer(name, boardObjectArr){
    return {
        name,
        turn: isPlayerTurn(),
        point: 0,
        checkWin: checkWin(boardObjectArr)

    }
    function isPlayerTurn(){
        return true;

    }
    function checkWin(boardObjectArr){
        if (boardObjectArr.firstRow[0] === "X" && boardObjectArr.firstRow[1] === "X" && boardObjectArr.firstRow[2] === "X"){
            return true;

        } else if (boardObjectArr.secondRow[0] === "X" && boardObjectArr.secondRow[1] === "X" && boardObjectArr.secondRow[2] === "X"){
            return true;

        } else if (boardObjectArr.thirdRow[0] === "X" && boardObjectArr.thirdRow[1] === "X" && boardObjectArr.thirdRow[2] === "X"){
            return true;

        } else if (boardObjectArr.firstRow[0] === "X" && boardObjectArr.secondRow[0] === "X" && boardObjectArr.thirdRow[0] === "X"){
            return true;

        } else if (boardObjectArr.firstRow[1] === "X" && boardObjectArr.secondRow[1] === "X" && boardObjectArr.thirdRow[1] === "X"){
            return true;
            
        } else if (boardObjectArr.firstRow[2] === "X" && boardObjectArr.secondRow[2] === "X" && boardObjectArr.thirdRow[2] === "X"){
            return true;
            
        } else if (boardObjectArr.firstRow[0] === "X" && boardObjectArr.secondRow[1] === "X" && boardObjectArr.thirdRow[2] === "X"){
            return true;
            
        } else if (boardObjectArr.firstRow[2] === "X" && boardObjectArr.secondRow[1] === "X" && boardObjectArr.thirdRow[0] === "X"){
            return true;
            
        } else if (boardObjectArr.firstRow[0] === "O" && boardObjectArr.firstRow[1] === "O" && boardObjectArr.firstRow[2] === "O"){
            return true;

        } else if (boardObjectArr.secondRow[0] === "O" && boardObjectArr.secondRow[1] === "O" && boardObjectArr.secondRow[2] === "O"){
            return true;

        } else if (boardObjectArr.thirdRow[0] === "O" && boardObjectArr.thirdRow[1] === "O" && boardObjectArr.thirdRow[2] === "O"){
            return true;

        } else if (boardObjectArr.firstRow[0] === "O" && boardObjectArr.secondRow[0] === "O" && boardObjectArr.thirdRow[0] === "O"){
            return true;

        } else if (boardObjectArr.firstRow[1] === "O" && boardObjectArr.secondRow[1] === "O" && boardObjectArr.thirdRow[1] === "O"){
            return true;
            
        } else if (boardObjectArr.firstRow[2] === "O" && boardObjectArr.secondRow[2] === "O" && boardObjectArr.thirdRow[2] === "O"){
            return true;
            
        } else if (boardObjectArr.firstRow[0] === "O" && boardObjectArr.secondRow[1] === "O" && boardObjectArr.thirdRow[2] === "O"){
            return true;
            
        } else if (boardObjectArr.firstRow[2] === "O" && boardObjectArr.secondRow[1] === "O" && boardObjectArr.thirdRow[0] === "O"){
            return true;
    } else {
        return false;
    }
}
}

function gameFlow(player1, player2, boardObjectArr){
    return {
        start: gameStart(player1, player2, boardObjectArr)
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