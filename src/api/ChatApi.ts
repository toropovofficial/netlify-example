import BaseAPI from './baseApi';

export interface IAdded{
  users:(FormDataEntryValue | null | number)[],
  chatId: number
}

export interface ICreate {
  title: string
}

export interface IDelete {
  chatId: number
}

export class ChatAPI extends BaseAPI {
  constructor() {
    super('/chats');
  }

  createChat(data: ICreate) {
    return this.http.post('', data);
  }

  deleteChat(data: IDelete) {
    return this.http.delete('', data);
  }

  connectionChat(id: number | string) {
    return this.http.post(`/token/${id}`);
  }

  getChats() {
    return this.http.get('');
  }

  add(data: IAdded) {
    return this.http.put('/users', data);
  }

  remove(data: IAdded) {
    return this.http.delete('/users', data);
  }

  create = undefined;

  update = undefined;

  delete = undefined;

  read = undefined;
}
