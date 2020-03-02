const HttpStatus = require('http-status');

class AuthorizationError extends Error {
	constructor(props) {
		super(props);
		this.status = 'error';
		this.statusCode = HttpStatus.UNAUTHORIZED;
	}
}

module.exports = AuthorizationError;
