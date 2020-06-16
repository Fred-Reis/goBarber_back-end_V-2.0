import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import UsersController from '@modules/users/infra/http/controllers/UsersControllers';
import UserAvatarControler from '@modules/users/infra/http/controllers/UserAvatarController';

const usersRoutes = Router();
const usersControllers = new UsersController();
const userAvatarController = new UserAvatarControler();
const upload = multer(uploadConfig);

usersRoutes.post('/', usersControllers.create);

usersRoutes.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  userAvatarController.update,
);

export default usersRoutes;
