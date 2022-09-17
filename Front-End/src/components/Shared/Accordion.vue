<template>
  <div class="py-5 border-b border-solid border-brand-gray-2">
    <div
      class="flex flex-wrap items-center justify-between cursor-pointer"
      data-test="clickable-area"
      @click="open"
    >
      <h3 class="flex-base font-semibold">{{ header }}</h3>
      <font-awesome-icon :icon="isOpen ? 'angle-up' : 'angle-down'" />
    </div>
    <div v-if="isOpen" class="w-full mt-5">
      <slot>
        <p>Whoops, somebody forgot to populate me!</p>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "Accordion",
  props: {
    header: {
      type: String,
      required: true,
    },
  },
  setup() {
    const isOpen = ref(false);
    const open = () => {
      isOpen.value = !isOpen.value;
    };
    return {
      open,
      isOpen,
    };
  },
});
</script>
