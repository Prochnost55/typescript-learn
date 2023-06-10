import Board from "../components/Board";
import Cell from "../components/Cell";
import Player from "../components/Player";
import GameWinningStrategy from "./GameWinningStrategy";

class OrderOneWinningStrategy implements GameWinningStrategy {
    
    private rowSymbolCounts :  Map<string, number>[] = [];
    private colSymbolCounts :  Map<string, number>[] = [];
    
    private topLeftDiagSymbolCounts = new Map<string, number>();
    private topRightDiagSymbolCounts = new Map<string, number>();

    constructor (dimension: number) {
        for (let i = 0; i < dimension; i++) {
            this.rowSymbolCounts.push(new Map<string, number>());
            this.colSymbolCounts.push(new Map<string, number>());
        }
    }

    checkWinner(board: Board, player: Player, cell: Cell): boolean {
        let symbol: string = cell.getPlayer().getSymbol();
        let row: number = cell.getRow();
        let col: number = cell.getCol();
        let dimension: number = board.getBoard().length;

        if (!this.rowSymbolCounts[row].has(symbol)){
            this.rowSymbolCounts[row].set(symbol, 0);
        }
        this.rowSymbolCounts[row].set(symbol, this.rowSymbolCounts[row].get(symbol) + 1);

        if (!this.colSymbolCounts[col].has(symbol)){
            this.colSymbolCounts[col].set(symbol, 0);
        }
        this.colSymbolCounts[col].set(symbol, this.colSymbolCounts[col].get(symbol) + 1);

        if (row == col && !this.topLeftDiagSymbolCounts.has(symbol)) {
            this.topLeftDiagSymbolCounts.set(symbol, 0);
        } else if (row == col) {
            this.topLeftDiagSymbolCounts.set(symbol, this.topLeftDiagSymbolCounts.get(symbol) + 1);
        }

        if (row + col == dimension - 1 &&
                !this.topRightDiagSymbolCounts.has(symbol)){
            this.topRightDiagSymbolCounts.set(symbol, 0);
        }else if (row + col == dimension - 1) {
            this.topRightDiagSymbolCounts.set(symbol, this.topRightDiagSymbolCounts.get(symbol) + 1);
        }

        if (this.rowSymbolCounts[row].get(symbol) == dimension ||
            this.colSymbolCounts[col].get(symbol) == dimension) {
            return true;
        }

        if (row == col && this.topLeftDiagSymbolCounts.get(symbol) == dimension) {
            return true;
        }

        if (row + col == dimension - 1 && this.topRightDiagSymbolCounts.get(symbol) == dimension)  {
            return true;
        }
        return false;
    }
}

export default OrderOneWinningStrategy;
