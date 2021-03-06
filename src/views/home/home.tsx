import { Avatar, Card  } from 'ant-design-vue'
import { Component,Vue } from 'vue-property-decorator'
import DataShow from '@/components/dataShow'
import CardGrid from '@/components/cardGrid'
import './home.less'
import { projectData } from '@/api/api'

@Component({
    components:{
      'a-avatar':Avatar,
      'a-card':Card,
      'a-card-grid':Card.Grid,
    },
    props: {}
})
export default class Home extends Vue{
    private nickname = localStorage.getItem('nickname') || 'jdrunk'
    private projectList:Array<any> = []
    private sourseList:Array<any> = []
    private dataList:Array<any> = [
      {
        title:'项目数',
        number:'56',
      },
      {
        title:'团队内排名',
        number:'8/24',
      },
      {
        title:'项目访问',
        number:'2234',
      },
    ]

    created(){
      this.getData()
    }

    getData(){
      projectData().then((res:any)=>{
        this.projectList = res.projectList
        this.sourseList = res.sourseData
        console.log(res)
      })
    }


    render(){
        return <div class="home-wrapper">
          <div class="info">
            <div class="info-content">
                <div class="left">
                  <a-avatar icon="user" size={72} src={require('../../assets/two.png')} /> 
                </div>
                <div class="right">
                  <h3>您好，{this.nickname}</h3>
                  <p class="tips">{`前端工程师 | 易宝软件-研发部`}</p>
                </div>
            </div>
            <div class="info-content">
              {
                this.dataList?.map(item=>{
                  return <DataShow name={item.title} data={item.number} />
                })
              }
            </div>
          </div>
          <div class="project">
            <a-card title="进行中的项目">
              {
                this.projectList?.map(item=>{
                  return <a-card-grid style="width:33.33%;text-align:center">
                    <CardGrid data={item}/>
                  </a-card-grid>
                })
              }
            </a-card>
          </div>
          
        </div>
    }
}
