// 放假配置，rest是休息的天，change是调休，key为0的是要上课的那一天
const termConfig = {
    name: '2021-2022-2',
    start: '2022-2-21',
    rest: [
        '2022-04-05',
        '2022-05-02',
        '2022-05-03',
        '2022-05-04',
        '2022-06-03',
        // 只要有放假就定义在rest
    ],
    skip: [
        '2000-10-01', // 如果国庆丢失了一整个教学周，就要定义，丢一周定义一次
    ],
    change: {
        // 示例：'2000-01-01': '2000-01-03', '周六': '上周一的课'
        '2022-05-07':'2022-05-04'
    }
}

termConfig.skip = termConfig.skip.filter(i => new Date(termConfig.start) < new Date(i))

module.exports = termConfig
