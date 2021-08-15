export const BASE_API_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost'
    : 'https://api.qinglianjie.cn'

export const BASE_AVATAR_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost'
    : 'https://api.qinglianjie.cn'
