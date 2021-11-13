<template>
  <div>
    <h1>Team {{type}}</h1>
    <ul>
      <li v-for="(student, index) in team" :key="student.id">
        {{student.name}}
        <button  @click="removeStudent({student, index, type})">&times;</button>
      </li>
    </ul>
  </div>
</template>

<script>

import {mapActions} from 'vuex'
export default {

  props : ['type'],

   computed:{
    team(){
      return this.type === "A" ? this.$store.state.teamA : this.$store.state.teamB
    }
  },

  methods:{
    ...mapActions(["removeStudent"])
    // removeStudent(student){
    //   this.$store.dispatch("removeStudent", student)
    // }
  }

}
</script>

<style lang="scss" scoped>

</style>>