import template from './index.pug';
import Block from '../../utils/block';
import User from '../../components/user/index';
import Tabs from '../../modules/tabs/index';
import Chat from '../../components/chat/index';
import Search from '../../components/search/index';
import chats from './const';
import Actions from '../../components/Actions/index';
import Action from '../../components/Action/index';
import { store } from '../../utils/Store';
import Modal from '../../components/modal/modal';
import ChatsList from '../../modules/Chats/index';
import './style.scss';

export default class MessengerPage extends Block {
  constructor() {
    super('section', {});
  }

  init() {
    if (this.element) {
      this.element.classList.add('chats');
    }
    const { chats } = store.state;
    let activeChat = 1;

    let showActions = false;
    let showModal = false;
    this.children.chats = [];

    this.children.user = new User({
      name: 'alex',
      message: '123',
      count: 4,
    });

    this.children.tabs = new Tabs();

    this.children.search = new Search({ placeholder: 'Поиск' });

    this.children.chats = new ChatsList({
      chats,
      events: {
        click: (e) => {
          const id = e.target.getAttribute('id');
          const { chats } = store.state;
          activeChat = chats.find((item) => { return item.id === +id; });
          this.children.activeUserInfo.setProps({ ...activeChat });
        },
      },
    });

    this.children.actions = new Actions({
      showActions,
      events: {
        click: (e) => {
          showModal = !showModal;
          this.children.modal.setProps({ showModal: !showModal });
        },
      },
    });

    this.children.modal = new Modal({
      title: 'Добавить пользователя',
      content: Action,
      showModal,
      events: {
        submit: (e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const name = formData.get('user-name');
        },
      },
    });

    // chats.forEach((chat, id) => {
    //   this.children[`chat${chat.id}`] = new Chat({
    //     chat,
    //     events: {
    //       click: (e) => {
    //         activeChat = chat;
    //         store.set(
    //           'activeChat',
    //           chat,
    //         );
    //       },
    //     },
    //   });
    // });

    this.children.activeUserInfo = new User({
      title: activeChat.title,
      message: '123',
      count: 4,
      isActive: true,
      events: {
        click: (e) => {
          const { target } = e;
          if (
            target.classList.contains('burger')
            || target.tagName === 'SPAN'
          ) {
            showActions = !showActions;
            this.children.actions.setProps({ showActions });
          }
        },
      },
    });
  }

  render() {
    return this.compile(template, this.chats);
  }
}

// export default class Chats {
//   getContent() {
//     const chatPage = new ChatPage();
//     const aside = chatPage.element.querySelector('aside');
//     const user = new User({ name: 'alex', message: '123', count: 4 });
//     const tabs = new Tabs();
//     const search = new Search({ placeholder: 'Поиск' });
//     if (
//       chatPage.element
//       && user.element
//       && tabs.element
//       && search.element
//       && aside
//     ) {
//       aside.append(user.element);
//       aside.append(tabs.element);
//       aside.append(search.element);
//       chats.forEach((item) => {
//         const counter = new Chat(item);
//         if (counter.element) {
//           aside.append(counter.element);
//         }
//       });
//     }
//     return chatPage.element;
//   }
// }
