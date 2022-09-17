<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96"
  >
    <section class="pb-5">
      <job-filters-sidebar-prompt />

      <accordion header="Skills and Qualifcations">
        <job-filters-sidebar-skills />
      </accordion>

      <accordion header="Degrees">
        <job-filters-sidebar-degrees />
      </accordion>

      <accordion header="Job Types">
        <job-filters-sidebar-job-types />
      </accordion>

      <accordion header="Organizations">
        <job-filters-sidebar-organizations />
      </accordion>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import { key } from "@/store";
import { useRoute } from "vue-router";
import {
  UPDATE_SKILLS_SEARCH_TERM,
  UPDATE_LOCATION_SEARCH_TERM,
} from "@/store/constants";

import Accordion from "@/components/Shared/Accordion.vue";

import JobFiltersSidebarPrompt from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarPrompt.vue";
import JobFiltersSidebarJobTypes from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarJobTypes.vue";
import JobFiltersSidebarDegrees from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarDegrees.vue";
import JobFiltersSidebarOrganizations from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganizations.vue";
import JobFiltersSidebarSkills from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarSkills.vue";

export default defineComponent({
  name: "JobFiltersSidebar",
  components: {
    Accordion,
    JobFiltersSidebarJobTypes,
    JobFiltersSidebarDegrees,
    JobFiltersSidebarOrganizations,
    JobFiltersSidebarSkills,
    JobFiltersSidebarPrompt,
  },
  setup() {
    const parseSkillSearchTerm = () => {
      const route = useRoute();
      const role = route.query.role || "";
      const location = route.query.location || "";
      const store = useStore(key);
      store.commit(UPDATE_SKILLS_SEARCH_TERM, role);
      store.commit(UPDATE_LOCATION_SEARCH_TERM, location);
    };
    onMounted(parseSkillSearchTerm);
  },
});
</script>
