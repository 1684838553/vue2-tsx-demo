import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'Account',
})
export default class Account extends Vue {
  render() {
    return (
      <keep-alive max={10}>
        <router-view/>
      </keep-alive>
    );
  }
}
