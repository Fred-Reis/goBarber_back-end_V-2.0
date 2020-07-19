import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import ListProvidersService from './ListProvidersService';

let fakeUsersRepository: FakeUsersRepository;
let listProviders: ListProvidersService;

describe('listProviders', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    listProviders = new ListProvidersService(fakeUsersRepository);
  });

  it('should be able to list the providers', async () => {
    const user = await fakeUsersRepository.create({
      name: 'testador',
      email: 'testador@teste.com',
      password: '123456',
    });

    const user1 = await fakeUsersRepository.create({
      name: 'testador1',
      email: 'testador1@teste.com',
      password: '123456',
    });

    const logged = await fakeUsersRepository.create({
      name: 'testador2',
      email: 'testador2@teste.com',
      password: '123456',
    });

    const providers = await listProviders.execute({
      user_id: logged.id,
    });

    expect(providers).toEqual([user, user1]);
  });
});
