<template>
  <team-filters-sidebar-checkbox-group
    :unique-values="uniqueDisponibilities"
    :mutation="ADD_SELECTED_DISPONIBILITY"
    data-test="disponibility-filter"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { useUniqueDisponibilities } from "@/store/composables";

import { ADD_SELECTED_DISPONIBILITY } from "@/store/constants";

import TeamFiltersSidebarCheckboxGroup from "@/components/TeamResults/TeamFiltersSidebar/TeamFiltersSidebarCheckboxGroup.vue";

export default defineComponent({
  name: "TeamFiltersSidebarDisponibility",
  components: {
    TeamFiltersSidebarCheckboxGroup,
  },
  setup() {
    const uniqueDisponibilities = useUniqueDisponibilities();
    return {
      uniqueDisponibilities,
      ADD_SELECTED_DISPONIBILITY,
    };
  },
});
</script>
