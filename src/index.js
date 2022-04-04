import express from 'express';
const server = express();

async function startServer() {
	try {
		server.listen(3030, () => {
			console.log('Server running on port 3030');
		});
	} catch (err) {
		console.error(err);
	}
}

startServer();
