const MatrixIterador = require('./MatrixIterador');

class IteratorMatrixHorinzotally extends MatrixIterador {
  constructor() {
    super('foo');
  }

  hasNext() {
    return this.Xindex < this.elements.length;
  }

  next() {
    return this.elements[this.Xindex][this.Yindex++];
  }

  reset() {
    this.Xindex = 0;
    this.Yindex = 0;
  }

  displace() {
    if (this.Yindex >= this.elements.length) {
      this.Yindex = 0;
      this.Xindex++;
      if (this.Xindex < this.elements.length) {
        this.setInitialComparer(this.elements[this.Xindex][0]);
        this.restartCounter();
      }
    }
  }
}

module.exports = IteratorMatrixHorinzotally;
