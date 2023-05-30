import Ink from "./Ink";
import Nip from "./Nip";

export default class Refil {
    public ink: Ink = new Ink();
    public nip: Nip = new Nip();

    constructor(color:string, size: number){
        this.ink.color = color;
        this.ink.level = 100;
        this.nip.size = size;
    }
}
