<template>
  <div v-if="isLoggedIn" class="flex justify-center items-center mt-0">
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
            v-model="state.CF"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="LLSLJM2...."
          />
        </div>

        <div class="name-input mb-4">
          <label for="name" class="block text-gray-700 text-sm font-bold mb-2">
            Name</label
          >
          <input
            id="name"
            v-model="state.name"
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
            v-model="state.cognome"
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
            v-model="state.dataNascita"
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
            v-model="state.birthplace"
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
            v-model="state.nazionalita"
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
            v-model="state.address"
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
            v-model="state.jobType"
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
            v-model="state.period"
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
            v-model="state.phone"
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
            v-model="state.email"
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
            v-model="state.languages"
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
            v-model="state.patenta"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="A or B or C or D..."
          />
        </div>
        <div class="car-input mb-4">
          <label for="car" class="block text-gray-700 text-sm font-bold mb-2">
            Owns a car</label
          >
          <input
            :id="state.car"
            type="checkbox"
            class="mr-3"
            @change="ownsCar()"
          />
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
            v-model="state.qualification"
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
  <div v-else>You Have to login to see this page</div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "vue";
import { mapState } from "vuex";

import axios from "axios";
import {
  required,
  minLength,
  maxLength,
  email,
  alpha,
  helpers,
} from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

export default defineComponent({
  setup() {
    const state = reactive({
      CF: "",
      name: "",
      cognome: "",
      dataNascita: "",
      birthplace: "",
      nazionalita: "",
      address: "",
      jobType: "",
      period: "",
      phone: "",
      email: "",
      languages: "",
      patenta: "",
      car: "",
      qualification: "",
    });

    const validateDate = new RegExp(
      //eslint-disable-next-line
      "^(?:(?:31(\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(\\/|-|\\.)(?:0?[13-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$"
    );

    const date = (value: string) => validateDate.test(value);

    const validatePhone = new RegExp(
      //eslint-disable-next-line
      "^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]\\d{3}[\\s.-]\\d{4}$"
    );

    const phone = (value: string) => validatePhone.test(value);

    const rules = computed(() => {
      return {
        CF: {
          required,
          minLength: minLength(16),
        },
        name: {
          required,
          minLength: minLength(4),
        },
        cognome: {
          required,
          minLength: minLength(4),
        },
        dataNascita: {
          required,
          date: helpers.withMessage(
            "Birthdate should have the format dd/mm/yyyy",
            date
          ),
        },
        birthplace: {
          required,
          minLength: minLength(4),
        },
        nazionalita: {
          required,
          minLength: minLength(4),
        },
        address: {
          required,
          minLength: minLength(4),
        },
        jobType: {
          required,
          minLength: minLength(4),
        },
        period: {
          required,
          minLength: minLength(4),
        },
        phone: {
          required,
          phone: helpers.withMessage(
            "Phone number should have the format 123-456-7890",
            phone
          ),
        },
        email: {
          required,
          email,
        },
        languages: {
          required,
          minLength: minLength(4),
        },
        patenta: {
          required,
          alpha,
          minLength: maxLength(1),
        },
        qualification: {
          required,
          minLength: minLength(4),
        },
      };
    });

    const v$ = useVuelidate(rules, state);

    return {
      state,
      v$,
    };
  },
  computed: {
    ...mapState(["isLoggedIn"]),
  },
  methods: {
    async submit() {
      let return_code;
      const baseUrl = process.env.VUE_APP_API_URL;

      this.v$.$validate();
      if (this.v$.CF.$error) {
        alert(
          "CodiceFiscale " + this.v$.CF.$errors[0].$message.toString().slice(10)
        );
      } else if (this.v$.name.$error) {
        alert("Name " + this.v$.name.$errors[0].$message.toString().slice(10));
      } else if (this.v$.cognome.$error) {
        alert(
          "Cognome " + this.v$.cognome.$errors[0].$message.toString().slice(10)
        );
      } else if (this.v$.dataNascita.$error) {
        alert(this.v$.dataNascita.$errors[0].$message);
      } else if (this.v$.birthplace.$error) {
        alert(
          "Birthplace " +
            this.v$.birthplace.$errors[0].$message.toString().slice(10)
        );
      } else if (this.v$.nazionalita.$error) {
        alert(
          "Nazionalita " +
            this.v$.nazionalita.$errors[0].$message.toString().slice(10)
        );
      } else if (this.v$.address.$error) {
        alert(
          "Address " + this.v$.address.$errors[0].$message.toString().slice(10)
        );
      } else if (this.v$.jobType.$error) {
        alert(
          "JobType " + this.v$.jobType.$errors[0].$message.toString().slice(10)
        );
      } else if (this.v$.period.$error) {
        alert(
          "Period " + this.v$.period.$errors[0].$message.toString().slice(10)
        );
      } else if (this.v$.phone.$error) {
        alert(this.v$.phone.$errors[0].$message.toString().slice(10));
      } else if (this.v$.email.$error) {
        alert(
          "Email " + this.v$.email.$errors[0].$message.toString().slice(10)
        );
      } else if (this.v$.languages.$error) {
        alert(
          "Languages " +
            this.v$.languages.$errors[0].$message.toString().slice(10)
        );
      } else if (this.v$.patenta.$error) {
        alert(
          "Patenta " + this.v$.patenta.$errors[0].$message.toString().slice(10)
        );
      } else if (this.v$.qualification.$error) {
        alert(
          "Qualification " +
            this.v$.qualification.$errors[0].$message.toString().slice(10)
        );
      } else {
        try {
          return_code = (
            await axios.post(`${baseUrl}/team/applicant/new/submit/`, {
              CF: this.state.CF,
              name: this.state.name,
              cognome: this.state.cognome,
              dataNascita: this.state.dataNascita,
              birthplace: this.state.birthplace,
              nazionalita: this.state.nazionalita,
              address: this.state.address,
              jobType: this.state.jobType,
              period: this.state.period,
              phone: this.state.phone,
              email: this.state.email,
              languages: this.state.languages,
              patenta: this.state.patenta,
              car: this.state.car,
              qualification: this.state.qualification,
            })
          ).status;
        } catch (_) {
          /*eslint no-empty: "error"*/
        }
        if (return_code && return_code == 200) {
          alert("New worker added successfully");
        } else {
          alert("Error on adding a new Worker");
        }
      }
    },
    ownsCar() {
      if (this.state.car == "true") {
        this.state.car = "false";
      } else if (this.state.car == "false") {
        this.state.car = "true";
      } else {
        this.state.car = "true";
      }
    },
  },
});
</script>
