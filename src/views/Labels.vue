<template>
  <Layout>
    <div class="tags">
      <router-link class="tag" v-for="tag in tags" :key="tag.id" :to="`/labels/edit/${tag.id}`">
        <span>{{tag.name}}</span>
        <Icon name="right"/>
      </router-link>
    </div>
    <div class="newTag-wrapper">
      <!--      createTag在mixins里-->
      <Button class="newTag" @click.native="createTag">新建标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Icon from '@/components/Icon.vue';
  import Button from '@/components/Button.vue';
  import {mixins} from 'vue-class-component';
  import TagHelpers from '@/mixins/TagHelpers';

  @Component({
    components: {Button, Icon},
  })
  export default class Labels extends mixins(TagHelpers) {
    get tags() {
      return this.$store.state.tagList;
    }

    created() {
      this.$store.commit('fetchTag');
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