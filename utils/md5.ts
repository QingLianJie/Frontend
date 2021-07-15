import { Md5 } from 'ts-md5/dist/md5'

export const md5 = (str: string) => {
  return Md5.hashStr(str)
}
