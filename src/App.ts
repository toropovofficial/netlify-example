import loginInit from './pages/login/index';
import registrationInit from './pages/registration/index';
import { viewProfileInit } from './pages/viewProfile/index';
import { changeProfileInit } from './pages/changeProfile/index';
import { changePasswordInit } from './pages/changePassword/index';
import error500Init from './pages/500/index';
import error404Init from './pages/404/index';
import chatInit from './pages/chat/index';
import { NavIint } from './pages/nav/index';

export const App = () => {
  switch (document.location.pathname) {
    case '/registration':
      return registrationInit;
    case '/login':
      return loginInit;
    case '/viewProfile':
      return viewProfileInit;
    case '/changeProfile':
      return changeProfileInit;
    case '/changePassword':
      return changePasswordInit;
    case '/chat':
      return chatInit;
    case '/404':
      return error404Init;
    case '/500':
      return error500Init;
    default:
      return NavIint;
  }
};

export default App();
