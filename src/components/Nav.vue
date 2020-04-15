<template>
  <nav>
    <router-link to="/money" class="item">
      记账
      <Icon name="money" />
    </router-link>

    <router-link to="/labels" class="item">
      标签
      <Icon name="label" />

    </router-link>

    <router-link to="/statistics" class="item">
      统计
      <Icon name="statistics" />
    </router-link>
  </nav>
</template>

<script lang="ts">
  import Icon from '@/components/Icon.vue';
  const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
  try {importAll(require.context('../assets/icons', true, /\.svg$/));} catch (error) {console.log(error);}
  export default {
    name: 'Nav',
    components: {Icon},
  };
</script>

<style lang="scss" scoped>
  nav {
    /*border: 1px solid red;*/
    font-size:12px;
    display: flex;
    flex-direction: row;
    box-shadow: 0 0 2px rgba(0,0,0,0.25);
    > .item{
      padding: 2px 0;
      width:33.3333%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column-reverse;
    }
    .icon{
      width:32px;
      height: 32px;
    }
  }
</style>