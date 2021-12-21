import { Component,Vue ,Prop} from 'vue-property-decorator'
import './cardGrid.less'
import { iconList } from '@/types/interface'
import { Icon } from 'ant-design-vue'

@Component({
    components:{
        'a-icon':Icon,
      },
})
export default class CardGrid extends Vue{
    @Prop({default:()=>{}}) readonly data!:any

    render(){
        const {title,description,date,author } = this.data
        
        return <div class="card-grid-wrapper">
            <div class="header">
                <a-icon type={iconList[title]} style={{fontSize:"26px",color:'#333'}} />
                <span class="title">{title}</span>
            </div>
            {
                description ? <div class="desc">{description}</div> : null
            }
            {
                date || author ? <div class="footer">
                    <span>{author}</span>
                    <span>{date}</span>
                </div> : null
            }
        </div>
    }
}
