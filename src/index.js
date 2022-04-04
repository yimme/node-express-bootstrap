import express from 'express';
import defaultRouter from './routes';
const server = express();

const PORT = 3030;

const startServer = () => {
	try {
		server.use(defaultRouter);
		server.listen(PORT);
	} catch (err) {
		console.error(err);
	}
};

startServer();
