let Mock = require('mockjs')
const Random = Mock.Random

Mock.setup({
    timeout:500 // 模拟接口延时
})

const projectList = function(){
    let list = []
    let arr = []
    const nameList:Array<string> = ['Alipay','Facebook','Wechat','Zhihu','Ant Design','Github']
    for(let i =0;i<6;i++){
        let newdata = {
            key:i,
            title:nameList[i],
            description:Random.csentence(8,30),
            date:Random.date(),
            author:Random.cname() 
        }
        let newArr = {
            author:Random.cname(),
            description:Random.csentence(8,30),
        }
        list.push(newdata)
        arr.push(newArr)
    }

    return {
        projectList:list,
        sourseData:arr
    }
}

Mock.mock('http://projectList','get',projectList)
