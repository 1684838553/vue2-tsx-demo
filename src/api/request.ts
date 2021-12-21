import axios from 'axios'
import '@/mock/index'

// 请求拦截
axios.interceptors.request.use(config=>{
    return config
},error=>{
    return Promise.reject(error)
})

// 响应拦截
axios.interceptors.response.use(res=>{
    if(res.status == 200){
        return res.data
    }else{
       return Promise.reject(res)
    }
},err =>{
    return Promise.resolve(err.response)
})

export default {
    post(url:string,data:any){
        return axios({
            method:'post',
            url,
            data:data,
            timeout:10000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        })
    },
    get(url:string,params:any = {}){
        return axios({
            method: 'get',
            url,
            params, // get 请求时带的参数
            timeout: 10000,
            headers: {
              'X-Requested-With': 'XMLHttpRequest'
            }
        })
    }
}

