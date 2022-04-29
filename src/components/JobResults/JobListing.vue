<template>
  <li class="mb-7">
    <router-link
      to="/jobs/results/1"
      class="block mx-auto bg-white border border-solid border-brand-gray-2 rounded hover:shadow-gray"
    >
      <div class="pt-5 pb-2 mx-8 border-b border-solid border-brand-gray-2">
        <h2 class="mb-2 text-2xl">
          Technical Program Manager,Perception, Augmented Reality
        </h2>
        <div class="flex flex-row align-middle">
          <div class="mr-5">
            <span>Job Search LTD</span>
          </div>
          <div>
            <span>Verona</span>
          </div>
        </div>
        <div class="px-8 py-4">
          <div>
            <h3 class="mt-1 mb-2">Qualifications</h3>
            <div>
              <ul class="pl-8 list-disc">
                <li>Bachelor's Degree or equivalent pracise experience</li>
                <li>5 years of experience in program managment</li>
                <li>Experience anayzng data thorugh query db.</li>
              </ul>
            </div>
          </div>

          <div class="mt-2 text-center">
            <router-link to="/jobs/results/1" class="text-brand-blue-1"
              >Expand</router-link
            >
          </div>
        </div>
      </div>
    </router-link>
  </li>
</template>
<script>
export default {
  name: "JobListing",
};
</script>
