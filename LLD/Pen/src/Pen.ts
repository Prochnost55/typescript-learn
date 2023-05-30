import PenType from "./PenType";

export default abstract class Pen {
    public brand:string;
    public cost:number;
    public penType: PenType;

    abstract write():void;
}
