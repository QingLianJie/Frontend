export const statusMap: {
  [key in ResponseStatus]: 'success' | 'error' | 'warning'
} = {
  可以: 'success',
  不行: 'error',
  有问题: 'warning',
}
