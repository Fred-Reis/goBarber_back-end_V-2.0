import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import ProfileControllers from '@modules/users/infra/http/controllers/ProfileControllers';

const profileRouter = Router();
const profileController = new ProfileControllers();

profileRouter.use(ensureAuthenticated);

profileRouter.get('/', profileController.show);
profileRouter.put('/', profileController.update);

export default profileRouter;
