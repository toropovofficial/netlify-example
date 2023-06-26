import { ChatAPI, IAdded } from '../api/ChatApi';
import { IChat } from '../utils/interfaces';
import { store } from '../utils/Store';

interface IToken {
  token: string
}

interface createData {
  title: string
}

class ChatController {
  private api: any;

  constructor() {
    this.api = new ChatAPI();
  }

  async create(data: createData) {
    this.api
      .createChat(data)
      .then(async () => {
        await this.getChats();
      })
      .catch(() => {});
  }

  async getChats() {
    this.api.getChats()
      .then(async (chats: IChat[]) => {
        store.set('chats', chats);
      })
      .catch(() => {});
  }

  async connectionChat(id: number | string) {
    this.api.connectionChat(id)
      .then((res: IToken) => {
        store.set('token', res.token);
      })
      .catch(() => {});
  }

  async addUserToChat(data: IAdded) {
    this.api.add(data)
      .catch((x: any) => {
        throw new Error(x);
      });
  }
}

export default new ChatController();
