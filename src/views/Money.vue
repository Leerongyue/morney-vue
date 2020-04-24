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
  import FormItem from '@/components/Money/FormItem.vue';
  import store from '@/store/index2';

  @Component({components: {FormItem, NumberPad, Types, Tags}})
  export default class Money extends Vue {
    tags = store.tagList;
    recordList = store.recordList;
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
      store.createRecord(this.record);
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

  .notes {
    padding: 12px;
  }
</style>