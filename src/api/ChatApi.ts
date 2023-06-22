import BaseAPI from './baseApi';

export default class ChatAPI extends BaseAPI {
  constructor() {
    super('/chats');
  }

  createChat(data: any) {
    return this.http.post('', data);
  }

  getChats() {
    return this.http.get('');
  }

  create = undefined;

  update = undefined;

  delete = undefined;

  read = undefined;
}
