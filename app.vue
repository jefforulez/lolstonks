
<script setup lang="ts">

import { Icon } from '@iconify/vue'

import StockTSLA from '@/components/StockTSLA.vue'

const title = 'lol stonks'
const description = "ok you know it's unfair, tell us what happened"

const ogImageUrl = 'https://res.cloudinary.com/rulez-new-media/image/upload/c_fill,w_1200,h_630/e_overlay,l_text:Arial_200:lol%20stonks/lolstonks/elon_aca85b.jpg'
const twitterImageUrl = 'https://res.cloudinary.com/rulez-new-media/image/upload/c_fill,w_1200,h_630/e_overlay,l_text:Arial_200:lol%20stonks/lolstonks/elon_aca85b.jpg'

useHead({
  title,
  meta: [
    { name: 'description', content: description },

    // opengraph
    { property: 'og:type',         content: 'website' },
    { property: 'og:title',        content: title },
    { property: 'og:description',  content: description },
    { property: 'og:image',        content: ogImageUrl },
    { property: 'og:image:width',  content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt',    content: title },
    { property: 'og:url',          content: 'https://www.lolstonks.com/' },
    { property: 'og:locale',       content: 'en_US' },

    // twitter
    { name: 'twitter:card',         content: 'summary' },
    { name: 'twitter:twitter:site', content: '@jefforulez' },
    { name: 'twitter:title',        content: title },
    { name: 'twitter:description',  content: description },
    { name: 'twitter:image',        content: twitterImageUrl },
  ],
  link: [
    { rel: 'canonical', href: 'https://www.lolstonks.com/' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://resources.stockdio.com' },
  ],
  htmlAttrs: {
    lang: 'en',
  },
  script: [
    {
      src: 'https://platform.twitter.com/widgets.js',
      defer: true,
      body: true,
    }
  ],
})

</script>


<template>
<div>
  <h2>lol stonks</h2>

  <div class="column">

    <div class="item">
      <nuxt-img
        src="/lolstonks/elon_aca85b.jpg"
        class="image"
        fit="cover"
        preload
        height="600"
        width="1000"
        alt="elon says lol stonks"
        />
    </div>

    <div class="item">
      <blockquote class="twitter-tweet">
      <p lang="und" dir="ltr">lol</p>&mdash; Elon Musk (@elonmusk) <a href="https://twitter.com/elonmusk/status/1271016684489281536?ref_src=twsrc%5Etfw">June 11, 2020</a>
      </blockquote>
    </div>

    <div class="item">
      <StockTSLA />
    </div>

    <div class="item">
      <blockquote class="twitter-tweet">
      <p lang="en" dir="ltr">Stonks</p>&mdash; Elon Musk (@elonmusk) <a href="https://twitter.com/elonmusk/status/1271019765138518016?ref_src=twsrc%5Etfw">June 11, 2020</a>
      </blockquote>
    </div>

    <div class="item">
      <a href="https://github.com/jefforulez/lolstonks" target="_blank">
      <Icon icon="bi:graph-down-arrow" color="white" width="24" height="24" />
      </a>
    </div>

  </div>
</div>
</template>


<style>
  @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300;400&display=swap");

  body {
    background: #000000;
    color: #ffffff;
    font-family: "Oswald", serif;
  }
</style>

<style scoped>

h2 {
  margin: 5vh 0 5vh 0;
  text-align: center;

  font-size: 4vh;
  font-weight: 300;
  line-height: 1.25;
}

.column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  align-content: center;
}

.item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  align-content: center;

  width: 50%;
  min-width: 50%;
  margin-bottom: 5vh;
}

.item > .image {
  width: 60vw;
}

/* tablet */
@media (max-width: 991px) {
}

/* mobile landscape */
@media (max-width: 767px) {
  .item {
    width: 90vw;
  }
  .item > .image {
    width: 90vw;
  }
}

/* mobile portrait */
@media (max-width: 478px) {
}

</style>
