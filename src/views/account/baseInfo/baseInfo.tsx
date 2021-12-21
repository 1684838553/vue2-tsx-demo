import { Form, Input, Icon, Checkbox, Button, Tabs, Row, Col, Dropdown, Menu } from 'ant-design-vue'
import { Component,Vue } from 'vue-property-decorator'

@Component({
    props: {
      form: {
        type: Object
      }
    }
})
export default class BaseInfo extends Vue{
    render(){
        return <div>BaseInfo.tsx</div>
    }
}
