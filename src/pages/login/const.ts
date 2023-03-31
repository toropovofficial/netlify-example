const registrationfields = {
  list: [
    {
      name: 'login', type: 'text', value: '', placeholder: 'логин',
    },
    {
      name: 'password', type: 'password', value: '', placeholder: 'пароль',
    },
    {
      name: 'phone', type: 'phone', value: '', placeholder: 'телефон',
    },
    {
      name: 'email', type: 'email', value: '', placeholder: 'емаил',
    },
    {
      name: 'first_name', type: 'text', value: '', placeholder: 'имя',
    },
    {
      name: 'second_name', type: 'text', value: '', placeholder: 'фамилия',
    },
  ],
};

const loginFields = {
  list: [
    {
      name: 'login', type: 'login', value: '1', placeholder: 'логин',
    },
    {
      name: 'password', type: 'password', value: '2', placeholder: 'пароль',
    },
  ],
};

const passwordFields = {
  list: [
    {
      name: 'oldpassword', type: 'password', value: '2', placeholder: 'Старый пароль',
    },
    {
      name: 'newPassword', type: 'password', value: '2', placeholder: 'Новый  пароль',
    },
    {
      name: 'repeatPassword', type: 'password', value: '2', placeholder: 'Повторите пароль',
    },
  ],
};

export { registrationfields, loginFields, passwordFields };
