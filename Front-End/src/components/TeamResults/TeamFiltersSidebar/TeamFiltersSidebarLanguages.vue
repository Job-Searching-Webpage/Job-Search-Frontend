<template>
  <team-filters-sidebar-checkbox-group
    :unique-values="uniqueTeamLanguages"
    :mutation="ADD_SELECTED_TEAM_LANGUAGES"
    data-test="languages-filter"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { useUniqueTeamLanguages } from "@/store/composables";

import { ADD_SELECTED_TEAM_LANGUAGES } from "@/store/constants";

import TeamFiltersSidebarCheckboxGroup from "@/components/TeamResults/TeamFiltersSidebar/TeamFiltersSidebarCheckboxGroup.vue";

export default defineComponent({
  name: "TeamFiltersSidebarLanguages",
  components: {
    TeamFiltersSidebarCheckboxGroup,
  },
  setup() {
    const uniqueTeamLanguages = useUniqueTeamLanguages();
    return {
      uniqueTeamLanguages,
      ADD_SELECTED_TEAM_LANGUAGES,
    };
  },
});
</script>
