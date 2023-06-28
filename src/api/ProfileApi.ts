import BaseAPI from './baseApi';

export interface ProfileData {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
}

export interface getUserData {
  id: string;
}

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

export class ProfileAPI extends BaseAPI {
  constructor() {
    super('/user');
  }

  updateProfile(data: ProfileData) {
    return this.http.put('/profile', data);
  }

  getUser(id: number) {
    return this.http.get<User>(`/${id}`);
  }

  updateAvatar(data: any) {
    return this.http.put('/profile/avatar', data);
  }

  changePassword(data: any) {
    return this.http.put('/password', data);
  }

  create = undefined;

  update = undefined;

  delete = undefined;

  read = undefined;
}
