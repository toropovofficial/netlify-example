/* eslint-disable no-tabs */
import LoginPage from './pages/login/index';
import { RegistartionPage } from './pages/registration/index';
import ProfilePage from './pages/Profile/index';
import ChangeProfilePage from './pages/changeProfile/index';
import changePasswordPage from './pages/changePassword/index';
// import Error500Page from '../pages/500/index';
// import Error404Page from './pages/404/index';
import Messenger from './pages/messenger/index';
import './utils/HTTPTransport';
import Router from './utils/Router';
import AuthController from './controllers/AuthController';
import ChatController from './controllers/ChatController';
import { store } from "./utils/Store.ts";

const initApp = async () => {
  const router = new Router('#root');

  router
    .use('/login', LoginPage)
    .use('/sign-up', RegistartionPage)
    .use('/profile', ProfilePage)
    .use('/messenger', Messenger)
    .use('/settings', ChangeProfilePage)
    .use('/settings/password', changePasswordPage);

  globalThis.$router = router;

  try {
    await AuthController.fetchUser();

    await ChatController.getChats()

    router.start();
    
    const path = document.location.pathname;

    switch (true) {
      case path === '/':
        router.go('/messenger');
        break;
      case path === '/login':
        router.go('/messenger');
        break;
      case path === '/sign-up':
        router.go('/messenger');
        break;
      default:
        break;
    }
  } catch (error) {
    store.set('showModal', true)
    router.go('/login');
  }
};

initApp();
