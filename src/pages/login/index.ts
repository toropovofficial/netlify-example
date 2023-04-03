import Form from '../../modules/Form/index';
import Modal from '../../components/modal/modal';
import { loginFields } from './const';
import initEventSubmit from '../../utils/helpers';
import Block from '../../utils/block';
import template from './index.pug';

export class Login extends Block {
  constructor() {
    super('section', {});
  }

  init() {
    this.children.form = new Form({
      isLogin: true,
      list: loginFields.list,
      events: {
        submit: (e: Event) => {
          e.preventDefault();
          initEventSubmit(this.children.form.children);
        },
      },
    });
  }

  render() {
    return this.compile(template, {});
  }
}

export default function loginInit() {
  const loginFrom = new Login();

  const loginModal = new Modal({ title: 'Вход' });

  if (loginModal.element && loginFrom.element) {
    document.body.append(loginModal.element);
    const wrapper = document.querySelector('.modal__wrapper');
    wrapper?.append(loginFrom.element);
  }
}
