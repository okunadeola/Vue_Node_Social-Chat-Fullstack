<template>
  <div class="home">
    <topbar></topbar>
    <div class="homeContainer">
      <side-bar></side-bar>
      <feed></feed>
      <right-bar></right-bar>
    </div>
  </div>
</template>

<script>
import Feed from "../components/Feed.vue";
import RightBar from "../components/RightBar.vue";
import SideBar from "../components/SideBar.vue";

import Topbar from "../components/Topbar.vue";
export default {
  name: "Home",
  components: {
    Topbar,
    SideBar,
    Feed,
    RightBar,
  },
  data() {
    return {};
  },

  methods: {},
};
</script>

