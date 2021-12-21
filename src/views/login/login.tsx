import { Component,Vue } from 'vue-property-decorator'
import { Form, Input, Icon, Checkbox, Button, Tabs ,message } from 'ant-design-vue'
import { LoginType , IloginForm} from '../../types/interface'
import { login } from '../../api/api'
import './login.less'


@Component({
    components:{
        'a-form':Form,
        'a-tabs':Tabs,
        'a-tabs-pane':Tabs.TabPane,
        'a-form-item':Form.Item,
        'a-input':Input,
        'a-icon': Icon,
        'a-button': Button,
        'a-checkbox':Checkbox,
    },
    props:{
        Form,
    },
    name:'login'
})
class Login extends Vue{
    loginType:LoginType = 'account' 
    loginForm:IloginForm = {
        username:'',
        password:''
    }
    checkedPassword:boolean =  false
    btnLoading:boolean = false

    mounted(){
        const remenber = localStorage.getItem('remenber')
        const username = localStorage.getItem('username')
        const password = localStorage.getItem('password')
        if(remenber == 'true'){
            this.$props.Form.setFieldsValue({
                username:username,
                password:password
            })
            this.checkedPassword = true
        }
    }

    // 提交表单
    submitForm(){
        this.$props.Form.validateFields((err:any,values:{[x:string]:string})=>{
            console.log(values,err,'pp')
            if(!err){
                this.btnLoading = true
                login(values).then((res:any)=>{
                    console.log(res,'res')
                    if(typeof res === 'string'){
                        message.error('用户名或密码错误')
                    }else{
                        localStorage.setItem('token',res.token)
                        localStorage.setItem('nickname',res.nickname)
                        localStorage.setItem('remenber',this.checkedPassword.toString())
                        if(this.checkedPassword){
                            localStorage.setItem('username',values.username)
                            localStorage.setItem('password',values.password)
                        }else{
                            localStorage.setItem('username','')
                            localStorage.setItem('password','')
                        }
                        this.$router.push('/')
                    }
                }).catch((e:any)=>{
                    console.log(e)
                }).finally(()=>{
                    this.btnLoading = false
                })
            }
        })
    }

    remenber(e: any){
        this.checkedPassword = e.target.checked
    }

    protected render(){
        const { submitForm,remenber,checkedPassword,btnLoading } = this
        const { getFieldDecorator } = this.$props.Form

        return <div class="login-wrapper">
            <a-form ref="loginForm" class="form-wrapper"  size="large">
                <h1>
                    <img src={require('../../assets/one.png')} alt="logo" />
                    Vue Tsx Admin
                </h1>
                <a-form-item >
                    {
                        getFieldDecorator('username',{
                            rules:[{required:true,message:'请输入用户名'}]
                        })(
                            <a-input size="large" type="text" name="username" placeholder="账号admin">
                                <a-icon slot="prefix" type="user" />
                            </a-input>
                        )
                    }
                </a-form-item>
                <a-form-item >
                    {
                        getFieldDecorator('password',{
                            rules:[{required:true,message:'请输入密码'}]
                        })(
                            <a-input size="large" type="password" on-pressEnter={submitForm} name="password"  placeholder="密码admin">
                                <a-icon slot="prefix" type="lock" />
                            </a-input>
                        )
                    }
                </a-form-item>
                <a-form-item>
                    <a-checkbox checked={checkedPassword} on-change={remenber}>记住密码</a-checkbox>
                </a-form-item>
                <a-form-item>
                    <a-button block  type="primary" loading={btnLoading} on-click={submitForm}>登录</a-button>
                </a-form-item>
            </a-form>
        </div>
    }
}
export default Form.create({})(Login)

