<template>
  <div>
    <div class="tags">
      <div class="new" @click="create">
        <button>
          新增标签
        </button>
      </div>
      <ul class="current">
        <li v-for="tag in dataSource" :key="tag.id" @click="toggle(tag.name)"
            :class="{selected:selectedTags.indexOf(tag.name)>=0}">
          {{tag.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import tagListModel from '@/tagListModel';

  @Component
  export default class Tags extends Vue {
    @Prop() readonly dataSource: string[] | undefined;
    selectedTags: string[] = [];

    toggle(tag: string) {
      const index = this.selectedTags.indexOf(tag);
      if (index >= 0) {
        this.selectedTags.splice(index, 1);
      } else {
        this.selectedTags.push(tag);
      }
      this.$emit('update:value', this.selectedTags);
    }

    create() {
      const name = window.prompt('请输入标签名');
      if (name === '') {
        window.alert('标签名不能为空');
      } else if (name) {
        if (this.dataSource) {
          this.$emit('update:value', [...this.dataSource, name]);
        }

      }
    }
  }
</script>

<style lang="scss" scoped>
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
        $bg: #D9D9D9;
        background: $bg;
        $h: 24px;
        height: $h;
        line-height: $h;
        border-radius: $h/2;
        padding: 0 16px;
        margin-right: 12px;
        margin-top: 4px;

        &.selected {
          background: darken($bg, 50%);
          color: white;
        }
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
</style>