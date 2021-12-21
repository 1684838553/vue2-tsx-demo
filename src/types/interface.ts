export type LoginType = 'account'| 'phone'

export type IloginForm = {
    username:string
    password:string
}

export type IRoute = {
    icon?:string,
    show:boolean,  
}

export enum iconList {
    "Alipay" = 'alipay',
    "Facebook" = 'facebook',
    "Wechat" = 'wechat',
    "Zhihu" = 'zhihu',
    "Ant Design" = 'ant-design',
    "Github" = 'github'
}
