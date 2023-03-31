import template from './index.pug';
import Block from '../../utils/block';
import FieldNew from '../profileField/index';
import Button from '../../components/newButton/index';
import ErrorMessage from '../../components/error/index';
import './style.scss';
import { IInputItem } from '../../pages/interfaces/index';
import initEventSubmit from '../../utils/helpers';

interface IProps {
  list: IInputItem[]
  changePassword?: boolean
}

export default class profileForm extends Block {
  constructor(props: IProps) {
    super('form', props);
  }

  init(): void {
    if (Array.isArray(this.props?.list)) {
      this.props.list.forEach((item: IInputItem) => {
        const name = item.name as string;
        this.children[name as keyof IInputItem] = new FieldNew(item);
      });
    }

    this.children.saveButton = new Button({ label: 'save', type: 'submit' });
    this.children.error = new ErrorMessage({});

    initEventSubmit.call(this);
  }

  render() {
    return this.compile(template, this.props);
  }
}
