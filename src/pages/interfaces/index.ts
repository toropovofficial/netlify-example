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

export { IInputItem, IChatInfo };
