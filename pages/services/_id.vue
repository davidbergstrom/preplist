<script>
import { getPlanItems } from '../../api'

export default {
  computed: {
    songTitles() {
      const songTitles = []
      const songItems = this.items.filter(
        (i) => i.relationships?.song?.data?.type === 'Song'
      )
      songItems.forEach((i) => songTitles.push(i.attributes?.title))
      return songTitles
    },
  },
  data() {
    return {
      items: [],
    }
  },
  async created() {
    try {
      this.items = await getPlanItems(this.$route.params.id)
    } catch (err) {
      console.log(err)
    }
  },
}
</script>

<template>
  <div>
    <!-- list song titles and tempos for this set -->
    <h2>Songs</h2>
    <p v-for="item in songTitles" :key="item.id">
      {{ item }}
    </p>
    <p v-if="!songTitles.length">No songs</p>
  </div>
</template>

<style>
</style>