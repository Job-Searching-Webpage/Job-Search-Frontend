<template>
  <div
    v-show="showModal"
    class="modal fade fixed top-50 left-50 hidden w-full h-full outline-none"
  >
    <div class="modal-dialog relative w-auto pointer-events-none">
      <div
        class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
      >
        <div class="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
          <h3 class="text-xl font-medium text-gray-900 dark:text-white">
            Sign in to our platform
          </h3>
          <div>
            <div class="mb-2 block">
              <label for="email" value="Your email" />
            </div>
            <input
              id="email"
              v-model.lazy.trim="email"
              class="p-3 h-12 border border-solid border-brand-gray-1 shadow-gray rounded w-full text-base"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <div class="mb-2 block">
              <label for="password" value="Your password" />
            </div>
            <input
              id="password"
              v-model.lazy="password"
              class="p-3 h-12 border border-solid border-brand-gray-1 shadow-gray rounded w-full password-input text-base"
              type="password"
              placeholder="••••••••••••"
              required
            />
          </div>

          <div class="flex items-center h-full ml-auto w-full">
            <action-button
              text="Sign in"
              data-test="login-button"
              @click="LOGIN_USER()"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { mapMutations /*mapState*/ } from "vuex";

import ActionButton from "@/components/Shared/ActionButton.vue";
import { LOGIN_USER } from "@/store/constants";
export default defineComponent({
  name: "LoginModalView",
  components: {
    ActionButton,
  },
  setup() {
    //const showModal = ref(false);
    const email = ref("");
    const password = ref("");

    return {
      email,
      password,
      ...mapMutations([LOGIN_USER]),
      //...mapState([isL]) to add isLoggedIn to the component and maybe email psw on state?
    };
  },
});
</script>
