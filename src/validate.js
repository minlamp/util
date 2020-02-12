export const isMail = mail => /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(mail)

export const isPhone = phone => /^1[3456789]\d{9}$/.test(phone)

export const checkPlatform = () => {

    if(/android/i.test(navigator.userAgent)){
  
        return 'android' //这是Android平台下浏览器
    }
  
    if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){
  
        return 'ios' //这是iOS平台下浏览器
    }
  
    if(/Linux/i.test(navigator.userAgent)){
  
        return 'Linux-browser' //这是Linux平台下浏览器
    }
  
    if(/MicroMessenger/i.test(navigator.userAgent)){
  
        return 'wexin-browser' // 微信浏览器
    }
  
    return null
}
