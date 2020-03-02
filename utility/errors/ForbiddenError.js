const HttpStatus = require('http-status');

class ForbiddenError extends Error {
	constructor(props) {
		super(props);
		this.status = 'error';
		this.statusCode = HttpStatus.FORBIDDEN;
	}
}

module.exports = ForbiddenError;
