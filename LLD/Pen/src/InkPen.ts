import Pen from "./Pen";
import PenType from "./PenType";

export default class InkPen implements Pen {
    public brand: string;
    public cost: number;
    public penType: PenType = PenType.FOUNTAIN;
    
    write(): void {
        throw new Error("Method not implemented.");
    }
}
