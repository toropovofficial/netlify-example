import template from './index.pug';
import Block from '../../utils/block';

interface IProps {
  text: string
  events: any
}
export default class Link extends Block {
  constructor(props: IProps) {
    super('span', props);
    this.element.classList.add('link');
  }

  render() {
    return this.compile(template, this.props);
  }
}
