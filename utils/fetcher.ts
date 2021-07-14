interface FetchError extends Error {
  info: any
  status: number
}

const fetcher = (url: string) =>
  fetch(url, { mode: 'cors', credentials: 'include' }).then(async res => {
    if (!res.ok) {
      const error = new Error('Fetch Error') as FetchError
      error.info = await res.json()
      error.status = res.status
      throw error
    }
    return res.json()
  })

export default fetcher
