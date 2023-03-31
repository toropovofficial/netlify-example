import template from './index.pug';
import Block from '../../utils/block';
import ProfileForm from '../../modules/newProfileForm/index';
import { passwordFields } from '../login/const';
import './style.scss';
import { IInputItem } from '../interfaces/index';

interface IProps {
  list: IInputItem[]
}

export class Profile extends Block {
  constructor(props: IProps) {
    super('section', props);
  }

  init(): void {
    this.element.classList.add('profile');
    this.children.form = new ProfileForm({ ...passwordFields, changePassword: true });
  }

  render() {
    return this.compile(template, this.props);
  }
}

export function changePasswordInit() {
  const form = new Profile({ ...passwordFields });

  if (form.element) {
    document.body.append(form.element);
  }
}
