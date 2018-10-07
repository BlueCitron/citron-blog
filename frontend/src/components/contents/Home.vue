<template>
<v-container>
  <v-layout justify-center align-center class="mt-1">
    <v-flex md12>
      <v-carousel hide-delimiters>
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
      </v-carousel>
    </v-flex>
  </v-layout>
</v-container>
</template>
<script>
export default {
  data: () => ({
    items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          },
          {
            src: 'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-318271.jpg'
          }
        ]
  })
}
</script>
