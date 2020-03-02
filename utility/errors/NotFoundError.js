const HttpStatus = require('http-status');

class NotFoundError extends Error {
	constructor(props) {
		super(props);
		this.status = 'error';
		this.statusCode = HttpStatus.NOT_FOUND;
	}
}

module.exports = NotFoundError;
