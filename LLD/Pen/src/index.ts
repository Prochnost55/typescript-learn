import ButterFlowPen from "./ButterFlowPen";
import Pen from "./Pen";

const p: ButterFlowPen = new ButterFlowPen();

try {
    for(let i = 0; i < 10; i++){
        console.log(p.write());
    }
    console.log(p.write());
} catch(e){
    // how to refil the ink
    p.refilInk(); 
    //this is not available in Pen;
}


console.log(p.brand);
console.log(p.cost);
console.log(p.penType);
