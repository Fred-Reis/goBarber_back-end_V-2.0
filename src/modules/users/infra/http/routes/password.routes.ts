import { Router } from 'express';

import ForgotPasswordControllers from '@modules/users/infra/http/controllers/ForgotPasswordControllers';
import ResetPasswordControllers from '@modules/users/infra/http/controllers/ResetPasswordControllers';

const passwordRouter = Router();
const forgotPasswordController = new ForgotPasswordControllers();
const resetPasswordController = new ResetPasswordControllers();

passwordRouter.post('/forgot', forgotPasswordController.create);
passwordRouter.post('/reset', resetPasswordController.create);

export default passwordRouter;
