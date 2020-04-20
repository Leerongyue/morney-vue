<template>
  <Layout classPrefix="xxx">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <Notes :value.sync="record.notes"/>
    <Tags :value.sync="record.tags"/>
    {{record}}
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Watch} from 'vue-property-decorator';
  import Tags from '@/components/Money/Tags.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Types from '@/components/Money/Types.vue';
  import NumberPad from '@/components/Money/NumberPad.vue';

  const recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');

  type Record = {
    tags: string[];
    notes: string;
    type: string;
    amount: number;// 数据类型 object | string
    createAt?: string; //类|构造函数
  }
  @Component({components: {NumberPad, Types, Notes, Tags}})
  export default class Money extends Vue {
    record: Record = {
      tags: ['衣', '食', '住', '行'], notes: '', type: '-', amount: 0
    };
    recordList: Record[] = recordList;

    saveRecord() {
      const record2: Record = JSON.parse(JSON.stringify(this.record));
      record2.createAt = this.getNowDate();
      this.recordList.push(record2);
      console.log(this.recordList);
    }

    @Watch('recordList')
    onRecordListChange() {
      window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
    }

    //格式化日期
    getNowDate() {
      const date = new Date();
      let month: string | number = date.getMonth() + 1;
      let strDate: string | number = date.getDate();

      if (month <= 9) {
        month = '0' + month;
      }

      if (strDate <= 9) {
        strDate = '0' + strDate;
      }

      return date.getFullYear() + '-' + month + '-' + strDate + ' '
        + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    }
  }
</script>
<style lang="scss">
  .xxx-content {
    display: flex;
    flex-direction: column-reverse;
  }
</style>
<style lang="scss" scoped>


</style>