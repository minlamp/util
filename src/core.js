import {warn, error, noop} from './utils'

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

export const composeParams = (settings, options) => Object.assign({}, settings, options)

//自定义对象的属性和值，并返回新对象
export const iterationObj = (o, handleKey=noop, handleVal=noop) => {
    let to = Object.create(null), tk = '', tv = ''
    Object.keys(o).forEach((key, i) => {
        tk = handleKey(key)
        tv = handleVal(o[key])
        to[tk] = tv
    })

    return to
}

export const convertMapToArr = (m, option={}) => {
    let item,
    //探测尽量放在循环外，避免多次无效判断
    idName = option.id || 'id',
    labelName = option.label || 'label',
    valueName = option.value || 'value'

    return Object.keys(m).map((key, i) => {
        item = m[key]
        return {
            id: item[idName] || i,
            label: item[labelName] || item,
            value: item[valueName] || key
        }
    })
}

export const sortItemByKey = key => (a, b) => {
    let m = parseFloat(a[key]) - parseFloat(b[key])
    if (m < 0) return -1
    else if (m > 0) return 1
    else return 0
}



//把js对象安装其属性值拼接成字符串
export const paramToStr = o => {
    if (typeof o !== 'object' && typeof o !== 'function'){
        return o.toString()
    }
    return Object.keys(o).map(key => o[key].toString()).join('-')
}


// 下划线转换驼峰
export const toHump = name => {
    return name.replace(/\_(\w)/g, (all, letter) => {
        return letter.toUpperCase()
    });
}
// 驼峰转换下划线
export const toLine = (name) => {
  return name.replace(/([A-Z])/g,"_$1").toLowerCase()
}

/**
 * 把类似下面的map的key和value互换位置
 *  {
        1: '完成'
*   }
    => 
    {
        '完成': 1
    }
*/
export const exchangeValueAndKey = m => {
    if (typeof m !== 'object'){
        throw '[exchangeValueAndKey] param is object'
    }

    let o = Object.create(null)
    Object.keys(m).forEach(key => {
        o[m[key]] = key
    })

    return  o
}
