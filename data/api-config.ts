/*
  可以在这个文件里修改 API 地址，
  每个变量有两个地址，
  分别为 开发环境 和 生产环境 下的 API 地址，
  请按需修改。
*/

// API 的前缀地址
export const BASE_API_URL =
  process.env.NODE_ENV === 'development'
    ? 'https://test.lifeni.life'
    : 'https://api.qinglianjie.cn'

// 头像图片的前缀地址
export const BASE_AVATAR_URL =
  process.env.NODE_ENV === 'development'
    ? 'https://test.lifeni.life'
    : 'https://api.qinglianjie.cn'
