<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto bg-white border-b border-solid border-brand-gray-1"
      >
        <router-link
          :to="{ name: 'Home' }"
          class="flex items-center h-full text-xl"
          >Job Search LTD
        </router-link>
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.text"
              class="h-full ml-9 first:ml-0"
              data-test="main-nav-list-item"
            >
              <router-link
                :to="menuItem.url"
                class="flex items-center h-full py-2.5"
              >
                {{ menuItem.text }}
              </router-link>
            </li>
          </ul>
        </nav>

        <div class="flex items-center h-full ml-auto">
          <profile-image v-if="isLoggedIn" data-test="profile-image" />
          <action-button
            v-else
            text="Sign in"
            data-test="login-button"
            @click="LOGIN_USER()"
          />
        </div>
      </div>

      <sub-navigation
        v-if="isLoggedIn && onJobResultsPage"
        data-test="subnav"
      />
      <sub-navigation
        v-if="isLoggedIn && onTeamsPage"
        data-test="subnav-teams"
      />
      <sub-admin-navigation
        v-if="isLoggedIn && onLandingPage"
        bg-white
        border-b
        border-solid
        border-brand-gray-1
        data-test="subnav-admin"
      >
        <ul
          class="flex h-full p-0 ml-5 list-none bg-white border-b border-solid border-brand-gray-1"
        >
          <li
            v-for="adminItem in adminItems"
            :key="adminItem.text"
            class="h-full ml-9 first:ml-2"
            data-test="main-nav-list-item"
          >
            <router-link
              :to="adminItem.url"
              class="flex items-center h-full py-2.5"
            >
              {{ adminItem.text }}
            </router-link>
          </li>
        </ul>
      </sub-admin-navigation>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapMutations, mapState } from "vuex";

import useConfirmRoute from "@/composables/useConfirmRoute";

import ActionButton from "@/components/Shared/ActionButton.vue";
import ProfileImage from "@/components/Navigation/ProfileImage.vue";
import SubNavigation from "@/components/Navigation/SubNavigation.vue";
import { LOGIN_USER } from "@/store/constants";

export default defineComponent({
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    SubNavigation,
  },
  data() {
    const onJobResultsPage = useConfirmRoute("JobResults");
    const onLandingPage = useConfirmRoute("Home");
    const onTeamsPage = useConfirmRoute("Teams");

    return {
      menuItems: [
        //{ text: "Locations", url: "/" },
        //{ text: "Life at Job Search LTD", url: "/" },
        //{ text: "How we hire", url: "/" },
        //{ text: "Students", url: "/" },
        { text: "Jobs", url: "/jobs/results" },
      ],
      adminItems: [
        { text: "Teams", url: "/teams" },
        { text: "Add new applicant", url: "/applicant/new" },
        { text: "Add new job offer", url: "/jobs/new" },
      ],
      onJobResultsPage,
      onLandingPage,
      onTeamsPage,
    };
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
    ...mapState(["isLoggedIn"]), //pulls off the isLoggedIn state from the vuex store
  },
  methods: {
    ...mapMutations([LOGIN_USER]),
  },
});
</script>
