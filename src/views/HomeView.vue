<template>
  <hero />
</template>

<script lang="ts">
import { defineComponent } from "vue";
// @ is an alias to /src
import Hero from "@/components/JobSearch/Hero.vue";
export default defineComponent({
  name: "HomeView",
  components: {
    Hero,
  },
});
</script>
