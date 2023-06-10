import CellState from "../constants/CellState";
import GameStatus from "../constants/GameStatus";
import Board from "./Board";
import Cell from "./Cell";
import Move from "./Move";
import Player from "./Player";
import GameWinningStrategy from "../strategies/GameWinningStrategy";
import OrderOneWinningStrategy from "../strategies/OrderOneWinningStrategy";

class Game {
    private board: Board;
    private players: Player[];
    private moves: Move[];
    private gameStatus: GameStatus;
    private nextPlayerIndex: number;
    private winner: Player;
    private gameWinningStrategy: GameWinningStrategy;
    
    public getNextPlayerIndex():number{
        return this.nextPlayerIndex;
    }
    public setNextPlayerIndex(playerIdx: number): void {
        this.nextPlayerIndex = playerIdx;
    }

    public getMoves(): Move[]{
        return this.moves;
    }
    public setMoves(moves: Move[]) {
        this.moves = moves;
    }

    public getPlayers(): Player[]{
        return this.players;
    }
    public setPlayers(players: Player[]) {
        this.players = players;
    }

    public getBoard(): Board {
        return this.board;
    }
    public setBoard(board: Board) {
        this.board = board;
    }

    public getGameStatus(): GameStatus{
        return this.gameStatus;
    }
    public setGameStatus(status: GameStatus) {
        this.gameStatus = status;
    }

    public static getBuilder(): GameBuilder{
        return new GameBuilder();
    }

    
    public getWinner(): Player {
        return this.winner;
    }

    public setGameWinningStrategy(gameWinningStrategy: GameWinningStrategy) {
        this.gameWinningStrategy = gameWinningStrategy;
    }
    public makeNextMove():void {
        let playerToMove: Player = this.players[this.nextPlayerIndex];
        console.log("It is " + playerToMove.getName() + "'s turn to play");

        let move: Move = playerToMove.decideMove(this.board);

        let row: number = move.getCell().getRow();
        let col: number = move.getCell().getCol();
        let cell: Cell = move.getCell();

        console.log("Player is making a move at row: " + row + " & col: " + col);

        //Game will validate the move. -> TODO.

        cell.setPlayer(playerToMove);
        this.board.getBoard()[row][col].setPlayer(playerToMove);
        this.board.getBoard()[row][col].setCellState(CellState.OCCUPIED);
        this.moves.push(move);

        if (this.gameWinningStrategy.checkWinner(this.board, playerToMove, cell)) {
            this.gameStatus = GameStatus.ENDED;
            this.winner = playerToMove;
        }
        this.nextPlayerIndex = (this.nextPlayerIndex+1) % this.players.length;
    }

    public displayBoard():void {
        this.board.display();
    }

}

class GameBuilder {
    private dimensions: number;
    private players: Player[];
    
    public getDimensions(): number{
        return this.dimensions;
    }
    public setDimensions(size: number): GameBuilder {
        this.dimensions = size;
        return this;
    }

    public getPlayers(): Player[] {
        return this.players;
    }
    public setPlayers(players: Player[]): GameBuilder {
        this.players = players;
        return this;
    }


    private isValid(): boolean{
        if(this.dimensions < 2) return false;
        if(this.players.length != this.dimensions - 1) return false;

        return true;
    };

    public build(): Game{
        if(!this.isValid()){
            throw new Error("GAME_BUILDER_ERROR");
        }

        let game: Game = new Game();
            game.setGameStatus(GameStatus.IN_PROGRESS);
            game.setBoard(new Board(this.getDimensions()));
            game.setPlayers(this.players);
            game.setMoves([]);
            game.setNextPlayerIndex(0);
            game.setGameWinningStrategy(new OrderOneWinningStrategy(this.getDimensions()));
            
        return game;
    }
}

export default Game;
