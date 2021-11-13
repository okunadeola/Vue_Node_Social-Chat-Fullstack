<template>
  <div class="home">
    <span>hi everyone {{name}} {{$store.state.egg}} </span>
  </div>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
  },
  data(){
    return{
      name: 'ola'
    }
  },

  methods:{

  },
};
</script>
