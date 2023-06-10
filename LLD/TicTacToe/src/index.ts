import Board from "./components/Board";
import Game from "./components/Game";
import Player from "./components/Player";
import GameStatus from "./constants/GameStatus";
import PlayerType from "./constants/PlayerType";
import GameController from "./controllers/GameController";
const prompt = require('prompt-sync')();

let gameController = new GameController();
let dimension: number = prompt("What is the dimension of the game? ");
let shouldHaveBot: string = prompt("Do you want a bot in the game? y/n ");

let numberOfPlayers: number = dimension - 1;
if(shouldHaveBot == 'y'){
    numberOfPlayers -= 1;
}

let players: Player[] = [];

for(let i = 0; i < numberOfPlayers; i++){
    let name: string = prompt(`What is the name of the player ${i+1}:`);
    let symbol: string = prompt(`What is the symbol of the player ${i+1}:`);
    players.push(new Player(name, symbol.charAt(0), PlayerType.HUMAN));
}

let game: Game = gameController.createGame(dimension, players);

while (game.getGameStatus() == GameStatus.IN_PROGRESS) {
    console.log("This is the current board: ");
    gameController.displayBoard(game);

    let input = prompt("Do you want to undo ? y/n");
    
    if (input == "y") {
        gameController.undo();
    } else {
        gameController.executeNextMove(game);
    }
}

console.log("Game has ended, Result is: ");
if (game.getGameStatus() == GameStatus.ENDED) {
    console.log("Winner is : " + gameController.getWinner(game).getName());
}
