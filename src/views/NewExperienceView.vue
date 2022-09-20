<template>
  <div class="flex justify-center items-center mt-0">
    <div class="w-full max-w-md">
      <form class="bg-white shadow-md rounded px-10 pt-6 pb-10 mb-4">
        <h2 class="block text-gray-700 text-xl pl-3 font-bold mb-2">
          New Experience
        </h2>
        <div class="codicefiscale-input mb-4">
          <label
            for="codicefiscale"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
            Codicefiscale or the worker</label
          >
          <input
            id="codicefiscale"
            v-model="codicefiscale"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="UNIVR"
          />
        </div>
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
            @click="submitExperience()"
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
    <div class="w-full max-w-md">
      <form class="bg-white shadow-md rounded px-10 pt-6 pb-10 mb-4">
        <h2 class="block text-gray-700 text-xl pl-3 font-bold mb-2">
          New Back-up Person
        </h2>

        <div class="CodiceFiscale-input mb-4">
          <label
            for="CodiceFiscale"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
            CodiceFiscale</label
          >
          <input
            id="CodiceFiscale"
            v-model="CodiceFiscale"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="CF of the person that is backing up"
          />
        </div>

        <div class="name-input mb-4">
          <label for="name" class="block text-gray-700 text-sm font-bold mb-2">
            Name</label
          >
          <input
            id="name"
            v-model="name"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Human"
          />
        </div>

        <div class="cognome-input mb-4">
          <label
            for="cognome"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
            Cognome</label
          >
          <input
            id="cognome"
            v-model="cognome"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Being"
          />
        </div>

        <div class="email-input mb-4">
          <label for="email" class="block text-gray-700 text-sm font-bold mb-2">
            Email</label
          >
          <input
            id="email"
            v-model="email"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="homo@sapiens.com"
          />
        </div>

        <div class="phone-input mb-4">
          <label for="phone" class="block text-gray-700 text-sm font-bold mb-2">
            Phone</label
          >
          <input
            id="phone"
            v-model="phone"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="000 0000000"
          />
        </div>

        <div class="flex items-center justify-between">
          <button
            class="bg-blue-600 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            @click="submitBackUpPerson()"
          >
            Submit new Back Up Person
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
    const CodiceFiscaleExp = ref("");
    const Azienda = ref("");
    const Periodo = ref("");
    const Role = ref("");
    const Luogo = ref("");
    const Payment = ref("");

    const CodiceFiscale = ref("");
    const name = ref("");
    const cognome = ref("");
    const email = ref("");
    const phone = ref("");

    return {
      CodiceFiscaleExp,
      Azienda,
      Periodo,
      Role,
      Luogo,
      Payment,

      CodiceFiscale,
      name,
      cognome,
      email,
      phone,
    };
  },
  methods: {
    async submitExperience() {
      let return_code;
      const baseUrl = process.env.VUE_APP_API_URL;

      try {
        return_code = (
          await axios.post(`${baseUrl}/team/experience/new/submit`, {
            CodiceFiscale: this.CodiceFiscaleExp,
            Azienda: this.Azienda,
            Periodo: this.Periodo,
            Role: this.Role,
            Luogo: this.Luogo,
            Payment: this.Payment,
          })
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
    async submitBackUpPerson() {
      let return_code;
      const baseUrl = process.env.VUE_APP_API_URL;

      try {
        return_code = (
          await axios.post(`${baseUrl}/team/backup/new/submit`, {
            CodiceFiscale: this.CodiceFiscale,
            name: this.name,
            cognome: this.cognome,
            email: this.email,
            phone: this.phone,
          })
        ).status;
      } catch (_) {
        /*eslint no-empty: "error"*/
      }

      // TODO Remove when login is implemented on the server's side
      return_code = 200;

      if (return_code && return_code == 200) {
        alert("Backup Person added successfully");
      } else {
        alert("Error on adding a new Backup Person");
      }
    },
  },
});
</script>
