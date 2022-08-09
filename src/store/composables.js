import { computed } from "vue";
import { useStore } from "vuex";

import { FILTERED_JOBS } from "@/store/constants";

export const useFiltererdJobs = () => {
  const store = useStore();
  return computed(() => store.getters[FILTERED_JOBS]);
};
