import ErrorPage from '../../components/errorPage/index';

export default function error500Init() {
  const chatPage = new ErrorPage({
    error: 500, notification: 'notification', linkHref: '/chat', linkText: 'linkText',
  });

  if (chatPage.element) {
    document.body.append(chatPage.element);
  }
}
