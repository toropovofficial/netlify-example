import template from './index.pug';
import Block from '../../utils/block';
import './style.scss';

interface IProps {
  events?: any
  showActions: boolean
}

export default class Actions extends Block {
  constructor(props?: IProps) {
    super('div', props);
  }

  init() {
    this.element.classList.add('actions');
    if (this.props.showActions) {
      this.element.classList.remove('hide');
    } else {
      this.element.classList.add('hide');
    }
  }

  componentDidUpdate() {
    if (this.props.showActions) {
      this.element.classList.remove('hide');
    } else {
      this.element.classList.add('hide');
    }
  }

  render() {
    return this.compile(template, this.props);
  }
}
