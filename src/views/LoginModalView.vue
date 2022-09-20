<template>
  <div id="modal" class="modal-container text-white">
    <div class="modal p-4 border-black rounded p-10">
      <header class="flex justify-between">
        <h2 class="text-2xl text-black border-black rounded font-bold">
          Login
        </h2>
        <button
          class="rounded p-2 text-2xl text-black font-bold px-4 hover:bg-red-500 hover:text-white"
          @click="closeModal()"
        >
          <span class="material-icons">X</span>
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
                class="bg-brand-gray-1 text-black rounded p-4 w-full"
                placeholder="username"
                type="text"
                name="username"
              />
            </div>
            <div class="mt-10">
              <label class="block text-black text-text-base font-bold"
                >Password</label
              >
              <div class="flex">
                <input
                  id="password"
                  v-model="password"
                  class="bg-brand-gray-1 text-black rounded p-4 w-full mr-2"
                  placeholder="********"
                  type="password"
                  name="password"
                />
              </div>
              <div class="flex content-evenly justify-center">
                <button
                  type="button"
                  class="text-2xl text-white font-bold border-rounded border-white rounded my-5 py-5 px-20 bg-brand-blue-1 hover:bg-brand-blue-2 text-lg"
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
      const baseUrl = process.env.VUE_APP_API_URL;

      try {
        return_code = (
          await axios.get(`${baseUrl}/signin`, {
            params: {
              username: this.username,
              psw: await sha1(this.password),
            },
          })
        ).status;
      } catch (_) {
        /*eslint no-empty: "error"*/
      }

      // TODO Remove when login is implemented on the server's side

      if (return_code && return_code == 200) {
        this.loginUser();
      } else {
        alert("Wrong username or password");
      }
      this.loginUser();
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
  min-width: 500px;
  min-height: 400px;
  background-color: white;
  top: 50%;
  left: 50%;
  padding: 20px 40px 20px;
  transform: translate(-50%, -50%);
}
</style>
