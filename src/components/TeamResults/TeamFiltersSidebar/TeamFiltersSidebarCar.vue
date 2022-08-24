<template>
  <team-filters-sidebar-checkbox-group
    :unique-values="uniqueCar"
    :mutation="ADD_SELECTED_CAR"
    data-test="car-filter"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { useUniqueCar } from "@/store/composables";

import { ADD_SELECTED_CAR } from "@/store/constants";

import TeamFiltersSidebarCheckboxGroup from "@/components/TeamResults/TeamFiltersSidebar/TeamFiltersSidebarCheckboxGroup.vue";

export default defineComponent({
  name: "TeamFiltersSidebarCar",
  components: {
    TeamFiltersSidebarCheckboxGroup,
  },
  setup() {
    const uniqueCar = useUniqueCar();
    return {
      uniqueCar,
      ADD_SELECTED_CAR,
    };
  },
});
</script>
