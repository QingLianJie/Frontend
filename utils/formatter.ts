export const dateFormatter = (date: string): string => {
  try {
    const obj = new Date(date)
    return `${obj.getFullYear()} 年 ${
      obj.getMonth() + 1
    } 月 ${obj.getDate()} 日 - ${obj.toLocaleTimeString('zh-hans', {
      hour12: false,
    })}`
  } catch (error) {
    console.log(error)
    return ''
  }
}
