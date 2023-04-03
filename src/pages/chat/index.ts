import template from './chat.pug';
import Block from '../../utils/block';
import User from '../../components/user/index';
import Tabs from '../../modules/tabs/index';
import Chat from '../../components/chat/index';
import Search from '../../components/search/index';
import chats from './const';
import './style.scss';

class ChatPage extends Block {
  constructor() {
    super('section', {});
  }

  init() {
    if (this.element) {
      this.element.classList.add('chats');
    }
  }

  render() {
    return this.compile(template, this.props);
  }
}

export default function chatInit() {
  const chatPage = new ChatPage();
  const user = new User({ name: 'alex', message: '123', count: 4 });
  const tabs = new Tabs();
  const search = new Search({ placeholder: 'Поиск' });
  if (chatPage.element && user.element && tabs.element && search.element) {
    document.body.append(chatPage.element);
    const aside = document.querySelector('aside');

    if (!aside) {
      return;
    }

    aside.append(user.element);
    aside.append(tabs.element);
    aside.append(search.element);
    chats.forEach((item) => {
      const counter = new Chat(item);
      if (counter.element) {
        aside.append(counter.element);
      }
    });
  }
}
