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
import axios from 'axios'
import convert from 'xml-js'
const url = 'https://www.reforma.com/rss/ciudad.xml'

export default {
  name: 'ListNews',
  data() {
    return {
      noticia: [],
    }
  },
  methods: {
    async getApi() {
      const data = await axios.get(url)
      const result1 = convert.xml2json(data.data, { compact: true, spaces: 2 })
      const parseJson = JSON.parse(result1)
      const listNoticia = parseJson.rss.channel.item.map((item) => {
        return item
      })
      return listNoticia
    },
  },
  created: async function () {
    this.noticia = await this.getApi()
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
