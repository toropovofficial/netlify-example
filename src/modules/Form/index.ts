import template from './index.pug';
import Block from '../../utils/block';
import './style.scss';
import Field from '../fieldNew/index';
import Button from '../../components/newButton/index';
import ErrorMessage from '../../components/error/index';
import Checkbox from '../../components/checkboxNew/index';
import { IInputItem } from '../../pages/interfaces/index';
import initEventSubmit from '../../utils/helpers';

interface IProps {
  isLogin: boolean,
  list: IInputItem[]
}

export default class Form extends Block {
  constructor(props: IProps) {
    super('form', props);
  }

  init() {
    if (Array.isArray(this.props?.list)) {
      this.props.list.forEach((item: IInputItem) => {
        const name = item.name as string;
        if (name !== undefined || name !== null) {
          this.children[name as keyof IInputItem] = new Field(item);
        }
      });
    }

    this.children.checkbox = new Checkbox({ label: 'Запомнить меня' });

    this.children.error = new ErrorMessage({});

    this.children.buttonSubmit = new Button({ label: 'Регистрация', type: 'submit' });

    initEventSubmit.call(this);
  }

  render() {
    return this.compile(template, this.props);
  }
}
