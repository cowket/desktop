import { DateEntity, Nullable } from './util'

export type CowketUser = {
  uuid: string
  email: string
  avatar: string
  socket_id: Nullable<string>
} & DateEntity
