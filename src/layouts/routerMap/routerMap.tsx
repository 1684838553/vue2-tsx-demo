import {
    Component, Emit, Vue, Prop, Watch,
  } from 'vue-property-decorator';
  import { Menu, Icon } from 'ant-design-vue';
import { routes } from '../../router/index'
import {routeToArray} from '@/util/index'
  
  @Component({
    components: {
      'a-menu': Menu,
      'a-submenu': Menu.SubMenu,
      'a-menu-item-group': Menu.ItemGroup,
      'a-menu-item': Menu.Item,
      'a-icon': Icon,
    },
  })
  export default class MenuList extends Vue {
      keys:string[] = []
      openKeys:string[] = []

    // 路由跳转
    toPage(path:string = ''){
        this.$router.push(path)
    }

    @Watch('$route', { immediate: true, deep: true })
    routeChange(to: any, from: any) {
        this.keys = routeToArray(to.path).routeArr;
        console.log(to, this.keys,'aa')
        const openkey = to.path?.split('/')?.[1]
        this.openKeys = [`/${openkey}`]
    }

    openChange(openKeys:any){
        console.log(openKeys,'openKeys')
        this.openKeys = openKeys;
    }
  
    render() {
      const { toPage ,keys, openChange , openKeys } = this

      return (
        <a-menu
          theme='dark'
          mode="inline"
          class="left-menu"
          openKeys={openKeys}
          on-openChange={openChange}
          selectedKeys={keys}
          on-click={(params: {item: any, key: string, keyPath: string[]}) => {
            // const path = params.keyPath.reverse()
            // toPage(path.join(''))
            toPage(params.key)
          }}
        >
          {routes ? this.renderMenu(routes) : null}
        </a-menu>
      );
    }
  
    renderMenu(routes: any[]): (JSX.Element | null)[] {
      return routes?.filter(item=>item.private).map((item: any) => {
        if (item.children) {
          return <a-submenu
            id={item.path}
            key={item.path}>
            <template slot="title">
            <a-icon type={item.icon}></a-icon>
              <span>{item.name}</span>
            </template>
            {this.renderMenu(item.children)}
          </a-submenu>;
        }
        return <a-menu-item
          id={item.path}
          key={`${item.path}`}>
          <a-icon type={item.icon}></a-icon>
          <span>{item.name}</span>
        </a-menu-item>;
      });
    }
  }
