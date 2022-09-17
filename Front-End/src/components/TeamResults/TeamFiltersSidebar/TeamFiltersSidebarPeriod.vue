<template>
  <div class="mt-5">
    <input
      v-model.lazy.trim="periodSearchTerm"
      class="p-3 h-12 border border-solid border-brand-gray-1 shadow-gray rounded w-full text-base"
      placeholder="3 months, 6 months, 1 year, etc."
      data-test="period-search-input"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { key } from "@/store";
import { UPDATE_PERIOD_SEARCH_TERM } from "@/store/constants";

export default defineComponent({
  name: "TeamFiltersSidebarPeriod",
  setup() {
    const store = useStore(key);
    const periodSearchTerm = computed({
      get() {
        return store.state.periodSearchTerm;
      },
      set(value) {
        store.commit(UPDATE_PERIOD_SEARCH_TERM, value);
      },
    });
    return {
      periodSearchTerm,
    };
  },
});
</script>
