import template from './index.pug';
import Block from '../../utils/block';
import './style.scss';

interface IProps {
  src: string
  alt?: string
  events?: {
    click: () => void
  }
}
export default class Link extends Block {
  constructor(props: IProps) {
    super('div', props);
    this.element.classList.add('image');
  }

  render() {
    return this.compile(template, this.props);
  }
}
