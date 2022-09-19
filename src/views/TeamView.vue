<template>
  <div class="flex justify-center items-center mt-0">
    <div class="w-full m-1 max-w-lg">
      <form class="bg-white shadow-2xl rounded px-10 pt-3 pb-4 mb-4">
        <div class="CF-input mb-4">
          <label for="CF" class="block text-gray-700 text-xl font-bold mb-3">
            CodiceFiscale : {{ test }}</label
          >
        </div>

        <div class="id-input mb-4">
          <label for="id" class="block text-gray-700 text-xl font-bold mb-2">
            id : {{ team.id }}</label
          >
        </div>

        <div class="name-input mb-4">
          <label for="name" class="block text-gray-700 text-xl font-bold mb-2">
            Name : {{ team.name }}</label
          >
        </div>

        <div class="cognome-input mb-4">
          <label
            for="cognome"
            class="block text-gray-700 text-xl font-bold mb-2"
          >
            Cognome : {{ team.cognome }}</label
          >
        </div>

        <div class="dataNascita-input mb-4">
          <label
            for="dataNascita"
            class="block text-gray-700 text-xl font-bold mb-2"
          >
            Data di Nascita : {{ team.dataNascita }}</label
          >
        </div>

        <div class="birthPlace-input mb-4">
          <label
            for="birthPlace"
            class="block text-gray-700 text-xl font-bold mb-2"
          >
            BirthPlace : {{ team.birthplace }}</label
          >
        </div>

        <div class="nazionalita-input mb-4">
          <label
            for="nazionalita"
            class="block text-gray-700 text-xl font-bold mb-2"
          >
            Nazionalita : {{ team.nazionalita }}</label
          >
        </div>

        <div class="address-input mb-4">
          <label
            for="address"
            class="block text-gray-700 text-xl font-bold mb-2"
          >
            Address : {{ team.address }}</label
          >
        </div>

        <div class="jobType-input mb-4">
          <label
            for="jobType"
            class="block text-gray-700 text-xl font-bold mb-2"
          >
            JobType : {{ team.jobType }}</label
          >
        </div>

        <div class="period-input mb-4">
          <label
            for="period"
            class="block text-gray-700 text-xl font-bold mb-2"
          >
            Period : {{ team.period }}</label
          >
        </div>

        <div class="phone-input mb-4">
          <label for="phone" class="block text-gray-700 text-xl font-bold mb-2">
            Phone : {{ team.phone }}</label
          >
        </div>

        <div class="email-input mb-4">
          <label for="email" class="block text-gray-700 text-xl font-bold mb-2">
            Email : {{ team.email }}</label
          >
        </div>

        <div class="Languages-input mb-4">
          <label
            for="Languages"
            class="block text-gray-700 text-xl font-bold mb-2"
          >
            Languages {{ team.langages }}</label
          >
        </div>

        <div class="patenta-input mb-4">
          <label
            for="patenta"
            class="block text-gray-700 text-xl font-bold mb-2"
          >
            Tipo di patenta : {{ team.patenta }}</label
          >
        </div>

        <div class="qualification-input mb-4">
          <label
            for="qualification"
            class="block text-gray-700 text-xl font-bold mb-2"
          >
            Qualification : {{ team.qualification }}</label
          >
        </div>

        <div class="flex items-center justify-between">
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
import getTeamById from "@/api/getTeamById";
//import { Team } from "@/api/types";
import { defineComponent } from "vue";

import { useRoute } from "vue-router";
export default defineComponent({
  name: "TeamView",
  //props: {
  //team: {
  //type: Object as PropType<Team>,
  //required: true,
  //},
  //},
  setup() {
    const route = useRoute();
    const currentTeamId = route.params.id;
    const team = getTeamById(currentTeamId);
    const test = "test";
    return { currentTeamId, team, test };
  },
});
</script>
