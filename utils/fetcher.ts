const fetcher = (url: string) =>
  fetch(url, { mode: 'cors', credentials: 'include' }).then(res => {
    if (!res.ok) throw new Error(res.statusText)
    return res.json()
  })

export default fetcher
