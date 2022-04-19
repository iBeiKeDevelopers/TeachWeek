const termConfig = require('./var')
console.log(termConfig)
termConfig.start = new Date(termConfig.start)
termConfig.rest = termConfig.rest.map(i => format(i))
termConfig.skip = termConfig.skip.map(i => {
    return new Date(i)
})

const tmp = {}
for (let i of Object.keys(termConfig.change)) {
    tmp[format(i)] = format(termConfig.change[i])
}
termConfig.change = tmp

function format(dateText) {
    let a = new Date(dateText)
    return `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()}`
}

function dateWhen(dateText) {
    const today = new Date(dateText)
    const start = termConfig.start
    let week = parseInt((today - start) / (7 * 24 * 60 * 60 * 1000)) + 1
    const day = parseInt((today - start) / (24 * 60 * 60 * 1000)) % 7 + 1
    for (let i of termConfig.skip) {
        if (today > new Date(i)) {
            week++
        }
    }
    return {
        week,
        day,
    }
}

function dateInfo(dateText) {
    let today = format(new Date(dateText))
    let rest = false
    for (let i of termConfig.rest) {
        if (i === today) {
            rest = true
            break
        }
    }
    for (let i of Object.keys(termConfig.change)) {
        if (i === today) {
            today = termConfig.change[i]
            break
        }
    }
    return {
        termName: termConfig.name,
        rest,
        original: dateWhen(dateText),
        real: dateWhen(today),
    }
}

module.exports = {
    termConfig,
    dateInfo,
    dateWhen,
}
