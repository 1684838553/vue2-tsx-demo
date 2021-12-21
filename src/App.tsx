import { Component,Vue } from "vue-property-decorator";
import AppMain from "./layouts/appMain";

@Component
export default class App extends Vue{

  created(){
    // 判断是否登录,用户处于已登录状态，跳转到首页；未登录状态，跳转到登录页面
    const token = localStorage.getItem('token')
    if(!token){
      this.$router.push('/login')
    }
  }

  render(){
    return <AppMain />
  }
}
