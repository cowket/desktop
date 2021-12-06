import { CowketUser } from './user'
import { DateEntity } from './util'

export type CowketTeam = {
  uuid: string
  owner: CowketUser
  name: string
  avatar: string
  is_private: boolean
  description: string
} & DateEntity
