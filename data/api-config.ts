const defaultApi = 'https://api.qinglianjie.cn'

const baseApi =
  typeof window !== 'undefined' && window.localStorage.getItem('BASE_URL')

// API 的前缀地址
export const BASE_API_URL =
  baseApi || process.env.NEXT_PUBLIC_BASE_API_URL || defaultApi

// 头像图片的前缀地址
export const BASE_AVATAR_URL =
  baseApi || process.env.NEXT_PUBLIC_BASE_AVATAR_URL || defaultApi
