import { Component , Vue , Emit } from 'vue-property-decorator'
import { Icon ,Avatar, Dropdown ,Menu} from 'ant-design-vue'
import { loginOut } from '../../api/api'
import './header.less'

@Component({
    components:{
        'a-icon':Icon,
        'a-avatar':Avatar,
        'a-dropdown':Dropdown,
        'a-menu':Menu,
        'a-menu-item':Menu.Item,
    },
    props:{
    },
    name:'headers'
})
export default class Headers extends Vue{

    collapsed:boolean = false

    @Emit('changeCollapsed')
    changeCollapsed(){
        this.collapsed = !this.collapsed
        return this.collapsed
    }

    loginOut(){
        loginOut().then((res:{code:number,success:boolean})=>{
            if(res.success){
                localStorage.setItem('token','')
                // localStorage.setItem('nickname','')
                this.$router.push('/login')
            }
        })
        
    }

    protected render(){
        let { collapsed ,changeCollapsed ,loginOut } = this
        const nickname = localStorage.getItem('nickname')

        return <div class="header-wrapper">
            <a-icon
              class="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              on-click={changeCollapsed}
            /> 
            <div class="pic">
                <a-dropdown>
                <div>
                    <a-avatar icon="user" src={require('../../assets/two.png')} />
                    <span class="nickname">{nickname || 'admin'}</span> 
                </div>
                <a-menu slot="overlay">
                    <a-menu-item on-click={loginOut}>
                        <a-icon type="poweroff" />退出登录
                    </a-menu-item>
                </a-menu>
            </a-dropdown>
            </div>
        </div>
    }
}

