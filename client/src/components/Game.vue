<template>
  <div>
    {{matchDay}}
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed:{
    ...mapGetters(["getstate"]),
  }
}
</script>

<style lang="scss" scoped>

</style>