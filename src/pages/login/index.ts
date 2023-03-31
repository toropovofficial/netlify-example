import Form from '../../modules/Form/index';
import Modal from '../../components/modal/modal';
import { loginFields } from './const';

export default function loginInit() {
  const loginFrom = new Form({
    isLogin: true,
    list: loginFields.list,
  });

  const loginModal = new Modal({ title: 'Вход' });

  if (loginModal.element && loginFrom.element) {
    document.body.append(loginModal.element);
    const wrapper = document.querySelector('.modal__wrapper');
    wrapper?.append(loginFrom.element);
  }
}
