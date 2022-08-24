<template>
  <li class="mb-7">
    <router-link
      :to="teamPageLink"
      class="block mx-auto bg-white border border-solid border-brand-gray-2 rounded hover:shadow-gray"
      data-test="team-page-link"
    >
      <div class="pt-5 pb-2 mx-8 border-b border-solid border-brand-gray-2">
        <h2 class="mb-2 text-2xl">
          {{ team.name }}
        </h2>
        <div class="flex flex-row align-middle">
          <div class="mr-5">
            <span>{{ team.email }}</span>
          </div>

          <div>
            <ul>
              <li class="inline-block mr-5">
                {{ team.adress }}
              </li>
            </ul>
          </div>
        </div>
        <div class="px-8 py-4">
          <div>
            <h3 class="mt-1 mb-2">Natinality</h3>
            <div>
              <ul class="pl-8 list-disc">
                <li v-for="nazionalita in team.nazionalita" :key="nazionalita">
                  {{ nazionalita }}
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-2 text-center">
            <router-link :to="teamPageLink" class="text-brand-blue-1"
              >Expand</router-link
            >
          </div>
        </div>
      </div>
    </router-link>
  </li>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { Team } from "@/api/types";

export default defineComponent({
  name: "TeamListing",
  props: {
    team: {
      type: Object as PropType<Team>,
      required: true,
    },
  },
  setup(props) {
    const teamPageLink = computed(() => `/teams/results/${props.team.name}`);
    return { teamPageLink };
  },
});
</script>
