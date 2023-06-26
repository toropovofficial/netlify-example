import template from './index.pug';
import Block from '../../utils/block';
import User from '../../components/user/index';
import Tabs from '../../modules/tabs/index';
import Chat from '../../modules/Chat/index';
import Search from '../../components/search/index';
import Actions from '../../components/Actions/index';
import Action from '../../components/Action/index';
import { store } from '../../utils/Store';
import Modal from '../../components/modal/modal';
import ChatsList from '../../modules/Chats/index';
import ChatController from "../../controllers/ChatController";
import './style.scss';
import { IActiveChat } from "../../utils/types";

export default class MessengerPage extends Block {
  constructor() {
    super('section', {});
  }

  init() {
    if (this.element) {
      this.element.classList.add('chats');
    }
    const { chats } = store.state;
    let activeChat: IActiveChat | null = null;

    let showActionsModal = false
    let actionsModalTitle = 'Добавить чат'

    this.children.user = new User({
      name: 'alex',
      message: 'Онлайн',
      count: 4,
      events: {
        click: (e: Event) => {
          const target = e.target as HTMLFormElement
          if (target.tagName === 'IMG' && target.parentElement?.parentElement?.classList.contains('add__btn')) {
            store.set('showModal', true)
          }
        }
      }
    });

    this.children.tabs = new Tabs();

    this.children.search = new Search({ placeholder: 'Поиск' });

    this.children.chats = new ChatsList({
      chats,
      events: {
        click: async (e: Event) => {
          const target = e.target as HTMLInputElement 
          const id = target.getAttribute('id');

          if (!id) {
            return
          }

          const { chats } = store.state;
          activeChat = chats.find((item: IActiveChat) => { return item.id === + id; });
          if (activeChat) {
            store.set('activeChat', activeChat)
            await ChatController.connectionChat(activeChat.id)
          }
        },
      },
    });

    this.children.modal = new Modal({
      title: actionsModalTitle,
      content: Action,
      events: {
        submit: (e: Event) => {
          const target = e.target as HTMLFormElement
          const formData = new FormData(target);
          const name = formData.get('user-name');
          ChatController.addUserToChat({
            users: [
              name
            ],
            chatId: store.state.activeChat.id
          })
        },
      },
    });

    this.children.chatModal = new Modal({
      title: 'Добавить чат',
      content: Action,
      events: {
        submit: (e: Event) => {
          e.preventDefault();
          const target = e.target as HTMLFormElement
          const formData = new FormData(target);
          const name = formData.get('user-name');
          if (name && typeof name === 'string') {
            ChatController.create({title: name})
          }
        },
      },
    });

    this.children.actionsModal = new Actions({
      show: showActionsModal, 
      events: {
        click: (e: Event) => {
          const target = e.target as HTMLInputElement
          if (target.classList.contains('add') || target.parentElement?.parentElement?.classList.contains('add')) {
            store.set('showModal', true)
            actionsModalTitle = 'Добавить пользователя'

            this.children.chatModal.setProps({title: actionsModalTitle});
          } else {
            store.set('showModal', true)
            actionsModalTitle = 'Удалить пользователя'
            this.children.chatModal.setProps({title: actionsModalTitle});
          }
          showActionsModal = !showActionsModal
          this.children.actionsModal.setProps({show: showActionsModal});
        }
      }
    })

    this.children.chat = new Chat({})

    this.children.activeUserInfo = new User({
      title: (activeChat as unknown as IActiveChat).title,
      message: '',
      count: 4,
      isActive: true,
      events: {
        click: (e: Event) => {
          const target = e.target as HTMLFormElement
          if (
            target.tagName === 'IMG' && !target.parentElement?.classList.contains('avatar')
          ) {
            showActionsModal = !showActionsModal;
            this.children.actionsModal.setProps({show: showActionsModal});
          }
        },
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
