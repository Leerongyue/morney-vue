<template>
  <div>
    <div class="notes">
      <span class="name">{{fieldName}}</span>
      <input type="text"
             :placeholder="placeHolder"
             :value="value"
             @input="onValueChanged($event.target.value)"
      >
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';

  @Component
  export default class FormItem extends Vue {
    @Prop({default: ''}) readonly value: string | undefined;
    @Prop({required: true}) fieldName!: string;
    @Prop() placeHolder?: string;

    // @Watch('value')
    onValueChanged(value: string) {
      this.$emit('update:value', value);
    }


  }
</script>

<style lang="scss" scoped>
  .notes {
    font-size: 14px;
    /*background: #E5E5E5;*/
    /*border: 1px solid red;*/
    padding-left: 16px;
    display: flex;
    align-items: center;

    .name {
      padding-right: 16px;
    }

    input {
      background: transparent;
      border: none;
      height: 44px;
      flex-grow: 1;
      padding-right: 16px;
    }
  }
</style>