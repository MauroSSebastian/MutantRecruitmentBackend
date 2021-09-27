const IteratorMatrixObliquely = require("./IteratorMatrixObliquely");

class IteratorMatrixObliquelyTopToBottom extends IteratorMatrixObliquely{

    constructor(){
        super();
    }

    next(){     
        this.Xindex = this.iterator - this.Yindex;
        const auxIndex = this.Yindex;
        this.Yindex--;
        if ( this.Xindex >= 0 &&  this.Xindex < this.elements.length){
            return this.elements[auxIndex][this.Xindex];
        }        
        return null;
    }
}

module.exports = IteratorMatrixObliquelyTopToBottom;