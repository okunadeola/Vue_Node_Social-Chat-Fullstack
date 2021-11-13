<template>
  <div>

    <ul>
      <h1>{{studentLength}}</h1>
      <li v-for="(student, index) in students" :key="student.id">
        {{student.name}}
        <i>{{student.games.length}} games he plays</i>
        <button :disabled="student.isSelected"  @click="addTeamMember({student, type:'A', index})">Team A</button>
        <button :disabled="student.isSelected" @click="addTeamMember({student, type:'B', index})">Team B</button>
      </li>
    </ul>

    <hr>

   <teamComponent type="A">TEAM A</teamComponent> <br>
   <teamComponent type="B">TEAM B</teamComponent> 
   <Game></Game>

  </div>
</template>


<script>

import TeamComponent from './TeamComponent';
import Game from './Game';
import {mapState, mapActions, mapGetters} from 'vuex'
export default ({
  name: "Student",
  components:{TeamComponent, Game},

  computed:{
    // students(){
    //  return this.$store.state.students
    // }
    ...mapState(["students"]),
    ...mapGetters(['studentLength'])
  },

  methods : {
    // addTeam(std){
    //   this.$store.dispatch("addTeamMember", std)
    // }

    ...mapActions(["addTeamMember"])

  },
  created(){
    this.$store.dispatch("getStudents")
  }
})
</script>
