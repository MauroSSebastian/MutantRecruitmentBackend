const IteratorMatrixObliquely = require('./IteratorMatrixObliquely');

class IteratorMatrixObliquelyBottomToTop extends IteratorMatrixObliquely {
  constructor() {
    super('foo');
  }

  next() {
    this.Xindex = this.iterator - (this.elements.length - this.Yindex);
    const auxIndex = this.Yindex;
    this.Yindex--;
    if (this.Xindex >= 0 && this.Xindex < this.elements.length) {
      return this.elements[auxIndex][this.Xindex];
    }
    return null;
  }
}

module.exports = IteratorMatrixObliquelyBottomToTop;
