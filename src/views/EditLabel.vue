<template>
  <layout>
    <div class="navBar">
      <Icon name="left" class="leftIcon" @click.native="goBack"/>
      <span class="title">编辑标签</span>
      <Icon class="rightIcon"/>
    </div>
    <div class="formWrapper">
      <FormItem :value="tag.name"
                @update:value="update"
                field-name="标签名"
                place-holder="在这里输入备注"/>
    </div>
    <div class="buttonWrapper">
      <Button @click.native="remove">删除标签</Button>
    </div>
  </layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Icon from '@/components/Icon.vue';
  import FormItem from '@/components/Money/FormItem.vue';
  import Button from '@/components/Button.vue';
  import tagListModel from '@/models/tagListModel';


  @Component({
    components: {Button, FormItem, Icon}
  })
  export default class EditLabel extends Vue {
    tag?: { id: string; name: string } = undefined;

    created() {
      const id = this.$route.params.id;
      const tags = window.tagList;
      const tag = tags.filter(t => t.id === id)[0];
      if (tag) {
        this.tag = tag;
      } else {
        this.$router.replace('/404');
      }
    }

    update(name: string) {
      if (this.tag) {
        tagListModel.update(this.tag.id, name);
      }

    }

    remove() {
      if (this.tag) {
        if (tagListModel.remove(this.tag.id)) {
          this.$router.back();
        } else {
          window.alert('删除失败');
        }

      }
    }

    goBack() {
      this.$router.back();
    }

  }
</script>

<style lang="scss" scoped>
  .navBar {
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      padding: 12px 0;
    }

    .leftIcon {
      margin-left: 16px;
    }

  }

  .formWrapper {
    background: white;
    margin-top: 8px;
  }

  .buttonWrapper {
    text-align: center;
    margin-top: 44px;
  }
</style>