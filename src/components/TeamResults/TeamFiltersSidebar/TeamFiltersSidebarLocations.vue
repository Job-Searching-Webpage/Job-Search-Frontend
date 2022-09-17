<template>
  <team-filters-sidebar-checkbox-group
    :unique-values="uniqueLocations"
    :mutation="ADD_SELECTED_LOCATIONS"
    data-test="locations-filter"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { useUniqueLocations } from "@/store/composables";

import { ADD_SELECTED_LOCATIONS } from "@/store/constants";

import TeamFiltersSidebarCheckboxGroup from "@/components/TeamResults/TeamFiltersSidebar/TeamFiltersSidebarCheckboxGroup.vue";

export default defineComponent({
  name: "TeamFiltersSidebarLocations",
  components: {
    TeamFiltersSidebarCheckboxGroup,
  },
  setup() {
    const uniqueLocations = useUniqueLocations();
    return {
      uniqueLocations,
      ADD_SELECTED_LOCATIONS,
    };
  },
});
</script>
