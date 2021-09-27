const router = require('express').Router();
const controller = require('./Controllers');

router.post('/', controller.mutant);
router.get('/test', (req,res)=>res.json({ok:true}));

module.exports = router;