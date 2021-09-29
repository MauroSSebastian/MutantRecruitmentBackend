const router = require('express').Router();
const controller = require('./Controllers');

router.post('/mutant', controller.isMutant);
router.get('/mutant', controller.get);
router.put('/mutant/:id', controller.put);
router.delete('/mutant/:id', controller.delete);
router.get('/stats', controller.stats);

module.exports = router;
