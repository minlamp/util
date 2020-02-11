export const isMail = mail => /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(mail)

export const isPhone = phone => /^1[3456789]\d{9}$/.test(phone)
