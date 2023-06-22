const registrationfields = {
  list: [
    {
      name: "login",
      type: "text",
      value: "",
      placeholder: "логин",
    },
    {
      name: "password",
      type: "password",
      value: "",
      placeholder: "пароль",
    },
    {
      name: "phone",
      type: "phone",
      value: "",
      placeholder: "телефон",
    },
    {
      name: "email",
      type: "email",
      value: "",
      placeholder: "емаил",
    },
    {
      name: "first_name",
      type: "text",
      value: "",
      placeholder: "имя",
    },
    {
      name: "second_name",
      type: "text",
      value: "",
      placeholder: "фамилия",
    },
  ],
};

export const profileFields = {
  list: [
    {
      name: "email",
      type: "email",
      value: "",
      placeholder: "Почта",
    },
    {
      name: "login",
      type: "text",
      value: "",
      placeholder: "логин",
    },
    {
      name: "first_name",
      type: "text",
      value: "",
      placeholder: "имя",
    },
    {
      name: "second_name",
      type: "text",
      value: "",
      placeholder: "фамилия",
    },
    {
      name: "display_name",
      type: "text",
      value: "",
      placeholder: "Имя в чате",
    },
    {
      name: "phone",
      type: "phone",
      value: "",
      placeholder: "телефон",
    },
  ],
};

const loginFields = {
  list: [
    {
      name: "login",
      type: "login",
      value: "",
      placeholder: "логин",
    },
    {
      name: "password",
      type: "password",
      value: "",
      placeholder: "пароль",
    },
  ],
};

const passwordFields = {
  list: [
    {
      name: "oldPassword",
      type: "password",
      value: "",
      placeholder: "Старый пароль",
    },
    {
      name: "newPassword",
      type: "password",
      value: "",
      placeholder: "Новый пароль",
    },
    {
      name: "repeatPassword",
      type: "password",
      value: "",
      placeholder: "Повторите пароль",
    },
  ],
};

export { registrationfields, loginFields, passwordFields };
