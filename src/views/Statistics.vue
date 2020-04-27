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
    <ol>
      <li v-for="group  in result" :key="group.title">
        <h3 class="title">{{group.title}}</h3>
        <ol>
          <li v-for="item in group.items" :key="item.id" class="record">
            <span>{{tagString(item.tags)}}</span>
            <span class="notes">{{item.notes}}</span>
            <span>￥{{item.amount}}</span>
          </li>
        </ol>
      </li>
    </ol>
  </Layout>
</template>

<script lang="ts">
  import {Component} from 'vue-property-decorator';
  import Vue from 'vue';
  import Tabs from '@/components/Tabs.vue';
  import intervalList from '@/constants/intervalList';
  import typeList from '@/constants/typeList';

  @Component({components: {Tabs}})
  export default class Statistics extends Vue {
    tagString(tags: Tag[]) {
      return tags.length === 0 ? '无' : tags.join(',');
    }

    get recordList() {
      return (this.$store.state as RootState).recordList;
    }

    get result() {
      const {recordList} = this;
      type HashTabValue = { title: string; items: RecordItem[] }
      const hashTable: { [key: string]: HashTabValue } = {};
      for (let i = 0; i < recordList.length; i++) {
        const [date, time] = recordList[i].createAt!.split('T');
        hashTable[date] = hashTable[date] || {title: date, items: []};
        hashTable[date].items.push(recordList[i]);
      }
      return hashTable;
    }

    beforeCreate() {

      this.$store.commit('fetchRecord');
    }


    type = '-';
    typeList = typeList;
    interval = 'day';
    intervalList = intervalList;
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
    height: 40px;
  }

  %item {
    min-height: 40px;
    display: flex;
    /////////////////////
    padding: 8px 16px;
    line-height: 24px;
    /////////////////////
    justify-content: space-between;
    align-items: center;
  }

  .title {
    @extend %item
  }

  .record {
    background: white;
    @extend %item
  }

  .notes {
    margin-left: 16px;
    margin-right: auto;
    color: #999999;
  }
</style>