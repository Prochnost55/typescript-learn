import Pen from "./Pen";
import PenType from "./PenType";

export default class GelPen implements Pen {
    public brand: string;
    public cost: number;
    public penType: PenType = PenType.GEL;
    
    write(): void {}
}
