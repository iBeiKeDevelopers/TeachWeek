# 北科教学周数据及在线API

## 数据来源
根据校历手动更新，于`/js-locl/var.js`定义

## 数据格式

`{"termName":"2021-2022-2","rest":false,"original":{"week":9,"day":2},"real":{"week":9,"day":2}}`

## 参数说明
rest: 是否有调休的休假（不考虑周末）

original: 今日的理论教学周（但是在丢失的教学周（比如国庆）中，周会不对）

real: 今日的实际教学周
