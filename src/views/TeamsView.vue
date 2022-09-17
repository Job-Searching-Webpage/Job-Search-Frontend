<template>
  <div v-if="isLoggedIn" class="flex flex-row flex-nowrap w-full">
    <team-filters-sidebar />
    <team-listings />
  </div>
  <div v-else>You have to login to see this page.</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";

import TeamFiltersSidebar from "@/components/TeamResults/TeamFiltersSidebar/TeamFiltersSidebar.vue";
import TeamListings from "@/components/TeamResults/TeamListings.vue";

export default defineComponent({
  name: "TeamsView",
  components: {
    TeamFiltersSidebar,
    TeamListings,
  },
  computed: {
    ...mapState(["isLoggedIn"]), //pulls off the isLoggedIn state from the vuex store
  },
});
</script>
