<template>
  <div class="tags">
    <!--      createTag在mixins里-->
    <div class="new">
      <button @click="createTag">
        新增标签
      </button>
    </div>
    <ul class="current">
      <li v-for="tag in tags" :key="tag.id" @click="toggle(tag.name)"
          :class="{selected:selectedTags.indexOf(tag.name)>=0}">
        {{tag.name}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import {Component} from 'vue-property-decorator';
  import TagHelpers from '@/mixins/TagHelpers';
  import {mixins} from 'vue-class-component';

  @Component
  export default class Tags extends mixins(TagHelpers) {

    get tags() {
      return this.$store.state.tagList;
    }

    created() {
      this.$store.commit('fetchTag');
    }

    selectedTags: string[] = [];

    toggle(tag: string) {
      const index = this.selectedTags.indexOf(tag);
      if (index >= 0) {
        this.selectedTags.splice(index, 1);
      } else {
        if (this.selectedTags.length >= 1) {
          return;
        } else {
          this.selectedTags.push(tag);
        }
      }
      this.$emit('update:value', this.selectedTags);
    }


  }
</script>

<style lang="scss" scoped>
  .tags {
    background: white;
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