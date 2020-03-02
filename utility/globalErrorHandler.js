const AppError = require('./appError');

const sendErrorDevelopment = (err, res) => {
	res.status(err.statusCode).json({
		status: err.status,
		message: err.message,
		error: err,
		stack: err.stack,
	});
};

const sendErrorProduction = (err, res) => {
	if (err instanceof AppError) {
		res.status(err.statusCode).json({
			status: err.status,
			message: err.message,
			error: err,
			stack: err.stack,
		});
	} else {
		console.error('Error : ', err);

		res.status(500).json({
			status: 'error',
			message: 'Something went very wrong!',
			err: err,
		});
	}
};

module.exports = (err, req, res, next) => {
	err.statusCode = err.statusCode || 500;
	err.status = err.status || null;

	if (process.env.NODE_ENV !== 'development') {
		sendErrorProduction(err, res);
	} else {
		sendErrorDevelopment(err, res);
	}
};
