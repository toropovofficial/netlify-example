interface IInputItem {
  name: string
  type: string
  value: string
  placeholder: string
}

interface IChatInfo {
  count: number
  message: string
  name: string
  time: string
}

interface IRegistartionFields {
  first_name: string
  second_name: string
  login: string
  email: string
  password: string
  phone: string
}
export { IInputItem, IChatInfo, IRegistartionFields };
