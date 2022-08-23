<template>
  <div class="flex flex-row flex-nowrap w-full">
    <team-filters-sidebar />
    <team-listings />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import TeamFiltersSidebar from "@/components/TeamResults/TeamFiltersSidebar/TeamFiltersSidebar.vue";
import TeamListings from "@/components/TeamResults/TeamListings.vue";

export default defineComponent({
  name: "TeamsView",
  components: {
    TeamFiltersSidebar,
    TeamListings,
  },
});
</script>
