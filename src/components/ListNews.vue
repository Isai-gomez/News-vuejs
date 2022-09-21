<template>
  <div>
    <div v-if="noticia">
      <article v-for="item in noticia" :key="item.title._cdata">
        <h4>{{ item.title._cdata }}</h4>

        <p>
          {{ item.description._cdata }}
        </p>
        <footer>Author: {{ item.author._text }}</footer>
      </article>
    </div>
  </div>
</template>

<script>
import { getApi } from '../helpers/apiget'

export default {
  name: 'ListNews',
  data() {
    return {
      noticia: [],
    }
  },

  created: async function () {
    this.noticia = await getApi()
  },
}
</script>

<style scoped>
h1 {
  text-align: center;
}
article {
  width: 20em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: 0.5;
}
article:hover {
  opacity: 1;
}
div {
  flex-wrap: wrap;
  width: 100%;
  order: 5;
  display: flex;

  justify-content: center;

  gap: 1em;
}
</style>
