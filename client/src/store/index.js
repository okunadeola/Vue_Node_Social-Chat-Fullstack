import Vue from "vue";
import Vuex from "vuex";
import data from '../api/data';

Vue.use(Vuex);

const info = {
  namespaced: true,
  state: {
    matchDay: "01/02/2021",
  },
  action: {},
  getters: {
    getstate(state) {
      return state.matchDay
    }
  },
  mutations: {}
}



export default new Vuex.Store({
  
  state: {
    students: [],
    teamA: [],
    teamB: [],
  },
  mutations: {
    setStudent(state) {
      state.students = data.getStudents()
    },
    addNewMember(state, std) {
      if (std.type === "A") {
        state.teamA.push(std.student)
      } else {
        state.teamB.push(std.student)
      }
    },
    removeStudent(state, std) {
      if (std.type === "A") {
        state.teamA.splice(std.index, 1)
      } else {
        state.teamB.splice(std.index, 1)
      }
    },
    changeSelected(state, std) {
      state.students[std.index].isSelected = true
    },
    removeSelected(state, std) {
      state.students.forEach((val) => {
        val.id === std.student.id ? val.isSelected = false : ''
      })
    }   
  },
  actions: {
    getStudents(context) {
      context.commit("setStudent")
    },
    addTeamMember(context, std) {
      context.commit("changeSelected", std)
      context.commit("addNewMember", std)
    },
    removeStudent(context, std) {
      context.commit("removeStudent", std)
      context.commit("removeSelected", std)
    },
  },
  getters: {
    studentLength(state) {
      return state.students.length
    }
  },
  modules: {
    info,
  },
});
