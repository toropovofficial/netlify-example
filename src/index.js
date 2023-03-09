import login from './pages/login/index'
import registration from './pages/registration/index'
import viewProfile from './pages/viewProfile/index'
import changeProfile from './pages/changeProfile/index'
import changePassword from './pages/changePassword/index'
import chat from './pages/chat/index'
import error404 from './pages/404/index'
import error500 from './pages/500/index'

export const App = () => {
  switch (document.location.pathname) {
    case '/registration':
      return registration
      break;
    case '/login':
      return login
      break;
    case '/viewProfile':
      return viewProfile 
      break;
    case '/changeProfile':
      return changeProfile
      break;
    case '/changePassword':
      return changePassword
      break;
    case '/chat':
      return chat
      break;
    case '/404':
      return error404
      break;
    case '/500':
      return error500
      break;
    default:
      return login
  }
}