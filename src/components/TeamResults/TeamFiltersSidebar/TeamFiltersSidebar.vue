<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96"
  >
    <section class="pb-5">
      <team-filters-sidebar-prompt />

      <accordion header="Name">
        <team-filters-sidebar-name />
      </accordion>

      <accordion header="Qualifications">
        <team-filters-sidebar-qualifications />
      </accordion>

      <accordion header="Languages">
        <team-filters-sidebar-languages />
      </accordion>

      <accordion header="Location">
        <team-filters-sidebar-locations />
      </accordion>

      <accordion header="Period of Disponibility">
        <team-filters-sidebar-period />
      </accordion>

      <accordion header="Job type">
        <team-filters-sidebar-job />
      </accordion>

      <accordion header="Driving License">
        <team-filters-sidebar-patenta />
      </accordion>

      <accordion header="Owns a car">
        <team-filters-sidebar-car />
      </accordion>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Accordion from "@/components/Shared/Accordion.vue";

import TeamFiltersSidebarPrompt from "@/components/TeamResults/TeamFiltersSidebar/TeamFiltersSidebarPrompt.vue";
import TeamFiltersSidebarLanguages from "@/components/TeamResults/TeamFiltersSidebar/TeamFiltersSidebarLanguages.vue";
import TeamFiltersSidebarQualifications from "@/components/TeamResults/TeamFiltersSidebar/TeamFiltersSidebarQualifications.vue";
import TeamFiltersSidebarLocations from "@/components/TeamResults/TeamFiltersSidebar/TeamFiltersSidebarLocations.vue";
import TeamFiltersSidebarName from "@/components/TeamResults/TeamFiltersSidebar/TeamFiltersSidebarName.vue";
import TeamFiltersSidebarPeriod from "@/components/TeamResults/TeamFiltersSidebar/TeamFiltersSidebarPeriod.vue";
import TeamFiltersSidebarJob from "@/components/TeamResults/TeamFiltersSidebar/TeamFiltersSidebarJob.vue";
import TeamFiltersSidebarPatenta from "@/components/TeamResults/TeamFiltersSidebar/TeamFiltersSidebarPatenta.vue";
import TeamFiltersSidebarCar from "./TeamFiltersSidebarCar.vue";

export default defineComponent({
  name: "TeamFiltersSidebar",
  components: {
    Accordion,
    TeamFiltersSidebarLanguages,
    TeamFiltersSidebarQualifications,
    TeamFiltersSidebarLocations,
    TeamFiltersSidebarName,
    TeamFiltersSidebarPrompt,
    TeamFiltersSidebarPeriod,
    TeamFiltersSidebarJob,
    TeamFiltersSidebarPatenta,
    TeamFiltersSidebarCar,
  },
});
</script>
