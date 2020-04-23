<template>
  <button class="button">
    <slot/>
  </button>
<!--  用button的click事件触发Button的click事件-->
<!--  <button class="button" @click="$emit('click',$event)">-->
<!--    <slot/>-->
<!--  </button>-->
</template>f

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Button extends Vue {

  }
</script>

<style lang="scss" scoped>
  .button {
    color: white;
    border: none;
    border-radius: 4px;
    background: #767676;
    padding: 9px 16px;
  }
</style>