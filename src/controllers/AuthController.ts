import { AuthAPI, SignupData, SigninData } from '../api/AuthApi';
import { store } from '../utils/Store';

class AuthController {
  private api: AuthAPI;

  constructor() {
    this.api = new AuthAPI();
  }

  signup(data: SignupData) {
    this.api.signup(data)
      .then((x) => {
        $router.go('/profile');
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
        $router.go('/profile');
      })
      .catch(x => {
        // console.log(x)
      });
  }

  logout() {
    this.api.logout()
      .then(() => {
        store.set('user', null);
        $router.go('/login');
      })
      .catch(console.log);
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
