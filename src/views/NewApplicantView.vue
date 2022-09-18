<template>
  <div class="flex justify-center items-center mt-0">
    <div class="w-full max-w-xl">
      <form class="bg-white shadow-md rounded px-12 pt-6 pb-12 mb-4">
        <div class="codiceFiscale-input mb-4">
          <label
            for="codiceFiscale"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
            codiceFiscale</label
          >
          <input
            id="codiceFiscale"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            v-model="CodiceFiscale"
            placeholder="LLSLJM2...."
          />
        </div>

        <div class="id-input mb-4">
          <label for="id" class="block text-gray-700 text-sm font-bold mb-2">
            id</label
          >
          <input
            id="id"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            v-model="id"
            placeholder="1"
          />
        </div>

        <div class="name-input mb-4">
          <label for="name" class="block text-gray-700 text-sm font-bold mb-2">
            Name</label
          >
          <input
            id="name"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            v-model="Name"
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
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            v-model="Cognome"
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
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            v-model="dataNascita"
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
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            v-model="birthPlace"
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
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            v-model="Nazionalita"
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
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            v-model="Address"
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
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            v-model="JobType"
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
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            v-model="Period"
            placeholder="1 year"
          />
        </div>

        <div class="phone-input mb-4">
          <label for="phone" class="block text-gray-700 text-sm font-bold mb-2">
            Phone</label
          >
          <input
            id="phone"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            v-model="Phone"
            placeholder="+000 000 0000"
          />
        </div>

        <div class="email-input mb-4">
          <label for="email" class="block text-gray-700 text-sm font-bold mb-2">
            Email</label
          >
          <input
            id="email"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            v-model="Email"
            placeholder="you@me.com"
          />
        </div>

        <div class="Languages to do string?-input mb-4">
          <label
            for="Languages to do string?"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
            Languages to do string?</label
          >
          <input
            id="Languages to do string?"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            v-model="Languages"
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
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            v-model="Patenta"
            placeholder="A or B or C or D..."
          />
        </div>
        <div class="car-input mb-4">
          <label for="car" class="block text-gray-700 text-sm font-bold mb-2">
            Owns a car</label
          >
          <input :id="Car" type="checkbox" class="mr-3" @change="ownsCar()" />
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
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            v-model="Qualification"
            placeholder="Analytical Chemist"
          />
        </div>

        <div class="flex items-center justify-between">
          <button
            class="bg-blue-600 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            @click="submit()"
          >
            Submit
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
    const CodiceFiscale = ref("");
    const id = ref("");
    const Name = ref("");
    const Cognome = ref("");
    const dataNascita = ref("");
    const birthplace = ref("");
    const Nazionalita = ref("");
    const Address = ref("");
    const JobType = ref("");
    const Period = ref("");
    const Phone = ref("");
    const Email = ref("");
    const Languages = ref("");
    const Patenta = ref("");
    const Car = ref("");
    const Qualification = ref("");

    return {
      CodiceFiscale,
      id,
      Name,
      Cognome,
      dataNascita,
      birthplace,
      Nazionalita,
      Address,
      JobType,
      Period,
      Phone,
      Email,
      Languages,
      Patenta,
      Car,
      Qualification,
    };
  },
  methods: {
    async submit() {
      let return_code;
      try {
        return_code = (
          await axios.post(
            `${process.env.VUE_APP_API_URI}/team//applicant/new/submit`,
            {
              CodiceFiscale: this.CodiceFiscale,
              id: this.id,
              Name: this.Name,
              Cognome: this.Cognome,
              dataNascita: this.dataNascita,
              birthplace: this.birthplace,
              Nazionalita: this.Nazionalita,
              Address: this.Address,
              JobType: this.JobType,
              Period: this.Period,
              Phone: this.Phone,
              Email: this.Email,
              Languages: this.Languages,
              Patenta: this.Patenta,
              Car: this.Car,
              Qualification: this.Qualification,
            }
          )
        ).status;
      } catch (_) {
        /*eslint no-empty: "error"*/
      }

      // TODO Remove when login is implemented on the server's side
      return_code = 200;

      if (return_code && return_code < 405) {
        console.log("New applicant submitted");
      }
    },
    ownsCar() {
      if (this.Car == "true") {
        this.Car = "false";
      } else if (this.Car == "false") {
        this.Car = "true";
      } else {
        this.Car = "true";
      }
    },
  },
});
</script>
