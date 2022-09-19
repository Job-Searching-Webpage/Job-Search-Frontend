<template>
  <div class="flex justify-center items-center mt-5">
    <div class="w-full m-1 max-w-lg">
      <form class="bg-white shadow-2xl rounded px-10 pt-3 pb-5 mb-4">
        <div class="title-input mb-4">
          <label
            for="title"
            class="block text-gray-700 text-xl pl-3 font-semibold mb-3"
          >
            Title : {{ test }}</label
          >
        </div>

        <div class="organization-input mb-4">
          <label
            for="organization"
            class="block text-gray-700 text-xl pl-3 font-semibold mb-2"
          >
            Organization : {{ job.organization }}</label
          >
        </div>

        <div class="location-input mb-4">
          <label
            for="location"
            class="block text-gray-700 text-xl pl-3 font-semibold mb-2"
          >
            Location : {{ job.location }}</label
          >
        </div>

        <div class="min-qualification-input mb-4">
          <h3 class="block text-gray-700 text-xl pl-3 font-semibold mb-2">
            Minimum Qualifications bitches
          </h3>
          <div>
            <ul class="pl-8 list-disc">
              <li v-for="qualification in testA" :key="qualification">
                {{ qualification }}
              </li>
            </ul>
          </div>
        </div>

        <div class="pref-qualification-input mb-4">
          <h3 class="block text-gray-700 text-xl pl-3 font-semibold mb-2">
            Preferred Qualifications bitches
          </h3>
          <div>
            <ul class="pl-8 list-disc">
              <li v-for="qualification in testA" :key="qualification">
                {{ qualification }}
              </li>
            </ul>
          </div>
        </div>

        <div class="description-input mb-4">
          <h3 class="block text-gray-700 text-xl pl-3 font-semibold mb-2">
            Descriptions bitches
          </h3>
          <div>
            <ul class="pl-8 list-disc">
              <li v-for="description in testA" :key="description">
                {{ description }}
              </li>
            </ul>
          </div>
        </div>

        <div class="date-input mb-4">
          <label
            for="date"
            class="block text-gray-700 text-xl pl-3 font-semibold mb-2"
          >
            Published Date : {{ job.dateAdded }}</label
          >
        </div>

        <div class="flex justify-center mb-15">
          <a
            class="inline-block align-baseline font-bold text-2xl text-blue-500 hover:text-blue-800"
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
import getJobById from "@/api/getJobById";
//import { Job } from "@/api/types"; //change any type on line 48
import { defineComponent } from "vue";

import { useRoute } from "vue-router";
export default defineComponent({
  name: "JobView",
  setup() {
    const route = useRoute();
    const currentJobId = route.params.id;
    const job: any = getJobById(currentJobId);
    const testA = ["A", "B", "C"];
    return {
      job,
      currentJobId,
      testA,
    };
  },
});
</script>
