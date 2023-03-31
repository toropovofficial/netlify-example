import ErrorPage from '../../components/errorPage/index';

export default function error404Init() {
  const chatPage = new ErrorPage({
    error: 400, notification: 'notification', linkHref: '/chat', linkText: 'linkText',
  });

  if (chatPage.element) {
    document.body.append(chatPage.element);
  }
}
