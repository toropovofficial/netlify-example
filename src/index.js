import login from './pages/login/index'
import registration from './pages/registration/index'
import viewProfile from './pages/viewProfile/index'
import changeProfile from './pages/changeProfile/index'
import changePassword from './pages/changePassword/index'
import chat from './pages/chat/index'
import error404 from './pages/404/index'
import error500 from './pages/500/index'
document.body.innerHTML = `${login}`

switch (document.location.pathname) {
  case '/registration':
    document.body.innerHTML = `${registration}`
    break;
  case '/login':
    document.body.innerHTML = `${login}`
    break;
  case '/viewProfile':
    document.body.innerHTML = `${viewProfile}`
    break;
  case '/changeProfile':
    document.body.innerHTML = `${changeProfile}`
    break;
  case '/changePassword':
    document.body.innerHTML = `${changePassword}`
    break;
  case '/chat':
    document.body.innerHTML = `${chat}`
    break;
  case '/404':
    document.body.innerHTML = `${error404}`
    break;
  case '/500':
    document.body.innerHTML = `${error500}`
    break;
}