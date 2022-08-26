<template>
  <div>
    <main-nav />
    <router-view />
    <login-modal-view v-if="showModal" overflow:auto />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";

import MainNav from "@/components/Navigation/MainNav.vue";
import LoginModalView from "./views/LoginModalView.vue";
export default defineComponent({
  name: "App",
  components: {
    MainNav,
    LoginModalView,
  },
  computed: {
    ...mapState(["showModal"]),
  },
});
</script>
