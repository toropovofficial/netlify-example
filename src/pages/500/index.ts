import ErrorPage from '../../components/errorPage/index';

const chatPage = new ErrorPage({
  error: 500, notification: 'notification', linkHref: '/chat', linkText: 'linkText',
});

export default class Error500Page {
  getContent() {
    return chatPage.element;
  }
}
