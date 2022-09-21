<template>
  <div class="flex justify-center items-center mt-0">
    <div class="w-full max-w-xl">
      <form class="bg-white shadow-md rounded px-12 pt-6 pb-12 mb-4">
        <h2 class="block text-gray-700 text-xl font-bold mb-2">
          New Applicant
        </h2>
        <div class="CF-input mb-4">
          <label for="CF" class="block text-gray-700 text-sm font-bold mb-2">
            CodiceFiscale</label
          >
          <input
            id="CF"
            v-model="CF"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="LLSLJM2...."
          />
        </div>

        <div class="id-input mb-4">
          <label for="id" class="block text-gray-700 text-sm font-bold mb-2">
            id</label
          >
          <input
            id="id"
            v-model="id"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="1"
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
            placeholder="Elon"
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
            placeholder="Obama"
          />
        </div>

        <div class="dataNascita-input mb-4">
          <label
            for="dataNascita"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
            Data di Nascita</label
          >
          <input
            id="dataNascita"
            v-model="dataNascita"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="00-00-0000"
          />
        </div>

        <div class="birthPlace-input mb-4">
          <label
            for="birthPlace"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
            BirthPlace</label
          >
          <input
            id="birthPlace"
            v-model="birthplace"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Earth"
          />
        </div>

        <div class="nazionalita-input mb-4">
          <label
            for="nazionalita"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
            Nazionalita</label
          >
          <input
            id="nazionalita"
            v-model="nazionalita"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Human"
          />
        </div>

        <div class="address-input mb-4">
          <label
            for="address"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
            Address</label
          >
          <input
            id="address"
            v-model="address"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Earth"
          />
        </div>

        <div class="jobType-input mb-4">
          <label
            for="jobType"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
            JobType</label
          >
          <input
            id="jobType"
            v-model="jobType"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Engineer"
          />
        </div>

        <div class="period-input mb-4">
          <label
            for="period"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
            Period</label
          >
          <input
            id="period"
            v-model="period"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="1 year"
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
            placeholder="+000 000 0000"
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
            placeholder="you@me.com"
          />
        </div>

        <div class="Languages to do string?-input mb-4">
          <label
            for="Languages to do string?"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
            Languages</label
          >
          <input
            id="Languages"
            v-model="languages"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="English, Italian, Spanish"
          />
        </div>

        <div class="patenta-input mb-4">
          <label
            for="patenta"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
            Tipo di patenta</label
          >
          <input
            id="patenta"
            v-model="patenta"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="A or B or C or D..."
          />
        </div>
        <div class="car-input mb-4">
          <label for="car" class="block text-gray-700 text-sm font-bold mb-2">
            Owns a car</label
          >
          <input :id="car" type="checkbox" class="mr-3" @change="ownsCar()" />
        </div>

        <div class="qualification-input mb-4">
          <label
            for="qualification"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
            Qualification</label
          >
          <input
            id="qualification"
            v-model="qualification"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Analytical Chemist"
          />
        </div>

        <div class="flex items-center justify-between">
          <button
            class="bg-blue-600 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            @click="submit()"
          >
            Submit new applicant
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
    const CF = ref("");
    const id = ref("");
    const name = ref("");
    const cognome = ref("");
    const dataNascita = ref("");
    const birthplace = ref("");
    const nazionalita = ref("");
    const address = ref("");
    const jobType = ref("");
    const period = ref("");
    const phone = ref("");
    const email = ref("");
    const languages = ref("");
    const patenta = ref("");
    const car = ref("");
    const qualification = ref("");

    return {
      CF,
      id,
      name,
      cognome,
      dataNascita,
      birthplace,
      nazionalita,
      address,
      jobType,
      period,
      phone,
      email,
      languages,
      patenta,
      car,
      qualification,
    };
  },
  methods: {
    async submit() {
      let return_code;
      const baseUrl = process.env.VUE_APP_API_URL;
      try {
        return_code = (
          await axios.post(`${baseUrl}/team/applicant/new/submit/`, {
            CF: this.CF,
            id: this.id,
            name: this.name,
            cognome: this.cognome,
            dataNascita: this.dataNascita,
            birthplace: this.birthplace,
            nazionalita: this.nazionalita,
            address: this.address,
            jobType: this.jobType,
            period: this.period,
            phone: this.phone,
            email: this.email,
            languages: this.languages,
            patenta: this.patenta,
            car: this.car,
            qualification: this.qualification,
          })
        ).status;
      } catch (_) {
        /*eslint no-empty: "error"*/
      }

      // TODO Remove when login is implemented on the server's side
      if (return_code && return_code == 200) {
        alert("New worker added successfully");
      } else {
        alert("Error on adding a new Worker");
      }
    },
    ownsCar() {
      if (this.car == "true") {
        this.car = "false";
      } else if (this.car == "false") {
        this.car = "true";
      } else {
        this.car = "true";
      }
    },
  },
});
</script>
