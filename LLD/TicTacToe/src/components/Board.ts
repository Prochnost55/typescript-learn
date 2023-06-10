import CellState from "../constants/CellState";
import Cell from "./Cell";
class Board {
    private dimension: number;
    private board: Cell[][];

    constructor(dimension: number){
        this.dimension = dimension;
        this.board = [];
            
        for(let i = 0; i < dimension; i++){
            this.board.push([]);
            for(let j = 0; j < dimension; j++){
                this.board[i].push(new Cell(i, j));
            }
        }
    }

    public getDimension():number {
        return this.dimension;
    }

    public getBoard(): Cell[][]{
        return this.board;
    }

    public display(): void {
        for(let i = 0; i < this.dimension; i++){
            let string = "";
            for(let j = 0; j < this.dimension; j++){
                if(this.board[i][j].getCellState() === CellState.AVAILABLE){
                    string += "| |";
                } else {
                    string += "|" + this.board[i][j].getPlayer().getSymbol()+ "|";
                }
            }
            console.log(string);
        }
    }

}


export default Board;
