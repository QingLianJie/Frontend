export const sleep = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms))

export const decodeBase64 = (str: string) => {
  if (typeof window !== 'undefined') return window.atob(str)
  return Buffer.from(str, 'base64').toString('utf8')
}

export const encodeBase64 = (str: string) => {
  if (typeof window !== 'undefined') return window.btoa(str)
  return Buffer.from(str).toString('base64')
}

export const NameRegex = /^.{3,16}$/
export const PasswordRegex = /^.*(?=.{8,24})(?=.*[A-Za-z!@#$%^&*?]).*$/
export const EmailRegex =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export const PasswordRegexText = '^.*(?=.{8,24})(?=.*[A-Za-z!@#$%^&*?]).*$'

export const listIt = (arr: string[]) => {
  // VSCode 提示 Intl 没有 ListFormat 类型，明明 Node 已经支持了
  // @ts-ignore
  const intl = new Intl.ListFormat('zh-CN', { style: 'long' })
  return intl.format(arr)
}
