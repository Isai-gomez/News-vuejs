<template>
  <div>
    <ListNews />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  name: 'News',
  components: {
    ListNews: defineAsyncComponent(() =>
      import(/* webpackChunkName: "ListNews" */ '../components/ListNews.vue'),
    ),
  },
}
</script>

<style scoped></style>
