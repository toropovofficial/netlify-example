import { IInputItem } from '../pages/interfaces/index';
import validation from './validation';

export default function initEventSubmit() {
  const listItem: IInputItem = {
    name: '',
    type: '',
    value: '',
    placeholder: '',
  };

  this.element?.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    if (!this.children) {
      return;
    }

    Object.keys(this.children).forEach((key) => {
      const input = this.children[key].element.querySelector('input');
      if (input) {
        listItem[key as keyof IInputItem] = input.value;
      }
    });

    const isValid = Object.keys(listItem).every((item) => {
      const value = listItem[item as keyof IInputItem] || '';
      return validation(value, item)?.status;
    });

    const errorBlock = this.children.error.element;

    if (isValid) {
      errorBlock.classList.add('hide');
      window.location.href = '/viewProfile';
    } else {
      this.children.error.setProps({ errorMessage: 'Не заполнены обязательные поля' });
      errorBlock.classList.remove('hide');
    }
  });
}
