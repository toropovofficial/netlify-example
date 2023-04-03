import template from './index.pug';
import Block from '../../utils/block';
import './style.scss';

interface IProps {
  count: number
}

export default class Counter extends Block {
  constructor(props: IProps) {
    super('div', props);
  }

  init() {
    this.element.classList.add('counter');
  }

  render() {
    return this.compile(template, this.props);
  }
}
