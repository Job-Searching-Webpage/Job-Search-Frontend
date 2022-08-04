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

<script>
import { ref } from "vue";

export default {
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

  //data() {
  //  return {
  //    isOpen: false,
  //  };
  //},
  //computed: {
  //  caretIcon() {
  //    return this.isOpen ? ["fas", "angle-up"] : ["fas", "angle-down"];
  //  },
  //},
  //methods: {
  //  open() {
  //    this.isOpen = !this.isOpen;
  //  },
  //},
};
</script>
