const router = require('express').Router();
const controllers = require('./controllers');

router.route('/synthesize-speech').post(controllers.synthesizeSpeech);

module.exports = router;
