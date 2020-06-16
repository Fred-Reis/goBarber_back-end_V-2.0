import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<response> {
    const { name, email, password } = request.body;

    const creatUser = container.resolve(CreateUserService);

    const user = await creatUser.execute({
      name,
      email,
      password,
    });

    delete user.password;

    return response.json(user);
  }
}
