<template>
  <div class="w-full h-16 bg-white border-b border-solid border-brand-gray-1">
    <div class="flex items-center h-full px-8">
      <div v-if="onJobResultsPage" data-test="job-count">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span>
          <span class="text-brand-green-1">
            {{ FILTERED_JOBS.length }}
          </span>
          jobs matched
        </span>
      </div>
      <div v-if="onTeamsPage" data-test="team-count">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span>
          <span class="text-brand-green-1">
            {{ FILTERED_TEAMS.length }}
          </span>
          workers found
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import useConfirmRoute from "@/composables/useConfirmRoute";

import { useFilteredJobs, useFilteredTeams } from "@/store/composables";
export default defineComponent({
  name: "SubNavigation",
  setup() {
    const FILTERED_JOBS = useFilteredJobs();
    const FILTERED_TEAMS = useFilteredTeams();

    const onJobResultsPage = useConfirmRoute("JobResults");
    const onTeamsPage = useConfirmRoute("Teams");

    return {
      onJobResultsPage,
      onTeamsPage,
      FILTERED_JOBS,
      FILTERED_TEAMS,
    };
  },
});
</script>
