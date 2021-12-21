let Mock = require('mockjs')
Mock.setup({
    timeout:500 // 模拟接口延时
})

Mock.mock('http://projectList','get',{
    'projectList|6':[{
        'key|+1':1,
        'title':'hello'
    }]
})
