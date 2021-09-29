const MatrixIterador = require('./MatrixIterador');

class IteratorMatrixObliquely extends MatrixIterador {
  constructor() {
    super();
    this.iterator = 0;
  }

  hasNext() {
    return this.iterator <= 2 * (this.elements.length - 1) && this.Yindex >= 0;
  }

  static next() {
    throw new Error('You have to implement the method next!');
  }

  reset() {
    this.Xindex = 0;
    this.Yindex = this.elements.length - 1;
    this.iterator = 0;
  }

  displace() {
    if (this.Yindex < 0) {
      this.iterator++;
      this.Yindex = this.elements.length - 1;
      if (this.Yindex > this.elements.length) {
        this.setInitialComparer(this.elements[this.Xindex][0]);
        this.restartCounter();
      }
    }
  }

  setElements(elements) {
    this.Yindex = elements.length - 1;
    this.elements = elements;
  }
}

module.exports = IteratorMatrixObliquely;
