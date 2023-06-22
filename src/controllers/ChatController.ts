import ChatAPI from '../api/ChatApi';
import { store } from '../utils/Store';

class ChatController {
  private api: any;

  constructor() {
    this.api = new ChatAPI();
  }

  async create(data: any) {
    this.api
      .createChat(data)
      .then(async (x) => {
        console.log(x);
      })
      .catch(() => {});
  }

  async getChats() {
    this.api.getChats()
      .then(async (chats) => {
        store.set('chats', chats);
      })
      .catch(() => {});
  }
}

export default new ChatController();
