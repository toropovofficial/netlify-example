import { ProfileAPI, ProfileData } from '../api/ProfileApi';
import { store } from '../utils/Store';

class ProfileController {
  private api: any;

  constructor() {
    this.api = new ProfileAPI();
  }

  async update(data: ProfileData) {
    this.api
      .updateProfile(data)
      .then(async (x) => {
        await this.fetchUser(x.id);
        $router.go('/profile');
      })
      .catch(() => {});
  }

  async changePassword(data: any) {
    this.api
      .changePassword(data)
      .then(() => {
        $router.go('/profile');
      })
      .catch(() => {});
  }

  async updateAvatar(data: any) {
    this.api
      .updateAvatar(data)
      .then(async (x) => {
        store.set('user.data', x);
        // await ResourcesController.getAvatar(x.avatar);
      })
      .catch((y) => {
        console.log(y);
        debugger;
      });
  }

  async fetchUser(id: number) {
    store.set('user.isLoading', true);
    await this.api
      .getUser(id)
      .then((user) => {
        store.set('user.data', user);
      })
      .finally(() => {
        setTimeout(() => {
          return store.set('user.isLoading', false);
        }, 1000);
      });
  }
}

export default new ProfileController();
