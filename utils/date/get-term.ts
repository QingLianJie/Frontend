export const getTerm = () => {
  const year = new Date().getFullYear()
  const month = new Date().getMonth() + 1

  if (month <= 2) {
    return `${year - 1}-${year}-1`
  } else if (month >= 9) {
    return `${year}-${year + 1}-1`
  } else {
    return `${year - 1}-${year}-2`
  }
}
