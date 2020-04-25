<template>
  <Layout classPrefix="xxx">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <div class="notes">
      <!--      ///////////不同处(.sync)//////////////-->
      <FormItem :value.sync="record.notes" field-name="备注" place-holder="在这里输入备注"/>
    </div>
    <Tags/>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Watch} from 'vue-property-decorator';
  import Tags from '@/components/Money/Tags.vue';
  import Types from '@/components/Money/Types.vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import FormItem from '@/components/Money/FormItem.vue';
  // import store from '@/store/index2';
  import Button from '@/components/Button.vue';


  @Component({
    components: {Button, FormItem, NumberPad, Types, Tags},
    computed: {
      recordList() {
        return this.$store.state.recordList;
      }
    }
  })
  export default class Money extends Vue {
    created() {
      this.$store.commit('fetchRecord');
    }

    // recordList = store.recordList;
    record: RecordItem = {
      tags: [], notes: '', type: '-', amount: 0
    };

    saveRecord() {
      this.$store.commit('createRecord', this.record);
      // store.createRecord(this.record);
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