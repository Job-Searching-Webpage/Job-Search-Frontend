<template>
  <div class="flex flex-row justify-between">
    <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
    <div class="flex items-center text-sm">
      <action-button
        text="Clear filters"
        type="secondary"
        data-test="clear-user-team-filters"
        @click="clearUserTeamFilterSelections"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { key } from "@/store";

import ActionButton from "@/components/Shared/ActionButton.vue";

import { CLEAR_USER_TEAM_FILTER_SELECTIONS } from "@/store/constants";

export default defineComponent({
  namme: "TeamFiltersSidebarPrompt",
  components: {
    ActionButton,
  },
  setup() {
    const store = useStore(key);

    const clearUserTeamFilterSelections = () => {
      store.commit(CLEAR_USER_TEAM_FILTER_SELECTIONS);
    };

    return {
      clearUserTeamFilterSelections,
    };
  },
});
</script>
