import { Component,Vue ,Prop} from 'vue-property-decorator'
import './dataShow.less'

@Component({})
export default class DataShow extends Vue{
    @Prop({default:''}) readonly title!:string
    @Prop({default:''}) readonly data!:string

    render(){
        return <div class="data-show-wrapper">
            <h3>{this.title}</h3>
            <p>{this.data}</p>
        </div>
    }
}
