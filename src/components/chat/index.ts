import template from './index.pug';
import Block from '../../utils/block';
import Avatar from '../avatar/index';
import Counter from '../counter/index';
import Timer from '../timer/index';
import './style.scss';
import { IChatInfo } from '../../pages/interfaces/index';

export default class Chat extends Block {
  constructor(props: IChatInfo) {
    super('div', props);
  }

  init() {
    this.element.classList.add('chat');
    this.children.avatar = new Avatar({});
    this.children.count = new Counter({ count: this.props.count });
    this.children.timer = new Timer({ time: this.props.time });
  }

  render() {
    return this.compile(template, this.props);
  }
}
