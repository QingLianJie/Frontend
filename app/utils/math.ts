import MD5 from 'crypto-js/md5'

export const calcRate = (number: number) => `${(number * 100).toFixed(2)}%`

export const calcEmailMd5 = (email: string) =>
  MD5(email.toLowerCase()).toString()
