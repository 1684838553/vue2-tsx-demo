import { Component,Vue } from 'vue-property-decorator'
import { Button } from 'ant-design-vue'
import './404.less'

@Component({
    components:{
        'a-button':Button
    },
    props: {}
})
export default class Home extends Vue{

    backHome(){
        this.$router.push('/')
    }
    
    render(){
        const {backHome} = this

        return <div class="no-page-wrapper">
        <div class="no-page-logo">
          <img src={require('@/assets/404.svg')} />
        </div>
        <div>
          <h1>404</h1>
          <h4>抱歉，你访问的页面不存在</h4>
          <p onClick={backHome}>返回首页</p>
        </div>
      </div>
    }
}
