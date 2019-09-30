<template>
  <div v-if="article">
    <h2 class="mb-4">{{ article.title }}</h2>
    <img class="mb-4" :src="article.image" />

    <div class="mb-4" v-html="article.contentSnippet" />
    <a
      :href="article.link"
      target="_blank"
      rel="noopener"
      class="inline-block bg-blue-500 hover:bg-teal-500 text-white font-bold py-2 px-4 no-unerline"
    >View Original</a>
  </div>
</template>

<script>
export default {
  props: ["article"]
};
</script>