import template from './index.pug';
import Block from '../../utils/block';
import './style.scss';

interface IProps {
  title: string
}

export default class Modal extends Block {
  constructor(props: IProps) {
    super('section', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
