export interface IMessage {
chat_id: number
content: string
file: string | null
id: number
is_read: boolean
time: string
type: string
user_id: number
}

export interface IUser {
avatar: string
display_name: string
email: string
first_name: string
login: string
phone: string
second_name: string
status?: null | string
id: number
}

export interface IChat {
content: string
id: number
time: string
user: IUser
}

export interface IActiveChat {
avatar: null | string
created_by: number
id: number
last_message: IChat
title: string
unread_count: number
}
