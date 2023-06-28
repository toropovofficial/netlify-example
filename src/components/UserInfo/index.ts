import template from './index.pug';
import Block from '../../utils/block';
import Avatar from '../avatar/index';
import Counter from '../counter/index';
import Timer from '../timer/index';
import './style.scss';
import image from '../../../static/icons/avatar.jpg';
import { withStore } from '../../utils/Store';

interface IProps {
  chat: {
    name: string
    message: string
    time: string
    count: number
    id: number
  }
  events?: any
}

class UserInfo extends Block {
  constructor(props: IProps) {
    super('div', props);
  }

  init() {
    if (this.props.id === this.props.activeChat.id) {
      this.element.classList.add('active');
    }

    this.element.classList.add('chat');
    this.children.avatar = new Avatar({ src: image });
    this.children.count = new Counter({ count: this.props.unread_count });
    this.children.timer = new Timer({ time: this.props.created_by });
  }

  componentDidUpdate() {
    if (this.props.chat.id === this.props.activeChat.id) {
      this.element.classList.add('active');
    } else {
      this.element.classList.remove('active');
    }

    return true;
  }

  render() {
    return this.compile(template, this.props);
  }
}

const WithUserInfo = withStore((state) => {
  return { ...state };
});

export default WithUserInfo(UserInfo);
