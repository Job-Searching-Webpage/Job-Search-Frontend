<template>
  <div class="flex justify-center mt-0">
    <div class="w-full m-1 max-w-lg">
      <form class="bg-white shadow-2xl rounded px-5 pt-3 pb-4 mb-4">
        <h2 class="block text-gray-700 text-xl pl-3 font-bold mb-2">
          Worker Information
        </h2>
        <div class="CF-input mb-4">
          <label
            for="CF"
            class="block text-gray-700 text-xl pl-3 font-semibold mb-3"
          >
            CodiceFiscale : {{ team.CF }}</label
          >
        </div>

        <div class="id-input mb-4">
          <label
            for="id"
            class="block text-gray-700 text-xl pl-3 font-semibold mb-2"
          >
            id : {{ team.id }}</label
          >
        </div>

        <div class="name-input mb-4">
          <label
            for="name"
            class="block text-gray-700 text-xl pl-3 font-semibold mb-2"
          >
            Name : {{ team.name }}</label
          >
        </div>

        <div class="cognome-input mb-4">
          <label
            for="cognome"
            class="block text-gray-700 text-xl pl-3 font-semibold mb-2"
          >
            Cognome : {{ team.cognome }}</label
          >
        </div>

        <div class="dataNascita-input mb-4">
          <label
            for="dataNascita"
            class="block text-gray-700 text-xl pl-3 font-semibold mb-2"
          >
            Data di Nascita : {{ team.dataNascita }}</label
          >
        </div>

        <div class="birthPlace-input mb-4">
          <label
            for="birthPlace"
            class="block text-gray-700 text-xl pl-3 font-semibold mb-2"
          >
            BirthPlace : {{ team.birthplace }}</label
          >
        </div>

        <div class="nazionalita-input mb-4">
          <label
            for="nazionalita"
            class="block text-gray-700 text-xl pl-3 font-semibold mb-2"
          >
            Nazionalita : {{ team.nazionalita }}</label
          >
        </div>

        <div class="address-input mb-4">
          <label
            for="address"
            class="block text-gray-700 text-xl pl-3 font-semibold mb-2"
          >
            Address : {{ team.address }}</label
          >
        </div>

        <div class="jobType-input mb-4">
          <label
            for="jobType"
            class="block text-gray-700 text-xl pl-3 font-semibold mb-2"
          >
            JobType : {{ team.jobType }}</label
          >
        </div>

        <div class="period-input mb-4">
          <label
            for="period"
            class="block text-gray-700 text-xl pl-3 font-semibold mb-2"
          >
            Period : {{ team.period }}</label
          >
        </div>

        <div class="phone-input mb-4">
          <label
            for="phone"
            class="block text-gray-700 text-xl pl-3 font-semibold mb-2"
          >
            Phone : {{ team.phone }}</label
          >
        </div>

        <div class="email-input mb-4">
          <label
            for="email"
            class="block text-gray-700 text-xl pl-3 font-semibold mb-2"
          >
            Email : {{ team.email }}</label
          >
        </div>

        <div class="Languages-input mb-4">
          <h3 class="block text-gray-700 text-xl pl-3 font-semibold mb-2">
            Languages
          </h3>
          <div>
            <ul class="pl-8 list-disc">
              <li v-for="languages in team.languages" :key="languages">
                {{ languages }}
              </li>
            </ul>
          </div>
        </div>

        <div class="patenta-input mb-4">
          <label
            for="patenta"
            class="block text-gray-700 text-xl pl-3 font-semibold mb-2"
          >
            Tipo di patenta : {{ team.patenta }}</label
          >
        </div>

        <div class="qualification-input mb-4">
          <label
            for="qualification"
            class="block text-gray-700 text-xl pl-3 font-semibold mb-2"
          >
            Qualification : {{ team.qualification }}</label
          >
        </div>
      </form>
    </div>
    <div class="w-full m-10 max-w-lg">
      <div class="w-full m-10 max-w-lg">
        <form
          v-for="exp in team.esperienze"
          :key="exp.azienda"
          class="bg-white shadow-2xl rounded px-5 pt-3 pb-4 mb-4"
        >
          <h2 class="block text-gray-700 text-xl pl-3 font-bold mb-2">
            Old Experiences
          </h2>

          <div class="azienda-input mb-4">
            <label
              for="azienda"
              class="block text-gray-700 text-xl pl-3 font-semibold mb-2"
            >
              Tipo di azienda : {{ exp.azienda }}</label
            >
          </div>

          <div class="periodo-input mb-4">
            <label
              for="periodo"
              class="block text-gray-700 text-xl pl-3 font-semibold mb-2"
            >
              Periodo : {{ exp.periodo }}</label
            >
          </div>

          <div class="duties-input mb-4">
            <label
              for="duties"
              class="block text-gray-700 text-xl pl-3 font-semibold mb-2"
            >
              Duties : {{ exp.duties }}</label
            >
          </div>

          <div class="luogo-input mb-4">
            <label
              for="luogo"
              class="block text-gray-700 text-xl pl-3 font-semibold mb-2"
            >
              Luogo : {{ exp.luogo }}</label
            >
          </div>

          <div class="payment-input mb-4">
            <label
              for="payment"
              class="block text-gray-700 text-xl pl-3 font-semibold mb-2"
            >
              Payment : {{ exp.payment }}</label
            >
          </div>
        </form>
      </div>

      <div v-show="hasBackUp" class="w-full max-w-lg m-10">
        <form
          v-for="backup in team.backUpPerson"
          :key="backup.name"
          class="bg-white shadow-2xl rounded px-5 pt-3 pb-4"
        >
          <h2 class="block text-gray-700 text-xl pl-3 font-bold mb-2">
            Back up Person
          </h2>

          <div class="name-input mb-4">
            <label
              for="name"
              class="block text-gray-700 text-xl pl-3 font-semibold mb-2"
            >
              name : {{ backup.name }}</label
            >
          </div>

          <div class="cognome-input mb-4">
            <label
              for="cognome"
              class="block text-gray-700 text-xl pl-3 font-semibold mb-2"
            >
              cognome : {{ backup.cognome }}</label
            >
          </div>

          <div class="email-input mb-4">
            <label
              for="email"
              class="block text-gray-700 text-xl pl-3 font-semibold mb-2"
            >
              email : {{ backup.email }}</label
            >
          </div>

          <div class="phone-input mb-4">
            <label
              for="phone"
              class="block text-gray-700 text-xl pl-3 font-semibold mb-2"
            >
              phone : {{ backup.phone }}</label
            >
          </div>
        </form>
      </div>
      <div class="ml-20">
        <a
          class="inline-block align-baseline font-bold text-2xl text-blue-500 hover:text-blue-800"
          href="#"
        >
          Go Back
        </a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import getTeamById from "@/api/getTeamById";
import { Team } from "@/api/types";
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
  data: () => {
    return {
      team: {} as Team,
      testA: [],
      hasBackUp: true,
    };
  },
  async created() {
    const route = useRoute();
    const currentTeamId = route.params.id;
    let test = await getTeamById(currentTeamId);
    console.log(test);
    this.team = test;
    //const test = "test";
    //const testA = ["testA", "testB", "testC"];
    //return { currentTeamId, team, test, testA, hasBackUp: true };
  },
});
</script>
