import template from './index.pug';
import Block from '../../utils/block';
import Avatar from '../avatar/index';
import Counter from '../counter/index';
import './style.scss';

interface IProps {
  name: string
  message: string
  count: number
}

export default class User extends Block {
  constructor(props: IProps) {
    super('div', props);
  }

  init() {
    this.element.classList.add('user');
    this.children.avatar = new Avatar({});
    this.children.count = new Counter({ count: this.props.count });
  }

  render() {
    return this.compile(template, this.props);
  }
}
