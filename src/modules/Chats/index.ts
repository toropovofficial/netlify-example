import template from './index.pug';
import Block from '../../utils/block';
import { withStore } from '../../utils/Store';
import './style.scss';

class Chats extends Block {
  constructor(props: any) {
    super('div', props);
  }

  init() {
    this.element.classList.add('Chats');
    console.log(this.props.chats)
  }

  render() {
    return this.compile(template, this.props);
  }
}

const WithChats = withStore((state) => {
  return { chats: state.chats };
});

export default WithChats(Chats);
