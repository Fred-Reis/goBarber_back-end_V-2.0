import { Router } from 'express';

import SessionsControllers from '@modules/users/infra/http/controllers/SessionsControllers';

const sessionsRouter = Router();
const sessionsController = new SessionsControllers();

sessionsRouter.post('/', sessionsController.create);

export default sessionsRouter;
