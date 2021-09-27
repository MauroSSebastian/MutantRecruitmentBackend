const router = require('express').Router();
const controller = require('./Controllers');

router.post('/mutant', controller.mutant);
router.get('/stats', controller.stats);

module.exports = router;