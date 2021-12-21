import { Component,Vue } from 'vue-property-decorator'
import { Layout ,Menu ,Icon } from 'ant-design-vue'
import Headers from './header/header'
import MenuList from './routerMap/routerMap'
import './appMain.less'

@Component({
    components:{
        'a-layout':Layout,
        'a-layout-sider':Layout.Sider,
        'a-layout-header':Layout.Header,
        'a-layout-content':Layout.Content,
        'a-menu':Menu,
        'a-menu-item':Menu.Item,
        'a-icon':Icon,
        'headers':Headers,
        'menuList':MenuList,
        'a-sub-menu':Menu.SubMenu,
    },
    props:{
    },
    name:'login'
})
export default class AppMain extends Vue{
    collapsed:boolean = false

    changeCollapsed(val:boolean){
        this.collapsed = val
    }

    
    protected render(){
        let { collapsed , changeCollapsed } = this

        return <a-layout id="components-layout-demo-custom-trigger">
                    <a-layout-sider collapsed={collapsed} trigger="null" collapsible>
                        <div class="logo">
                            <h3>
                                <img src={require('../assets/one.png')} alt="logo" />
                                <span class={collapsed ? 'logo-text' : ''}> Vue Tsx Admin</span>
                            </h3>
                        </div>
                        <MenuList />
                    </a-layout-sider>
            <a-layout>
          <a-layout-header style="background: #fff; padding: 0">
            <Headers on-changeCollapsed={ changeCollapsed } />
          </a-layout-header>
          <a-layout-content
            style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
          >
            <div class="content">
              <router-view></router-view>
            </div>
          </a-layout-content>
        </a-layout>
      </a-layout>
    }
}

