<template>
  <div class="rightBar invisible md:visible">
    <div class="rightWrapper pt-5 pr-5 pb-0 pl-0">
      <div class="birthdayContainer flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-10 h-10 mr-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
            clip-rule="evenodd"
          />
          <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
        </svg>
        <span class="birthdayText font-light text-base"
          ><b>Fola</b> and <b>3 other friends</b>have birthday today</span
        >
      </div>
      <img
        src="@/assets/logo.png"
        alt="img"
        class="rightbarAd w-full rounded-xl my-7 mx-0"
      />
      <h4 class="rightbarTitle mb-5 font-medium">Online Friends</h4>
      <online-friend></online-friend>
      <online-friend></online-friend>
      <online-friend></online-friend>
      <online-friend></online-friend>
      <online-friend></online-friend>
    </div>
  </div>
</template>

<script>
import OnlineFriend from "./OnlineFriend.vue";
export default {
  components: { OnlineFriend },
};
</script>

<style>
</style>