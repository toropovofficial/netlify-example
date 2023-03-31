import template from './index.pug';
import Block from '../../utils/block';

interface IProps {
  errorMessage?: string
}
export default class ErrorMessage extends Block {
  constructor(props: IProps) {
    super('div', props);
  }

  init() {
    this.element?.classList.add('hide');
    this.element?.classList.add('error');
  }

  render() {
    return this.compile(template, this.props);
  }
}
