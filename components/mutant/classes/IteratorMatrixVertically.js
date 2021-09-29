const MatrixIterador = require('./MatrixIterador');

class IteratorMatrixVertically extends MatrixIterador {
  constructor() {
    super('foo');
  }

  hasNext() {
    return this.Yindex < this.elements.length;
  }

  next() {
    return this.elements[this.Xindex++][this.Yindex];
  }

  reset() {
    this.Xindex = 0;
    this.Yindex = 0;
  }

  displace() {
    if (this.Xindex >= this.elements.length) {
      this.Xindex = 0;
      this.Yindex++;
      if (this.Yindex < this.elements.length) {
        this.setInitialComparer(this.elements[0][this.Yindex]);
        this.restartCounter();
      }
    }
  }
}

module.exports = IteratorMatrixVertically;
