<template>
  <Layout classPrefix="xxx">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <Notes :value.sync="record.notes"/>
    <Tags :value.sync="tags"/>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Watch} from 'vue-property-decorator';
  import Tags from '@/components/Money/Tags.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Types from '@/components/Money/Types.vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import recordListModel from '@/recordListModel';
  import tagListModel from '@/tagListModel';

  const recordList: RecordItem[] = recordListModel.fetch();
  const tagList = tagListModel.fetch();
  @Component({components: {NumberPad, Types, Notes, Tags}})
  export default class Money extends Vue {
    tags = tagList;
    record: RecordItem = {
      tags: [], notes: '', type: '-', amount: 0
    };
    recordList: RecordItem[] = recordList;

    saveRecord() {
      const record2: RecordItem = recordListModel.clone(this.record);
      record2.createAt = this.getNowDate();
      this.recordList.push(record2);
    }

    @Watch('recordList')
    onRecordListChange() {
      recordListModel.save(this.recordList);
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