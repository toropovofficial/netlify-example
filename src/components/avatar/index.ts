import template from './index.pug';
import Block from '../../utils/block';
import './style.scss';

interface IProps {
  src?: string
  alt?: string
}

export default class Avatar extends Block {
  constructor(props: IProps) {
    super('div', props);
  }

  init() {
    this.element.classList.add('avatar');

    if (!this.props.src) {
      this.element.classList.add('empty');
    }
  }

  render() {
    return this.compile(template, this.props);
  }
}
