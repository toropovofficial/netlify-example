import template from './index.pug';
import Block from '../../utils/block';
import Input from '../../components/newInput/index';
import { registrationfields } from '../login/const';
import './style.scss';
import { IInputItem } from '../interfaces/index';

interface IProps {
  list: IInputItem[]
  view?: boolean
}

export class ProfileForm extends Block {
  constructor(props: IProps) {
    super('section', props);
  }

  init(): void {
    if (this.element) {
      this.element.classList.add('profile');
    }

    if (Array.isArray(this.props?.list)) {
      this.props.list.forEach((item: IInputItem) => {
        this.children[item.name] = new Input({ ...item, disabled: true });
      });
    }

    this.children.input = new Input({ name: 'login', value: '', placeholder: 'login' });
  }

  render() {
    return this.compile(template, this.props);
  }
}

export function viewProfileInit() {
  const form = new ProfileForm({ ...registrationfields, view: true });
  if (form.element) {
    document.body.append(form.element);
  }
}
