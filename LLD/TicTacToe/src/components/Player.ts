import Board from "./Board";
import Move from "./Move";
import PlayerType from "../constants/PlayerType";
import Cell from "./Cell";
const prompt = require('prompt-sync')();

class Player {
  private symbol: string;
  private name: string;
  private type: PlayerType;

  constructor(name: string, symbol: string, type: PlayerType) {
    this.name = name;
    this.symbol = symbol;
    this.type = type;
  }

  public getSymbol(): string {
    return this.symbol;
  }
  public getName(): string {
    return this.name;
  }
  public getType(): PlayerType {
    return this.type;
  }

  public decideMove(board: Board): Move {
    let row: number = prompt("Please enter the row: ");
    let col: number = prompt("Please enter the col: ");

    return new Move(this, new Cell(row, col));
  }
}

export default Player;
