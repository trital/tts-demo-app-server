const HttpStatus = require('http-status');

class ValidationError extends Error {
	constructor(props, details = null) {
		super(props);
		this.status = 'error';
		this.statusCode = HttpStatus.BAD_REQUEST;
		this.details = details;
	}
}

module.exports = ValidationError;
