<template>
  <div>
    <div>
      <ul class="types">
        <li :class="type==='-' && 'selected'" @click="selectType('-')">
          支出
        </li>
        <li :class="type==='+' && 'selected'" @click="selectType('+')">
          收入
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component,Prop} from 'vue-property-decorator';

  @Component
  export default class Types extends Vue {
    @Prop(String) value: string | undefined;
    type = this.value;
    selectType(type: string) {
      if (type !== '+' && type !== '-') {
        throw new Error('type is unknown');
      }
      this.type = type;
      this.$emit('update:value',type)
    }
  }
  // export default {
  //   name: 'Types',
  //   data() {
  //     return {
  //       type: '-'
  //     };
  //   },
  //   methods: {
  //     selectType(type) {
  //       if (type !== '+' && type !== '-') {
  //         throw new Error('type is unknown');
  //       }
  //       this.type = type;
  //     }
  //   }
  // };
</script>

<style lang="scss" scoped>
  .types {
    /*border: 1px solid red;*/
    display: flex;
    background: #C4C4C4;;
    font-size: 24px;

    > li {
      width: 50%;
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      &.selected::after {
        content: '';
        clear: both;
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: #333333;
      }
    }

  }
</style>