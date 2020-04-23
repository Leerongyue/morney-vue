<template>
  <Layout>
    <div class="tags">
      <router-link class="tag" v-for="tag in tags" :key="tag.id" :to="`/labels/edit/${tag.id}`">
        <span>{{tag.name}}</span>
        <Icon name="right"/>
      </router-link>
    </div>
    <div class="newTag-wrapper">
      <button class="newTag" @click="createTag">
        新建标签
      </button>
    </div>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import tagListModel from '@/tagListModel';
  import Icon from '@/components/Icon.vue';


  tagListModel.fetch();
  @Component({
    components: {Icon}
  })
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
          } else {
            window.alert('添加成功');
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

    > .tag {
      /*border:1px solid red;*/
      min-height: 44px;
      font-size: 16px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid rgb(221, 221, 224);
      align-items: center;

      > .icon {
        height: 18px;
        width: 18px;
        color: #666;
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