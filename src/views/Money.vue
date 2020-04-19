<template>
  <Layout classPrefix="xxx">
    <NumberPad/>
    <Types/>
    <Notes/>
    <Tags :data-source="tags"/>
  </Layout>
</template>

<script lang="ts">
  import Tags from '@/components/Money/Tags.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Types from '@/components/Money/Types.vue';
  import NumberPad from '@/components/Money/NumberPad.vue';

  export default {
    data() {
      return {
        tags: ['衣', '食', '住', '行', '大保健']
      };
    },
    name: 'Money',
    components: {NumberPad, Types, Notes, Tags},
  };
</script>
<style lang="scss">
  .xxx-content {
    display: flex;
    flex-direction: column-reverse;
  }
</style>
<style lang="scss" scoped>


</style>