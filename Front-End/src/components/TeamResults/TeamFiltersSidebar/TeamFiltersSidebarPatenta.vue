<template>
  <team-filters-sidebar-checkbox-group
    :unique-values="uniquePatenta"
    :mutation="ADD_SELECTED_PATENTA"
    data-test="patenta-filter"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { useUniquePatenta } from "@/store/composables";

import { ADD_SELECTED_PATENTA } from "@/store/constants";

import TeamFiltersSidebarCheckboxGroup from "@/components/TeamResults/TeamFiltersSidebar/TeamFiltersSidebarCheckboxGroup.vue";

export default defineComponent({
  name: "TeamFiltersSidebarPatenta",
  components: {
    TeamFiltersSidebarCheckboxGroup,
  },
  setup() {
    const uniquePatenta = useUniquePatenta();
    return {
      uniquePatenta,
      ADD_SELECTED_PATENTA,
    };
  },
});
</script>
