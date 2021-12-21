import request from './request'
import { account,adminAccount } from '@/mock/login'

export const login = async (params:{[x:string]:string})=>{
    await new Promise(resolve=>{
        setTimeout(resolve,1000)
    })
    if(!account.hasOwnProperty(params.username) || params.password !== account[params.username]) return 'LOgin Error'
    return {...adminAccount, ...params}
}

export const loginOut = async ()=>{
    await new Promise(resolve=>{
        setTimeout(resolve,1000)
    })
    const ressult = {
        code:200,
        success:true
    }
    return ressult
}

export const projectData = ()=>{
    return request.get('http://projectList')
}
