<template>
  <ul class="tabs">
    <li v-for="item in dataSource" :key="item.value"
        :class="liClass(item)"
        @click="select(item)"
    >
      {{item.text}}
    </li>
  </ul>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  type DataSourceItem = { text: string; value: string }
  @Component
  export default class Tabs extends Vue {
    @Prop({required: true, type: Array}) dataSource!: DataSourceItem[];
    @Prop(String) readonly value!: string;
    @Prop(String) classPrefix?: string;
    //用js控制height
    // :style="{height:height}"
    // @Prop({type: String, default: '64px'}) height!: string;

    liClass(item: DataSourceItem) {
      return {
        [this.classPrefix + '-tabs-item']: this.classPrefix,
        selected: item.value === this.value
      };
    }

    select(item: DataSourceItem) {
      this.$emit('update:value', item.value);
    }
  }
</script>

<style lang="scss" scoped>
  .tabs {
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