export const memoryRequestData = (fn) => {
    if (typeof fn !== 'function'){
        throw '[memoryRequestData] first param must be func!'
    }

    let cache = Object.create(null)

    return (...args) => {
        let key = args.map(arg => paramToStr(arg)).join('-')
        if (cache[key]){
            return Promise.resolve(cache[key])
        }
        return fn(...args).then(data => {
            return cache[key] = data
        })
    }
}