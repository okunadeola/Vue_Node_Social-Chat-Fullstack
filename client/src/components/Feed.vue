<template>
  <div class="feed">
    <div class="feedWrapper p-5">
      <share></share>
      <div v-for="post of data" :key="post.id">
        <post></post>
      </div>
      <post></post>
      <post></post>
      <post></post>
      <post></post>
      <post></post>
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";
import Share from "./Share.vue";
import { Posts } from "../api/dummyData";
export default {
  components: {
    Share,
    Post,
  },
  data(){
    return{
      data:Posts
    }
  }
};
</script>

<style>
</style>