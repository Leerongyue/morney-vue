<template>
  <Layout classPrefix="xxx">
    <div class="tags">
      <div class="new">
        <button>
          新增标签
        </button>
      </div>
      <ul class="current">
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ul>
    </div>
    <div class="notes">
      <span class="name">备注</span>
      <input type="text" placeholder="在这里输入备注">
    </div>
    <div>
      <ul class="types">
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
    </div>
    <div class="numberPad">
      <div class="output">100</div>
      <div class="buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>×</button>
        <button class="ok">ok</button>
        <button>.</button>
        <button>0</button>
        <button>%</button>
        <button>÷</button>

      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
  export default {
    name: 'Money',
  };
</script>
<style lang="scss">
  .xxx-content {
    display: flex;
    flex-direction: column;
  }
</style>
<style lang="scss" scoped>

  @import "~@/assets/style/helper.scss";

  .tags {
    /*border: 1px solid red;*/
    display: flex;
    flex-direction: column-reverse;
    flex-wrap: wrap;
    font-size: 14px;
    padding: 16px;
    flex-grow: 1;

    > .current {
      /*border: 1px solid red;*/
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      overflow-x: hidden;

      > li {
        background: #D9D9D9;
        $h: 24px;
        height: $h;
        line-height: $h;
        border-radius: $h/2;
        padding: 0 16px;
        margin-right: 12px;
        margin-top: 4px;
      }
    }

    > .new {
      /*border: 1px solid red;*/
      padding-top: 16px;

      > button {
        background: transparent;
        border: none;
        color: #999999;
        border-bottom: 1px solid;
        padding: 0 4px;

      }
    }
  }

  .notes {
    font-size: 14px;
    background: #E5E5E5;
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
      height: 64px;
      flex-grow: 1;
      padding-right: 16px;
    }
  }

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

  .numberPad {
    .output {
      @extend %innerShadow;
      @extend %clearFix;
      font-size: 36px;
      ///////////////////////////////////
      font-family: Consolas, monospace;
      ///////////////////////////////////
      padding: 9px 16px;
      text-align: right;
    }

    .buttons {
      /*border: 1px solid red;*/
      @extend %clearFix;

      > button {
        width: 20%;
        height: 64px;
        float: left;
        border: none;
        background: transparent;

        &.ok {
          height: 64*2px;
          float: right;
        }

        $bg: #F2F2F2;

        &:nth-child(1) {
          background: $bg;
        }

        &:nth-child(2), &:nth-child(6) {
          background: darken($bg, 4%);
        }

        &:nth-child(3), &:nth-child(7), &:nth-child(11) {
          background: darken($bg, 4*2%);
        }

        &:nth-child(4), &:nth-child(8), &:nth-child(12), &:nth-child(16) {
          background: darken($bg, 4*3%);
        }

        &:nth-child(5), &:nth-child(9), &:nth-child(13), &:nth-child(17) {
          background: darken($bg, 4*4%);
        }

        &:nth-child(10), &:nth-child(14), &:nth-child(18) {
          background: darken($bg, 4*5%);
        }

        &:nth-child(19) {
          background: darken($bg, 4*6%);
        }

        &:nth-child(15) {
          background: darken($bg, 4*7%);
        }
      }


    }

  }

</style>