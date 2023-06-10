import Player from "./Player";
import CellState from "../constants/CellState";

class Cell {
    private player: Player;
    private row: number;
    private col: number;
    private cellState: CellState; 

    constructor(row: number, col: number){
        this.row = row;
        this.col = col;
        this.cellState = CellState.AVAILABLE;
    }

    public getPlayer(): Player {
        return this.player;
    }
    public setPlayer(player: Player): void{
        this.player = player;
    }

    public getRow(): number{
        return this.row;
    }
    public setRow(row: number): void{
        this.row = row;
    }

    public getCol(): number{
        return this.col;
    }
    public setCol(col: number): void{
        this.col = col;
    }

    public getCellState(): CellState{
        return this.cellState;
    }
    public setCellState(cellState: CellState): void{
        this.cellState = cellState;
    }

}   


export default Cell;
