import Pen from "./Pen";
import PenType from "./PenType";
import Refil from "./Refil";

export default class BallPen implements Pen {
    public brand: string;
    public cost: number;
    public penType: PenType = PenType.BALL;
    public refil: Refil;

    write(): void {
        throw new Error("Method not implemented.");
    }
}
