import template from './index.pug';
import Block from '../../utils/block';
import Avatar from '../avatar/index';
import Counter from '../counter/index';
import Link from '../link/index';
import Icon from '../icon/index';
import './style.scss';
import image from '../../../static/icons/admin.jpg';
import settings from '../../../static/icons/settings.jpg';
import notification from '../../../static/icons/notification.jpg';
import Burger from '../Burger/index';
import { withStore } from '../../utils/Store';

interface IProps {
  name: string
  title?: string
  message: string
  count: number
  isActive?: boolean
  showBurger: boolean
}

class User extends Block {
  constructor(props: IProps) {
    super('div', props);
  }

  init() {
    this.element.classList.add('user');
    if (this.props.isActive) {
      this.element.classList.add('active-user');
      this.children.Burger = new Burger({
        events: {
          click: () => {
            console.log('open');
          },
        },
      });
    }
    this.children.avatar = new Avatar({ src: image });
    this.children.count = new Counter({ count: this.props.count });

    this.children.settingsIcon = new Icon({
      src: settings,
      events: {
        click: () => {
          $router.go('/profile');
        },
      },
    });

    this.children.notification = new Icon({
      src: notification,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

const Withuser = withStore((state) => { return { ...state.activeChat }; });

export default Withuser(User);
