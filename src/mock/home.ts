// import Mock from 'mockjs'
let Mock = require('mockjs')
// const Random = Mock.Random
Mock.setup({
    timeout:500 // 模拟接口延时
})

export const projectList = Mock.mock('http://projectList','get',{
    'projectList|6':[{
        'key|+1':1,
        'title':'hello'
    }]
})
