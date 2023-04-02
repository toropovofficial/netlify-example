import Form from '../../modules/Form/index';
import Modal from '../../components/modal/modal';
import { registrationfields } from '../login/const';
import initEventSubmit from '../../utils/helpers';
import Block from '../../utils/block';
import template from './index.pug';

export class Registartion extends Block {
  constructor() {
    super('section', {});
  }

  init() {
    this.children.form = new Form({
      isLogin: false,
      list: registrationfields.list,
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

export default function registrationInit() {
  const loginFrom = new Registartion();
  const loginModal = new Modal({ title: 'Вход' });

  if (loginModal.element && loginFrom.element) {
    document.body.append(loginModal.element);
    const wrapper = document.querySelector('.modal__wrapper');
    wrapper?.append(loginFrom.element);
  }
}
