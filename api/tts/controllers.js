const catchAsync = require('../../utility/catchAsync');
const AppError = require('../../utility/appError');
const TTS = require('./tts');

module.exports = {
	synthesizeSpeech: catchAsync(async (req, res, next) => {
		const tts = new TTS();
		const data = await tts.synthesizeSpeech(req.body);
		return res.json(data);
	}),
};
