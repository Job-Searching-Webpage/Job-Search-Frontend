<template>
  <team-filters-sidebar-checkbox-group
    :unique-values="uniqueQualifications"
    :mutation="ADD_SELECTED_QUALIFICATIONS"
    data-test="qualifications-filter"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { useUniqueQualifications } from "@/store/composables";

import { ADD_SELECTED_QUALIFICATIONS } from "@/store/constants";

import TeamFiltersSidebarCheckboxGroup from "@/components/TeamResults/TeamFiltersSidebar/TeamFiltersSidebarCheckboxGroup.vue";

export default defineComponent({
  name: "TeamFiltersSidebarDegrees",
  components: {
    TeamFiltersSidebarCheckboxGroup,
  },
  setup() {
    const uniqueQualifications = useUniqueQualifications();

    return {
      uniqueQualifications,
      ADD_SELECTED_QUALIFICATIONS,
    };
  },
});
</script>
