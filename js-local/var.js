// 放假配置，rest是休息的天，change是调休，key为0的是要上课的那一天
const termConfig = {
    name: '2021-2022-2',
    start: '2022-2-21',
    rest: [
        '2022-4-5',
        '2022-6-3',
        // 只要有放假就定义在rest
    ],
    skip: [
        '2000-10-1', // 如果国庆丢失了一整个教学周，就要定义，丢一周定义一次
    ],
    change: {
        // 示例：'2000-01-01': '2000-01-03', '周六': '上周一的课'
    }
}

termConfig.skip = termConfig.skip.filter(i => new Date(termConfig.start) < new Date(i))

module.exports = termConfig
