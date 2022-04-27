<template>
  <div>
    <MainNav />
    <hero />
  </div>
</template>

<script>
import MainNav from "@/components/Navigation/MainNav.vue";
import Hero from "@/components/JobSearch/Hero.vue";

export default {
  name: "App",
  //to configure components and render them
  components: {
    MainNav,
    Hero,
  },
};
</script>
