export const nameRegex = /^[\.a-zA-Z0-9_-]{1,16}$/
export const passwordRegex = /^.*(?=.{8,24})(?=.*[A-Za-z!@#$%^&*?]).*$/
export const emailRegex =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/