<template>
  <section class="mb-16">
    <h1
      class="font-bold tracking-tighter text-8xl mb-14"
      data-test="action-phrase"
    >
      <span :class="actionClasses">{{ action }}</span>
      for everyone
    </h1>
    <h2 class="text-3xl font-light">Find your next job at Job Search.</h2>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import nextElementInList from "@/utils/nextElementInList";
interface ActionClasses {
  [x: string]: boolean;
}
interface Data {
  action: string;
  interval: number | undefined;
}

export default defineComponent({
  name: "HeadLine",
  data(): Data {
    return {
      action: "Build",
      interval: undefined,
    };
  },
  computed: {
    actionClasses(): ActionClasses {
      return {
        [this.action.toLowerCase()]: true, //does the same thing
      };
    },
  },
  created() {
    this.changeTitle();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    changeTitle() {
      this.interval = window.setInterval(() => {
        const actions = ["Jobs", "Help", "Create", "Green"];

        this.action = nextElementInList(actions, this.action);
      }, 3000);
    },
  },
});
</script>

<style scoped>
.jobs {
  color: #1a73e8;
}
.green {
  color: #34a853;
}
.create {
  color: #f9ab00;
}
.help {
  color: #d93025;
}
</style>
