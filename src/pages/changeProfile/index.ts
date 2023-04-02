import template from './index.pug';
import Block from '../../utils/block';
import ProfileForm from '../../modules/newProfileForm/index';
import { registrationfields } from '../login/const';
import './style.scss';
import { IInputItem } from '../interfaces/index';
import initEventSubmit from '../../utils/helpers';

interface IProps {
  list: IInputItem[]
}

export class Profile extends Block {
  constructor(props: IProps) {
    super('section', props);
  }

  init() {
    this.element.classList.add('profile');
    this.children.form = new ProfileForm({
      ...registrationfields,
      events: {
        submit: (e: Event) => {
          e.preventDefault();
          initEventSubmit(this.children.form.children);
        },
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

export function changeProfileInit() {
  const form = new Profile({ ...registrationfields });

  if (form.element) {
    document.body.append(form.element);
  }
}
