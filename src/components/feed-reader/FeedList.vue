<template>
  <div>
    <h2 class="mb-4">Feed List</h2>

    <ul v-if="feeds && feeds.length" class="list-reset sticky pin-t border-b border-gray">
      <li v-for="feed in feeds" :key="feed.title">
        <a
          @click="selectFeed(feed)"
          href="#"
          class="no-underline p-2 block border-grey border border-b-0 text-teal hover:bg-teal-100"
        >{{ feed.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["feeds"],

  methods: {
    selectFeed(feed) {
      this.$emit("onSelectFeed", feed);
    }
  }
};
</script>