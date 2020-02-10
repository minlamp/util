import {warn, error} from './common'

export const noop = () => {}

//节流
export const throttle = (fn, duration=50, ctx) => {
    let timer = null

    return (...args) => {
        if (timer) return

        timer = setTimeout(() => {
            clearTimeout(timer)
            timer = null
            ctx ? fn.apply(ctx, args) : fn(...args)
        }, duration)
    }
}

// 防抖
export const debounce = (fn, delay=300, ctx) => {
    let timer = null

    return (...args) => {
        if (timer) clearTimeout(timer)

        timer = setTimeout(() => {
            clearTimeout(timer)
            timer = null
            ctx ? fn.apply(ctx, args) : fn(...args)
        }, delay)
    }
}

//给数字左边补零
export const padLeft = (num, n=1) => {
    if (typeof num !== 'number' || typeof n !== 'number') return new Error('[padLeft] 参数必须为数字类型')
    while(n > 0) {
        num = '0' + num
        n--
    }
    return num
}

// 当数字小于10时补零
export const padLeftOneZero = (num) => {
    if (num < 10)
        return padLeft(num)
    return num
}

export const isMail = mail => /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(mail)

export const isPhone = phone => /^1[3456789]\d{9}$/.test(phone)
