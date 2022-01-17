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
