<template>
  <Layout classPrefix="xxx">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <div class="notes">
      <FormItem @update:value="onUpdateNotes" field-name="备注" place-holder="在这里输入备注"/>
    </div>
    <Tags :data-source.sync="tags"/>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Watch} from 'vue-property-decorator';
  import Tags from '@/components/Money/Tags.vue';
  import Types from '@/components/Money/Types.vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import recordListModel from '@/recordListModel';
  import tagListModel from '@/tagListModel';
  import FormItem from '@/components/Money/FormItem.vue';

  const recordList: RecordItem[] = recordListModel.fetch();
  const tagList = tagListModel.fetch();
  @Component({components: {FormItem, NumberPad, Types, Tags}})
  export default class Money extends Vue {
    tags = tagList;
    recordList: RecordItem[] = recordList;
    record: RecordItem = {
      tags: [], notes: '', type: '-', amount: 0
    };

    // onUpdateTags(value: string[]) {
    //   this.record.tags = value;
    // }

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }

    saveRecord() {
      recordListModel.create(this.record);
    }

    @Watch('recordList')
    onRecordListChange() {
      recordListModel.save();
    }

    //格式化日期
    // getNowDate() {
    //   const date = new Date();
    //   let month: string | number = date.getMonth() + 1;
    //   let strDate: string | number = date.getDate();
    //
    //   if (month <= 9) {
    //     month = '0' + month;
    //   }
    //
    //   if (strDate <= 9) {
    //     strDate = '0' + strDate;
    //   }
    //
    //   return date.getFullYear() + '-' + month + '-' + strDate + ' '
    //     + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    // }
  }
</script>
<style lang="scss">
  .xxx-content {
    display: flex;
    flex-direction: column-reverse;
  }


</style>
<style lang="scss" scoped>

  .notes {
    padding: 12px;
  }
</style>