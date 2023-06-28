import { AuthAPI, SignupData, SigninData } from '../api/AuthApi';
import { store } from '../utils/Store';
import ChatController from './ChatController';

class AuthController {
  private api: AuthAPI;

  constructor() {
    this.api = new AuthAPI();
  }

  signup(data: SignupData) {
    this.api.signup(data)
      .then(async () => {
        await ChatController.getChats();
        $router.go('/messenger');
        store.set('showModal', false);
      })
      .catch((error) => {
        store.set('user.hasError', true);
        store.set('user.errorMessage', error?.reason);
      });
  }

  async signin(data: SigninData) {
    this.api.singin(data)
      .then(async () => {
        await this.fetchUser();
        await ChatController.getChats();
        $router.go('/messenger');
        store.set('showModal', false);
      })
      .catch((error) => {
        store.set('user.hasError', true);
        store.set('user.errorMessage', error?.reason);
      });
  }

  logout() {
    this.api.logout()
      .then(() => {
        store.set('user', null);
        store.set('showModal', true);
        $router.go('/sign-in');
      });
  }

  async fetchUser() {
    store.set('user.isLoading', true);
    await this.api.getUser()
      .then((user) => {
        store.set('user.data', user);
      })
      .finally(() => {
        setTimeout(() => { return store.set('user.isLoading', false); }, 1000);
      });
  }
}

export default new AuthController();
