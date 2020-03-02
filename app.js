const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const AppError = require('./utility/appError');
const globalErrorHandler = require('./utility/globalErrorHandler');

const app = express();

/**Disable powered by */
app.disable('x-powered-by');

/**Enable CORS */
app.use(cors());

/**Accept application/json and urlencoded */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**Request logger */
app.use(morgan('dev'));

/**Routes */
const tts = require('./api/tts');

/**APIs */
app.use('/tts', tts);

/**404 forwarder */
app.all('*', (req, res, next) =>
	next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404)),
);

/**Error handler */
app.use(globalErrorHandler);

module.exports = app;
