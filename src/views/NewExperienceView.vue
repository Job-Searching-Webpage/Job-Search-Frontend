<template>
  <div class="flex justify-center items-center mt-0">
    <div class="w-full max-w-md">
      <form class="bg-white shadow-md rounded px-10 pt-6 pb-10 mb-4">
        <div class="azienda-input mb-4">
          <label
            for="azienda"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
            Azienda</label
          >
          <input
            id="azienda"
            v-model="Azienda"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="UNIVR"
          />
        </div>

        <div class="periodo-input mb-4">
          <label
            for="periodo"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
            Periodo</label
          >
          <input
            id="periodo"
            v-model="Periodo"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="1 year"
          />
        </div>

        <div class="duties-input mb-4">
          <label
            for="duties"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
            Role</label
          >
          <input
            id="duties"
            v-model="Role"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Analytical Chemist"
          />
        </div>

        <div class="luogo-input mb-4">
          <label for="luogo" class="block text-gray-700 text-sm font-bold mb-2">
            Luogo</label
          >
          <input
            id="luogo"
            v-model="Luogo"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Verona"
          />
        </div>

        <div class="payment-input mb-4">
          <label
            for="payment"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
            Payment</label
          >
          <input
            id="payment"
            v-model="Payment"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="€500"
          />
        </div>

        <div class="flex items-center justify-between">
          <button
            class="bg-blue-600 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            @click="submit()"
          >
            Submit new experience
          </button>
          <a
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Cancel
          </a>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "axios";

export default defineComponent({
  setup() {
    const Azienda = ref("");
    const Periodo = ref("");
    const Role = ref("");
    const Luogo = ref("");
    const Payment = ref("");

    return {
      Azienda,
      Periodo,
      Role,
      Luogo,
      Payment,
    };
  },
  methods: {
    async submit() {
      let return_code;
      try {
        return_code = (
          await axios.post(
            `${process.env.VUE_APP_API_URI}/team/experience/new/submit`,
            {
              Azienda: this.Azienda,
              Periodo: this.Periodo,
              Role: this.Role,
              Luogo: this.Luogo,
              Payment: this.Payment,
            }
          )
        ).status;
      } catch (_) {
        /*eslint no-empty: "error"*/
      }

      // TODO Remove when login is implemented on the server's side
      return_code = 200;

      if (return_code && return_code < 405) {
        console.log("Experience submitted");
      }
    },
  },
});
</script>
