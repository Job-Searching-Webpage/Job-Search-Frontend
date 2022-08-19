<template>
  <div
    class="w-full h-16 bg-white border-b-blue border-solid border-brand-gray-2"
  >
    <div class="flex items-center h-full px-8">
      <div v-if="onLandingPage" data-test="admin-menu">
        <span>Admin</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import useConfirmRoute from "@/composables/useConfirmRoute";

export default defineComponent({
  name: "SubAdminNavigation",
  setup() {
    const onLandingPage = useConfirmRoute("Home");

    return {
      onLandingPage,
    };
  },
});
</script>
