<template>
  <div>
    <div class="notes">
      <span class="name">备注</span>
      <input type="text" placeholder="在这里输入备注" v-model="x">
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';

  @Component
  export default class Notes extends Vue {
    @Prop(String) value: string | undefined;
    x = this.value;
    @Watch('x')
    onXChanged(x: string){
      this.$emit('update:value',this.x)
    }


  }
</script>

<style lang="scss" scoped>
  .notes {
    font-size: 14px;
    background: #E5E5E5;
    /*border: 1px solid red;*/
    padding-left: 16px;
    display: flex;
    align-items: center;

    .name {
      padding-right: 16px;
    }

    input {
      background: transparent;
      border: none;
      height: 64px;
      flex-grow: 1;
      padding-right: 16px;
    }
  }
</style>