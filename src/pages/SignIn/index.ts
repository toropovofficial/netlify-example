import Form from '../../modules/Form/index';
import Modal from '../../components/modal/modal';
import { loginFields } from './const';
import { initEventSubmit } from '../../utils/helpers';
import Block from '../../utils/block';
import template from './index.pug';
import AuthController from '../../controllers/AuthController';

export class Login extends Block {
  constructor() {
    super('section', {});
  }

  init() {
    this.children.form = new Form({
      label: 'Авторизоваться',
      isLogin: true,
      list: loginFields.list,
      events: {
        submit: (e: Event) => {
          e.preventDefault();
          const result = initEventSubmit(this.children.form.children, 'login');
          if (!result) {
            return;
          }
          const { fields, isValid } = result;
          if (isValid) {
            AuthController.signin(fields);
          } else {
            this.children.form.children.error.setProps({ errorMessage: 'Не заполнены обязательные поля' });
            this.children.form.children.error.element.classList.remove('hide');
          }
        },
      },
    });
  }

  render() {
    return this.compile(template, {});
  }
}

export default class LoginPage {
  getContent() {
    const loginModal = new Modal({ title: 'Вход', Content: Login });
    return loginModal.element;
  }
}
