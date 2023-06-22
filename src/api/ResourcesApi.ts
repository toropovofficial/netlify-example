import BaseAPI from './baseApi';

export interface User {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
}

export class ResourcesApi extends BaseAPI {
  constructor() {
    super('/resources');
  }

  getAvatar(id: string) {
    return this.http.get<User>(`/${id}`);
  }

  create = undefined;

  update = undefined;

  delete = undefined;

  read = undefined;
}
