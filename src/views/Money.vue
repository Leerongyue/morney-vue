<template>
  <Layout classPrefix="xxx">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Tabs :value.sync="record.type" :data-source="typeList"/>
    <div class="notes">
      <!--      ///////////不同处(.sync)//////////////-->
      <FormItem :value.sync="record.notes" field-name="备注" place-holder="在这里输入备注"/>
    </div>
    <Tags :value.sync="record.tags"/>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Tags from '@/components/Money/Tags.vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import FormItem from '@/components/Money/FormItem.vue';
  import Button from '@/components/Button.vue';
  import Tabs from '@/components/Tabs.vue';
  import typeList from '@/constants/typeList';


  @Component({
    components: {Tabs, Button, FormItem, NumberPad, Tags},
  })
  export default class Money extends Vue {
    typeList = typeList;

    get recordList() {
      return this.$store.state.recordList;

    }

    created() {
      this.$store.commit('fetchRecord');
    }

    // recordList = store.recordList;
    record: RecordItem = {
      tags: [], notes: '', type: '-', amount: 0
    };

    saveRecord() {
      if (!this.record.tags.length || this.record.tags.length === 0) {
        return window.alert('请至少选择一个标签');
      }
      this.$store.commit('createRecord', this.record);
      this.record.notes = '';
      // store.createRecord(this.record)；
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