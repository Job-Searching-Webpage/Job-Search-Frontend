<template>
  <div
    class="block mx-auto bg-white border border-solid border-brand-gray-2 rounded hover:shadow-gray"
  >
    <div>Team Page for worker number:{{ currentTeamId }}}</div>
    <div class="pt-5 pb-2 mx-8 border-b border-solid border-brand-gray-2">
      <div class="text-2xl font-bold">
        Team Page for team {{ currentTeamId }}
      </div>
      <h2 class="mb-2 text-2xl font-bold">
        {{ (team.name, team.cognome) }}
        Name
      </h2>
      <div class="flex flex-row align-middle">
        <div class="flex flex-col">
          <span
            >{{ (team.birthplace, team.birthdate) }} Birthplace and date</span
          >
        </div>

        <div class="flex flex-col">
          <span
            >{{ (team.nazionalita, team.address) }} Nationality and
            address</span
          >
        </div>

        <div class="flex flex-col">
          <span>{{ (team.jobType, team.period) }} Type of Job and period</span>
        </div>

        <div class="flex flex-col">
          <span>{{ (team.phone, team.email) }} Contact</span>
        </div>
      </div>
      <div class="px-8 py-4">
        <div>
          <h3 class="mt-1 mb-2">Languages</h3>
          <div>
            <ul class="pl-8 list-disc">
              <li v-for="languages in team.languages" :key="languages">
                <!--{{ languages }}-->
                languagess bitches
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="flex flex-col">
        <span>Driving license of type:{{ team.patenta }} </span>
      </div>
      <div class="px-8 py-4">
        <div>
          <h3 class="mt-1 mb-2">Past Experiences</h3>
          <div>
            <ul class="pl-8 list-disc">
              <li v-for="esperienze in team.esperienze" :key="esperienze">
                <!--{{ esperienze }}-->
                esperienzes bitches
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="flex flex-col">
        <span> Name :{{ team.backUpPerson.name }} </span>
        <span>Cognome:{{ team.backUpPerson.cognome }}</span>
        <span>Email :{{ team.backUpPerson.email }}</span>
        <span>Phone :{{ team.backUpPerson.phone }}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import getTeamById from "@/api/getTeamById";
import { defineComponent } from "vue";

import { useRoute } from "vue-router";
export default defineComponent({
  name: "TeamView",
  setup() {
    const route = useRoute();
    const currentTeamId = route.params.id;
    const team = getTeamById(currentTeamId);

    return { currentTeamId, team };
  },
});
</script>
