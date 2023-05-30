import GelPen from "./GelPen";
import Refil from "./Refil";
import Refilable from "./Refilable";

export default class ButterFlowPen extends GelPen implements Refilable {
    public brand: string = "Reynolds";
    public cost: number = 10;
    public refil: Refil = new Refil("red", 0.5);
    
    refilInk(): void {
        this.refil.ink.level = 100;
    }
   
    write(): void {
        if(this.refil.ink.level <= 0) {
            throw new Error("Please refil the pen first");
        } else {
            this.refil.ink.level -= 10;
        }
    }
}
