<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <team-listing
        v-for="team in displayedTeams"
        :key="team.id"
        :team="team"
        data-test="team-listing"
      />
    </ol>

    <div class="mt-8 mx-auto">
      <div class="flex flex-row flex-nowrap">
        <p class="text-sm flex-grow">Page {{ currentPage }}</p>

        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            :to="{ name: 'Teams', query: { page: previousPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            data-test="previous-page-link"
            >Previous</router-link
          >

          <router-link
            v-if="nextPage"
            :to="{ name: 'Teams', query: { page: nextPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            data-test="next-page-link"
            >Next</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { computed, onMounted, defineComponent } from "vue";

import useCurrentPage from "@/composables/useCurrentPage";
import usePreviousAndNextPages from "@/composables/usePreviousAndNextPages";
import {
  useFilteredTeams,
  useFetchTeamsDispatch,
  //useFetchDegreesDispatch,
} from "@/store/composables";
import TeamListing from "@/components/TeamResults/TeamListing.vue";

export default defineComponent({
  name: "TeamListings",
  components: {
    TeamListing,
  },
  setup() {
    onMounted(useFetchTeamsDispatch);
    //onMounted(useFetchDegreesDispatch);

    const filteredTeams = useFilteredTeams();

    const currentPage = useCurrentPage();

    const maxPage = computed(() => Math.ceil(filteredTeams.value.length / 10));
    const { previousPage, nextPage } = usePreviousAndNextPages(
      currentPage,
      maxPage
    );

    const displayedTeams = computed(() => {
      const pageNumber = currentPage.value;
      const firstTeamIndex = (pageNumber - 1) * 10;
      const lastTeamIndex = pageNumber * 10;
      return filteredTeams.value.slice(firstTeamIndex, lastTeamIndex);
    });

    return { displayedTeams, previousPage, currentPage, nextPage };
  },
});
</script>
