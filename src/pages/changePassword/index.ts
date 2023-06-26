import template from './index.pug';
import Block from '../../utils/block';
import ProfileForm from '../../modules/newProfileForm/index';
import { passwordFields } from '../login/const';
import './style.scss';
import { IInputItem } from '../interfaces/index';
import { initEventSubmit } from '../../utils/helpers';
import { store } from '../../utils/Store';
import ProfileController from '../../controllers/ProfileController';
import AuthController from '../../controllers/AuthController';

interface IProps {
  list: IInputItem[];
}

export class ChangePassword extends Block {
  constructor(props: IProps) {
    super('section', props);
  }

  init(): void {
    const { user } = store.getState();

    this.element.classList.add('profile');
    this.children.form = new ProfileForm({
      ...passwordFields,
      changePassword: true,
      events: {
        submit: (e: Event) => {
          e.preventDefault();
          const result = initEventSubmit(
            this.children.form.children,
            'password',
          );
          if (result) {
            const { fields, isValid } = result
            if (isValid) {
              ProfileController.changePassword(fields);
              AuthController.fetchUser();
            } else {
              this.children.form.children.error.setProps({ errorMessage: 'Не заполнены обязательные поля' });
              this.children.form.children.error.element.classList.remove('hide');
            }
          }
        },
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

export default class ChangePasswordPage {
  getContent() {
    const changePassword = new ChangePassword({ ...passwordFields });
    return changePassword.element;
  }
}
