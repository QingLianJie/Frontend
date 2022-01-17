import { decodeBase64, encodeBase64 } from './system'

export const decodeHEUAccount = (account: string | null) => {
  if (!account) return null
  const [id, ...password] = decodeBase64(account).split('|')
  return { id, password: password.join('') }
}

export const encodeHEUAccount = (id: string, password: string) =>
  encodeBase64(`${id}|${password}`)
