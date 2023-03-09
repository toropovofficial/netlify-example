import login from './pages/login/index'
import registration from './pages/registration/index'
import viewProfile from './pages/viewProfile/index'
import changeProfile from './pages/changeProfile/index'
import changePassword from './pages/changePassword/index'
import chat from './pages/chat/index'
import error404 from './pages/404/index'
import error500 from './pages/500/index'
const root = document.querySelector('#root')
root.innerHTML = `${login}`

switch (document.location.pathname) {
  case '/registration':
    root.innerHTML = `${registration}`
    break;
  case '/login':
    root.innerHTML = `${login}`
    break;
  case '/viewProfile':
    root.innerHTML = `${viewProfile}`
    break;
  case '/changeProfile':
    root.innerHTML = `${changeProfile}`
    break;
  case '/changePassword':
    root.innerHTML = `${changePassword}`
    break;
  case '/chat':
    root.innerHTML = `${chat}`
    break;
  case '/404':
    root.innerHTML = `${error404}`
    break;
  case '/500':
    root.innerHTML = `${error500}`
    break;
}