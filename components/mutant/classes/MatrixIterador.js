class MatrixIterador {
  constructor() {
    this.Xindex = 0;
    this.Yindex = 0;
    this.initialComparer = '';
    this.counter = 0;
  }

  static hasNext() {
    throw new Error('You have to implement the method hasNext!');
  }

  static next() {
    throw new Error('You have to implement the method next!');
  }

  static reset() {
    throw new Error('You have to implement the method reset!');
  }

  static displace() {
    throw new Error('You have to implement the method displace!');
  }

  getElements() {
    return this.elements;
  }

  setElements(elements) {
    this.elements = elements;
    this.initialComparer = elements[this.Xindex][this.Yindex];
  }

  getInitialComparer() {
    return this.initialComparer;
  }

  setInitialComparer(initialComparer) {
    this.initialComparer = initialComparer;
  }

  getCounter() {
    return this.counter;
  }

  incrementCounter() {
    this.counter++;
  }

  restartCounter() {
    this.counter = 0;
  }
}

module.exports = MatrixIterador;
