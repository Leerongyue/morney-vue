<template>
  <Layout classPrefix="xxx">
    <NumberPad :value.sync="record.amount"/>
    <Types :value.sync="record.type"/>
    <Notes :value.sync="record.notes"/>
    <Tags :value.sync="record.tags"/>
    {{record}}
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Tags from '@/components/Money/Tags.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Types from '@/components/Money/Types.vue';
  import NumberPad from '@/components/Money/NumberPad.vue';

  type Record = {
    tags: string[];
    notes: string;
    type: string;
    amount: number;// 数据类型 object | string
  }
  @Component({components: {NumberPad, Types, Notes, Tags}})
  export default class Money extends Vue {
    record: Record = {
      tags: ['衣', '食', '住', '行'], notes: '', type: '-', amount: 0
    };
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