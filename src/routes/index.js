import { Router } from 'express';
import pkg from '../../package.json';

const defaultRouter = Router();

defaultRouter.get('/', (req, res) => {
	res.json({
		__v: pkg.version
	});
});

export default defaultRouter;