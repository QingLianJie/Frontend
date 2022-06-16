import { atom } from 'jotai'

export const atomLocal = <T>(key: string, initialValue: T) => {
  const baseAtom = atom(initialValue)
  const derivedAtom = atom(
    get => get(baseAtom),
    (get, set, update) => {
      const nextValue =
        typeof update === 'function' ? update(get(baseAtom)) : update
      set(baseAtom, nextValue)
      localStorage.setItem(key, JSON.stringify(nextValue))
    }
  )
  return derivedAtom
}
