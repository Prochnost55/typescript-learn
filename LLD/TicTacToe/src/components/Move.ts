import Cell from "./Cell";
import Player from "./Player";

class Move {
    private player: Player;
    private cell: Cell;

    constructor(player: Player, cell: Cell) {
        this.player = player;
        this.cell = cell;
    }

    public getPlayer(): Player {
        return this.player;
    }

    public setPlayer(player: Player):void {
        this.player = player;
    }

    public getCell(): Cell {
        return this.cell;
    }

    public setCell(cell: Cell): void {
        this.cell = cell;
    }
}

export default Move;
