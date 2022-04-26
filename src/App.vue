<template>
  <div>
    <MainNav />
    <hero />
  </div>
</template>

<script>
import MainNav from "@/components/MainNav.vue";
import Hero from "@/components/Hero.vue";

export default {
  name: "App",
  //to configure components and render them
  components: {
    MainNav,
    Hero,
  },
};
</script>
