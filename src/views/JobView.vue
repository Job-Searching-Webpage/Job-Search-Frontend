<template>
  <div
    class="block mx-auto bg-white border border-solid border-brand-gray-2 rounded hover:shadow-gray"
  >
    <div class="pt-5 pb-2 mx-8 border-b border-solid border-brand-gray-2">
      <div class="text-2xl font-bold">Job Page for job {{ currentJobId }}</div>
      <h2 class="mb-2 text-2xl font-bold">
        {{ job.title }}
        Title
      </h2>
      <div class="flex flex-row align-middle">
        <div class="flex flex-col">
          <span
            ><!--{{ job.organization }}-->
            organization</span
          >
        </div>

        <div class="pt-5 pb-2 mx-8 border-b border-solid border-brand-gray-2">
          <ul>
            <li class="inline-block">
              <!--{{ job.location }}-->
              location
            </li>
          </ul>
        </div>
      </div>
      <div class="px-8 py-4">
        <div>
          <h3 class="mt-1 mb-2">Qualifications bitches</h3>
          <div>
            <ul class="pl-8 list-disc">
              <li
                v-for="qualification in job.minimumQualifications"
                :key="qualification"
              >
                <!--{{ qualification }}-->
                Qualifications bitches
              </li>
            </ul>
          </div>
        </div>
      </div>
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

    return {
      job,
      currentJobId,
    };
  },
});
</script>
