<template>
  <div id="modal" class="modal-container text-white">
    <div class="modal bg-th-card p-4 rounded">
      <header class="flex justify-between">
        <h2 class="text-2xl font-bold">Create new logger</h2>
        <button class="modal-close" onClick="closeModal()">
          <span class="material-icons">close</span>
        </button>
      </header>
      <section>
        <div class="flex flex-col mt-2">
          <form id="create" method="post">
            <div class="mt-2">
              <label class="block text-sm font-bold">Logger name</label>
              <input
                id="username"
                class="bg-white text-black rounded p-2 w-full"
                type="text"
                name="username"
              />
            </div>
            <div class="mt-2">
              <label class="block text-sm font-bold">Api key</label>
              <div class="flex">
                <input
                  id="key"
                  class="bg-white text-black rounded p-2 w-full mr-2"
                  type="text"
                  name="key"
                />
                <button
                  onclick="fillKey()"
                  type="button"
                  class="border border-white rounded p-2 hover:bg-green-700 text-xs"
                >
                  Random
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <footer class="flex justify-center mt-2 space-x-1">
        <button
          onclick="closeModal()"
          class="border border-white rounded p-2 hover:bg-yellow-700"
        >
          Close
        </button>
        <button
          onclick="submitForm()"
          class="border border-white rounded p-2 hover:bg-th-primary"
        >
          Add
        </button>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { mapMutations /*mapState*/ } from "vuex";
import { LOGIN_USER } from "@/store/constants";
export default defineComponent({
  name: "LoginModalView",
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
  background-color: rgba(61, 21, 21, 0);
  top: 50%;
  left: 50%;
  padding: 20px 40px 20px;
  transform: translate(-50%, -50%);
}
</style>
