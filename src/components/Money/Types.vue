<template>
  <div>
    <div>
      <ul class="types">
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Types'
  };
</script>

<style lang="scss" scoped>
  .types {
    /*border: 1px solid red;*/
    display: flex;
    background: #C4C4C4;;
    font-size: 24px;

    > li {
      width: 50%;
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      &.selected::after {
        content: '';
        clear: both;
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: #333333;
      }
    }

  }
</style>