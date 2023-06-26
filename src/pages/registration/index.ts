import Form from '../../modules/Form/index';
import { registrationfields } from '../login/const';
import { initEventSubmit } from '../../utils/helpers';
import Block from '../../utils/block';
import template from './index.pug';
import AuthController from '../../controllers/AuthController';

export class Registartion extends Block {
  constructor() {
    super('section', {});
  }

  init() {
    this.children.form = new Form({
      label: 'Зарегистрироваться',
      isLogin: false,
      list: registrationfields.list,
      events: {
        submit: (e: Event) => {
          e.preventDefault();
          const result = initEventSubmit(this.children.form.children, 'reg');
          if (!result) {
            return
          }
          const { fields, isValid } = result
          if (isValid) {
            AuthController.signup(fields);
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

export const RegistartionPage = Registartion;
