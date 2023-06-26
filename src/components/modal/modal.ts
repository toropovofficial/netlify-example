import template from './index.pug';
import Block from '../../utils/block';
import { withStore } from '../../utils/Store';
import Icon from "../icon/index";
import close from "../../../static/icons/close.png";
import { store } from '../../utils/Store';
import './style.scss';

interface IProps {
  title: string
  content: any
  showModal: boolean
  events: any
}

class Modal extends Block {
  constructor(props: IProps) {
    super('section', props);
  }

  init() {
    this.children.content = new this.props.content()
    this.children.close = new Icon({
      src: close,
      events: {
        click: () => {
          store.set('showModal', false)
        }
      }
    })
  }

  render() {
    const pathname = $router._currentRoute._pathname
    const showCloseIcon = !(pathname === '/login' || pathname === '/sign-up')
    return this.compile(template, {...this.props, showCloseIcon});
  }
}
const WithModal = withStore((state) => {
  return { showModal: state.showModal };
});

export default WithModal(Modal);