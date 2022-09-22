<template>
  <div v-if="isLoggedIn" class="flex justify-center items-center mt-0">
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
            Codicefiscale of the worker</label
          >
          <input
            id="codicefiscale"
            v-model="state.CodiceFiscaleExp"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="LLSLJM..."
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
            v-model="state.Azienda"
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
            v-model="state.Periodo"
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
            v-model="state.Role"
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
            v-model="state.Luogo"
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
            v-model="state.Payment"
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
            v-model="state.CodiceFiscale"
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
            v-model="state.name"
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
            v-model="state.cognome"
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
            v-model="state.email"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="homo@sapiens.com"
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
            type="phone"
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
  <div v-else>You Have to login to see this page</div>
</template>

<script lang="ts">
import getTeamId from "@/api/getTeamId";
import { defineComponent, reactive, computed } from "vue";
import { mapState } from "vuex";
import axios from "axios";
import {
  required,
  minLength,
  maxLength,
  email,
  alpha,
} from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

export default defineComponent({
  setup() {
    const state = reactive({
      CodiceFiscaleExp: "",
      Azienda: "",
      Periodo: "",
      Role: "",
      Luogo: "",
      Payment: "",

      CodiceFiscale: "",
      name: "",
      cognome: "",
      email: "",
      phone: "",
    });

    const rules = computed(() => {
      return {
        CodiceFiscaleExp: {
          required,
          minLength: minLength(16),
          maxLength: maxLength(16),
        },
        Azienda: {
          required,
          alpha,
        },
        Periodo: {
          required,
        },
        Role: {
          required,
          alpha,
        },
        Luogo: {
          required,
          alpha,
        },
        Payment: {
          required,
        },
        CodiceFiscale: {
          required,
          minLength: minLength(16),
          maxLength: maxLength(16),
        },
        name: {
          required,
          alpha,
        },
        cognome: {
          required,
          alpha,
        },
        email: {
          required,
          email,
        },
        phone: {
          required,
          phone,
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
    async submitExperience() {
      let return_code;
      const baseUrl = process.env.VUE_APP_API_URL;
      let teamId = await getTeamId(this.state.CodiceFiscaleExp);
      console.log(teamId);
      this.v$.$validate();
      if (this.v$.CodiceFiscaleExp.$error) {
        alert(
          "Codice Fiscale di Esperienza " +
            this.v$.CodiceFiscaleExp.$errors[0].$message.toString().slice(10)
        );
      } else if (this.v$.Azienda.$error) {
        alert(
          "Azienda " + this.v$.Azienda.$errors[0].$message.toString().slice(10)
        );
      } else if (this.v$.Periodo.$error) {
        alert(
          "Periodo " + this.v$.Periodo.$errors[0].$message.toString().slice(10)
        );
      } else if (this.v$.Role.$error) {
        alert("Ruolo " + this.v$.Role.$errors[0].$message.toString().slice(10));
      } else if (this.v$.Luogo.$error) {
        alert(
          "Luogo " + this.v$.Luogo.$errors[0].$message.toString().slice(10)
        );
      } else if (this.v$.Payment.$error) {
        alert(
          "Payment " + this.v$.Payment.$errors[0].$message.toString().slice(10)
        );
      } else {
        try {
          return_code = (
            await axios.post(`${baseUrl}/EsperienzeSave/`, {
              workerId: teamId,
              azienda: this.state.Azienda,
              periodo: this.state.Periodo,
              duties: this.state.Role,
              luogo: this.state.Luogo,
              payment: this.state.Payment,
            })
          ).status;
        } catch (_) {
          /*eslint no-empty: "error"*/
        }

        if (return_code && return_code == 200) {
          alert("Experience added successfully");
        } else {
          alert("Error on adding a new Experience");
        }
      }
    },

    async submitBackUpPerson() {
      let return_code;
      const baseUrl = process.env.VUE_APP_API_URL;
      let teamId = await getTeamId(this.state.CodiceFiscale);
      console.log(teamId);

      this.v$.$validate();

      if (this.v$.CodiceFiscale.$error) {
        alert(
          "Codice Fiscale " +
            this.v$.CodiceFiscale.$errors[0].$message.toString().slice(10)
        );
      } else if (this.v$.name.$error) {
        alert("Name " + this.v$.name.$errors[0].$message.toString().slice(10));
      } else if (this.v$.cognome.$error) {
        alert(
          "Cognome " + this.v$.cognome.$errors[0].$message.toString().slice(10)
        );
      } else if (this.v$.email.$error) {
        alert(
          "Email " + this.v$.email.$errors[0].$message.toString().slice(10)
        );
      } else if (this.v$.phone.$error) {
        alert(
          "Phone " + this.v$.phone.$errors[0].$message.toString().slice(10)
        );
      } else {
        try {
          return_code = (
            await axios.post(`${baseUrl}/saveBackUpPerson/`, {
              CF_BC_person: this.state.CodiceFiscale,
              workerId: teamId,
              name: this.state.name,
              cognome: this.state.cognome,
              email: this.state.email,
              phone: this.state.phone,
            })
          ).status;
        } catch (_) {
          /*eslint no-empty: "error"*/
        }
        if (return_code && return_code == 200) {
          alert("Backup Person added successfully");
        } else {
          alert("Error on adding a new Backup Person");
        }
      }
    },
  },
});
</script>
