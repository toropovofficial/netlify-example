import template from './index.pug';
import Block from '../../utils/block';
import './style.scss';

interface IProps {
  events?: any
}

export default class Burger extends Block {
  constructor(props?: IProps) {
    super('div', props);
  }

  init() {
    this.element.classList.add('burger');
  }

  render() {
    return this.compile(template, this.props);
  }
}
