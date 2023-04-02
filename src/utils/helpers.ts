import { IInputItem } from '../pages/interfaces/index';
import validation from './validation';

export default function initEventSubmit(children: any) {
  const listItem: IInputItem = {
    name: '',
    type: '',
    value: '',
    placeholder: '',
  };

  if (!children) {
    return;
  }

  Object.keys(children).forEach((key) => {
    const input = children[key].element.querySelector('input');
    if (input) {
      listItem[key as keyof IInputItem] = input.value;
    }
  });

  const isValid = Object.keys(listItem).every((item) => {
    const value = listItem[item as keyof IInputItem] || '';
    return validation(value, item)?.status;
  });

  const errorBlock = children.error.element;

  if (isValid) {
    errorBlock.classList.add('hide');
    window.location.href = '/viewProfile';
  } else {
    children.error.setProps({ errorMessage: 'Не заполнены обязательные поля' });
    errorBlock.classList.remove('hide');
  }
}
