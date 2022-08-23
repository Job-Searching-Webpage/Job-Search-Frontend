<template>
  <div class="mt-5">
    <input
      v-model.lazy.trim="jobSearchTerm"
      class="p-3 h-12 border border-solid border-brand-gray-1 shadow-gray rounded w-full text-base"
      placeholder="Programmer, Banker"
      data-test="job-search-input"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { key } from "@/store";
import { UPDATE_JOB_SEARCH_TERM } from "@/store/constants";

export default defineComponent({
  name: "TeamFiltersSidebarJob",
  setup() {
    const store = useStore(key);
    const jobSearchTerm = computed({
      get() {
        return store.state.jobSearchTerm;
      },
      set(value) {
        store.commit(UPDATE_JOB_SEARCH_TERM, value);
      },
    });
    return {
      jobSearchTerm,
    };
  },
});
</script>
