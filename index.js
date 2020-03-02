/**
 * catch all errors not handled in sync codes.
 */
process.on('uncaughtException', err => {
	console.log('UNCAUGHT EXCEPTION! Shutting down...');
	console.error(err);
	process.exit(1);
});

require('dotenv').config({ path: './env.env' });

const app = require('./app');

const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () => {
	console.log(`Server started at port ${PORT}`);
});

/**
 * catch all errors not handled in async codes.
 */
process.on('unhandledRejection', err => {
	console.log('UNHANDLED REJECTION! Shutting down...');
	console.error(err);
	server.close(() => {
		process.exit(1);
	});
});
