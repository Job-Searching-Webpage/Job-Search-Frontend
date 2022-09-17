<template>
  <div id="modal" class="modal-container text-white">
    <div class="modal p-4 border-black bg-brand-gray-3 rounded p-2">
      <header class="flex justify-between">
        <h2 class="text-2xl text-black border-black rounded font-bold">
          Login
        </h2>
        <button
          class="rounded p-2 hover:bg-red-700 text-base text-black font-bold"
          @click="closeModal()"
        >
          <span class="material-icons">close</span>
        </button>
      </header>
      <section>
        <div class="flex flex-col mt-2">
          <form id="create" method="post">
            <div class="mt-2">
              <label class="block text-black text-text-base font-bold"
                >Username</label
              >
              <input
                id="username"
                v-model="username"
                class="bg-white text-black rounded p-2 w-full"
                placeholder="username"
                type="text"
                name="username"
              />
            </div>
            <div class="mt-2">
              <label class="block text-black text-text-base font-bold"
                >Password</label
              >
              <div class="flex">
                <input
                  id="password"
                  v-model="password"
                  class="bg-white text-black rounded p-2 w-full mr-2"
                  placeholder="********"
                  type="password"
                  name="password"
                />
              </div>
              <div class="flex content-evenly justify-center">
                <button
                  type="button"
                  class="text-2xl text-black font-bold border-rounded border-white rounded my-5 py-5 px-20 hover:bg-green-700 text-lg"
                  @click="login()"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { mapMutations /*mapState*/ } from "vuex";
import { LOGIN_USER, CLOSE_MODAL } from "@/store/constants";
import { sha1 } from "hash-wasm";
import axios from "axios";
export default defineComponent({
  name: "LoginModalView",
  setup() {
    //const showModal = ref(false);
    const username = ref("");
    const password = ref("");

    return {
      username,
      password,
      ...mapMutations({
        loginUser: LOGIN_USER,
        closeModal: CLOSE_MODAL,
      }),
      //...mapState([isL]) to add isLoggedIn to the component and maybe email psw on state?
    };
  },
  methods: {
    async login() {
      let return_code;
      try {
        return_code = (
          await axios.post(`${process.env.VUE_APP_API_URI}/login`, {
            username: this.username,
            password: await sha1(this.password),
          })
        ).status;
      } catch (_) {
        /*eslint no-empty: "error"*/
      }

      // TODO Remove when login is implemented on the server's side
      return_code = 200;

      if (return_code && return_code < 405) {
        this.loginUser();
      }
    },
    closeModal() {
      this.closeModal();
    },
  },
});
</script>

<style>
.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(46, 39, 39, 0.493);
  z-index: 1;
}
.modal {
  position: absolute;
  min-width: 350px;
  min-height: 250px;
  background-color: rgba(61, 21, 21, 0);
  top: 50%;
  left: 50%;
  padding: 20px 40px 20px;
  transform: translate(-50%, -50%);
}
</style>
