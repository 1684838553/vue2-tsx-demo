import { Component,Vue,Watch } from "vue-property-decorator";
import AppMain from "./layouts/appMain";

@Component
export default class App extends Vue{
  private hiddenNav:boolean = false

  created(){
    // 判断是否登录,用户处于已登录状态，跳转到首页；未登录状态，跳转到登录页面
    const token = localStorage.getItem('token')
    if(!token){
      this.$router.push('/login')
    }
  }

  @Watch('$route', { immediate: true, deep: true })
    routeChange() {
      this.hiddenNav = this.$route?.meta?.hiddenNav
    }


  render(){
    return <div>
      {
        this.hiddenNav ? <router-view></router-view> : <AppMain />
      }
    </div>
  }
}

