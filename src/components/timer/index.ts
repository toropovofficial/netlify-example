import template from './index.pug';
import Block from '../../utils/block';

interface IProps {
  time: string
}

export default class Timer extends Block {
  constructor(props: IProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
