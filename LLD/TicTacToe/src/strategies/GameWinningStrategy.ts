import Board from "../components/Board";
import Cell from "../components/Cell";
import Player from "../components/Player";

interface GameWinningStrategy {
    checkWinner(board: Board, player: Player, cell: Cell): boolean;
}

export default GameWinningStrategy;
