<template>
  <Layout>
    <Tabs class-prefix="type"
          :data-source="typeList"
          :value.sync="type"
    />
    <ol v-if="groupList.length>0">
      <li v-for="(group,index)  in groupList" :key="index">
        <h3 class="title">{{beautify(group.title)}} <span>￥{{group.total}}</span></h3>
        <ol>
          <li v-for="item in group.items" :key="item.id" class="record">
            <span>{{tagString(item.tags)}}</span>
            <span class="notes">{{item.notes}}</span>
            <span>￥{{item.amount}}</span>
          </li>
        </ol>
      </li>
    </ol>
    <div v-else class="noList">
      <a><img src="https://i.loli.net/2020/04/28/jKdivx9BH6oWLlb.png"></a>
      <div>空空如也</div>
    </div>

  </Layout>
</template>

<script lang="ts">
  import {Component} from 'vue-property-decorator';
  import Vue from 'vue';
  import Tabs from '@/components/Tabs.vue';
  import intervalList from '@/constants/intervalList';
  import typeList from '@/constants/typeList';
  import dayjs from 'dayjs';
  import clone from '@/lib/clone';
  import Button from '@/components/Button.vue';

  @Component({components: {Button, Tabs}})
  export default class Statistics extends Vue {

    tagString(tags: Tag[]) {
      return tags.length === 0 ? '无' : tags.join(',');
    }

    get recordList() {
      return (this.$store.state as RootState).recordList;

    }

    get groupList() {
      const {recordList} = this;
      const newList = clone(recordList).filter(r => r.type === this.type).sort((a, b) => dayjs(b.createAt).valueOf() - dayjs(a.createAt).valueOf()
      );
      if (newList.length === 0) {return []; }
      type Result = { title: string; total?: number; items: RecordItem[] }[]
      const result: Result = [{
        title: dayjs(newList[0].createAt).format('YYYY-MM-DD'), items: [newList[0]]
      }];
      for (let i = 1; i < newList.length; i++) {
        const current = newList[i];
        const last = result[result.length - 1];
        if (dayjs(last.title).isSame(dayjs(current.createAt), 'day')) {
          last.items.push(current);
        } else {
          result.push({title: dayjs(current.createAt).format('YYYY-MM-DD'), items: [current]});
        }
      }
      result.map(group => {group.total = group.items.reduce((sum, item) => sum + item.amount, 0);});
      return result;
    }

    beautify(string: string) {
      const now = dayjs();
      const d = dayjs(string);
      if (d.isSame(now, 'day')) {
        return '今天';
      } else if (d.isSame(now.subtract(1, 'day'), 'day')) {
        return '昨天';
      } else if (d.isSame(now.subtract(2, 'day'), 'day')) {
        return '前天';
      } else {
        return d.format('MM月-DD日');
      }

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
  /*.removeWrapper {*/
  /*  text-align: center;*/
  /*  margin-top: 80px;*/

  /*  .remove {*/
  /*    !*border:1px solid red;*!*/
  /*    border: none;*/
  /*    padding: 8px 16px;*/
  /*    background: rgba(118, 118, 118);*/
  /*    border-radius: 4px;*/
  /*    color: white;*/
  /*  }*/
  /*}*/

  .noList {
    /*border: 1px solid red;*/
    text-align: center;
    margin-top: 200px;
    background: rgba(229, 229, 229);
  }

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
    @extend %item;
    border-bottom: 1px solid rgba(229, 229, 229);
  }

  .notes {
    margin-left: 16px;
    margin-right: auto;
    color: #999999;
  }
</style>