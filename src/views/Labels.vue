<template>
  <Layout>
    <ul class="tags">
      <li v-for="tag in tags" :key="tag">
        <span>{{tag}}</span>
        <Icon name="right"/>
      </li>
    </ul>

    <div class="newTag-wrapper">
      <button class="newTag" @click="createTag">
        新建标签
      </button>
    </div>
  </Layout>
</template>

<script lang="ts">
  import Icon from '@/components/Icon.vue';
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import tagListModel from '@/tagListModel';

  tagListModel.fetch();
  @Component
  export default class Labels extends Vue {
    tags = tagListModel.data;

    createTag() {
      const name = window.prompt('请输入标签');
      if (name === '') {
        window.alert('标签名不能为空');
      } else {
        if (name) {
          const message = tagListModel.create(name);
          if (message === 'duplicated') {
            window.alert('标签名重复');
          }else{
            window.alert('添加成功')
          }

        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
  @import "~@/assets/style/reset.scss";

  .tags {
    /*border: 1px solid red;*/
    background: white;
    padding: 0 16px;

    li {
      min-height: 44px;
      font-size: 16px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid rgb(221, 221, 224);
      align-items: center;

      svg {
        height: 18px;
        width: 18px;
        align-items: center;
      }
    }
  }

  .newTag {
    color: white;
    border: none;
    border-radius: 4px;
    background: #767676;
    padding: 9px 16px;

    &-wrapper {
      text-align: center;
      margin-top: 44px;
    }
  }

</style>