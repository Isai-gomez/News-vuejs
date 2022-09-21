import axios from 'axios'
import convert from 'xml-js'
const url = 'https://www.reforma.com/rss/ciudad.xml'

export async function getApi() {
  const data = await axios.get(url)
  const result1 = convert.xml2json(data.data, { compact: true, spaces: 2 })
  const parseJson = JSON.parse(result1)
  const listNoticia = parseJson.rss.channel.item.map((item) => {
    return item
  })
  return listNoticia
}
