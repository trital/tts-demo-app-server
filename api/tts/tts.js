const AWS = require('aws-sdk');

class TTS {
	constructor() {
		AWS.config.update({
			accessKeyId: process.env.POLLY_ACCESS_KEY_ID,
			secretAccessKey: process.env.POLLY_SECRET_ACCESS_KEY,
			region: 'us-east-1',
			signatureVersion: 'v4',
		});

		this.polly = new AWS.Polly();
	}

	synthesizeSpeech(params) {
		const _params = {
			OutputFormat: 'mp3',
			Text: params.text,
			VoiceId: params.voiceId,
			Engine: 'standard',
			LanguageCode: params.languageCode,
			SampleRate: '8000',
			TextType: 'text',
		};

		return new Promise((resolve, reject) => {
			this.polly.synthesizeSpeech(_params, (err, data) => {
				if (err) {
					reject(err);
				} else {
					resolve(data);
				}
			});
		});
	}
}

module.exports = TTS;
