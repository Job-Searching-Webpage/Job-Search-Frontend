<template>
  <div>Team Page for job {{ currentTeamId }}}</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import { useRoute } from "vue-router";
export default defineComponent({
  name: "TeamView",
  setup() {
    const route = useRoute();
    const currentTeamId = route.params.id;

    return { currentTeamId };
  },
});
</script>
