import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class TagHelpers extends Vue {
  createTag() {
    const name = window.prompt('请输入标签名');
    if (name === '') {
      return window.alert('标签名不能为空');
    } else if (name) {
      this.$store.commit('createTag', name);
      // if(this.$store.state.createTagError){
      //   window.alert(this.$store.state.createTagError.message)
      // }
    } else {
      return;
    }
  }
}