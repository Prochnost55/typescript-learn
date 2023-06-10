import Game from "../components/Game";
import Player from "../components/Player";
import GameStatus from "../constants/GameStatus";

class GameController {
    public undo() {

    }

    public getWinner (game: Game): Player {
        return game.getWinner();
    }

    public createGame(dimension: number, players: Player[]): Game {
        let game: Game = Game.getBuilder()
                        .setPlayers(players)
                        .setDimensions(dimension)
                        .build();

        return game;
    }

    public displayBoard(game: Game): void {
        game.displayBoard();
    }

    public getGameStatus(game:Game): GameStatus {
        return game.getGameStatus();
    }

    public executeNextMove(game: Game): void {
        game.makeNextMove();
    }
}

export default GameController;
