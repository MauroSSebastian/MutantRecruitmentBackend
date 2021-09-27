const router = require('express').Router();
const controller = require('./Controllers');

router.post('/', controller.mutant);

module.exports = router;