const GeneDetector = require('./classes/GeneDetector');
const IteratorMatrixHorinzotally = require('./classes/IteratorMatrixHorinzotally');
const IteratorMatrixVertically = require('./classes/IteratorMatrixVertically');
const IteratorMatrixObliquelyBottomToTop = require('./classes/IteratorMatrixObliquelyBottomToTop');
const IteratorMatrixObliquelyTopToBottom = require('./classes/IteratorMatrixObliquelyTopToBottom');
const repositorys = require('./Repositorys');

exports.isMutant = async (req, res) => {
  try {
    const iterators = [
      new IteratorMatrixHorinzotally(),
      new IteratorMatrixVertically(),
      new IteratorMatrixObliquelyBottomToTop(),
      new IteratorMatrixObliquelyTopToBottom(),
    ];

    const detector = new GeneDetector(iterators);
    const result = detector.isMutant(req.body.dna);

    await repositorys.insertHuman(req.body.dna, result);

    const status = result ? 200 : 403;

    return res.status(status).end();
  } catch (e) {
    return res.status(400).json({ error: e.message }).end();
  }
};

exports.get = async (req, res) => {
  try {
    const data = await repositorys.get();
    return res.status(200).json(data).end();
  } catch (e) {
    return res.status(400).json({ error: e.message }).end();
  }
};

exports.put = async (req, res) => res.status(200).json('You have to implement the method put!').end();

exports.delete = async (req, res) => res.status(200).json('You have to implement the method delete!').end();

exports.stats = async (req, res) => {
  try {
    const data = await repositorys.stats();
    return res.status(200).json(data).end();
  } catch (e) {
    return res.status(400).json({ error: e.message }).end();
  }
};
