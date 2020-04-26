<template>
  <Layout>
    <Tabs class-prefix="type"
          :data-source="typeList"
          :value.sync="type"
    />
    <Tabs class-prefix="interval"
          :data-source="intervalList"
          :value.sync="interval"
    />
    <div>
      type:{{type}}
      <br/>
      interval:{{interval}}
    </div>
  </Layout>
</template>

<script lang="ts">
  import {Component} from 'vue-property-decorator';
  import Vue from 'vue';
  import Tabs from '@/components/Tabs.vue';
  import intervalList from '@/constants/intervalList';
  import typeList from '@/constants/typeList';

  @Component({components: { Tabs}})
  export default class Statistics extends Vue {
    type = '-';
    typeList = typeList;
    interval = 'day';
    intervalList = intervalList
  }
</script>

<style lang="scss" scoped>
  ::v-deep .type-tabs-item {
    background: white;
    /*border: 1px solid red;*/

    &.selected {
      background: #c4c4c4;

      &.selected::after {
        display: none;
      }
    }
  }

  ::v-deep li.interval-tabs-item {
    /*border: 1px solid red;*/
    /*height: 40px!important;*/
    height:40px;
  }
</style>