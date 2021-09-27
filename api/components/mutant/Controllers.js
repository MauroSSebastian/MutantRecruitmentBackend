const GeneDetector = require('./classes/GeneDetector')
const IteratorMatrixHorinzotally = require('./classes/IteratorMatrixHorinzotally')
const IteratorMatrixVertically = require('./classes/IteratorMatrixVertically')
const IteratorMatrixObliquelyBottomToTop = require('./classes/IteratorMatrixObliquelyBottomToTop')
const IteratorMatrixObliquelyTopToBottom = require('./classes/IteratorMatrixObliquelyTopToBottom')

exports.mutant = async (req, res) => {
    try {      
     const iterators = [
        new IteratorMatrixHorinzotally(), 
        new IteratorMatrixVertically(),
        new IteratorMatrixObliquelyBottomToTop(),
        new IteratorMatrixObliquelyTopToBottom(), 
      ]

      const detector = new GeneDetector(iterators);
      const result = detector.isMutant(req.body.dna);
      const status = result ? 200 : 403

      return res.status(status).end();
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  };