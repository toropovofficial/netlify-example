import Form from '../../modules/Form/index';
import Modal from '../../components/modal/modal';
import { registrationfields } from '../login/const';

export default function registrationInit() {
  const loginFrom = new Form({ isLogin: false, list: registrationfields.list });
  const loginModal = new Modal({ title: 'Вход' });

  if (loginModal.element && loginFrom.element) {
    document.body.append(loginModal.element);
    const wrapper = document.querySelector('.modal__wrapper');
    wrapper?.append(loginFrom.element);
  }
}
