import template from './index.pug';
import Block from '../../utils/block';
import './style.scss';

interface IProps {
  title: string
  content: any
  showModal: boolean
  events: any
}

export default class Modal extends Block {
  constructor(props: IProps) {
    super('section', props);
  }

  init() {
    this.children.content = new this.props.content()
  }

  render() {
    return this.compile(template, this.props);
  }
}
