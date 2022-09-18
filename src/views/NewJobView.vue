<template>
  <div class="flex justify-center items-center mt-0">
    <div class="w-full max-w-xl">
      <form class="bg-white shadow-md rounded px-12 pt-6 pb-12 mb-4">
        <div class="id-input mb-4">
          <label for="id" class="block text-gray-700 text-sm font-bold mb-2">
            id</label
          >
          <input
            id="id"
            v-model="id"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="123"
          />
        </div>

        <div class="title-input mb-4">
          <label for="title" class="block text-gray-700 text-sm font-bold mb-2">
            Title</label
          >
          <input
            v-model="title"
            title="title"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Vue ninja"
          />
        </div>

        <div class="organization-input mb-4">
          <label
            for="organization"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
            Organization</label
          >
          <input
            id="organization"
            v-model="organization"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="UNIVR"
          />
        </div>

        <div class="degree-input mb-4">
          <label
            for="degree"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
            Degree</label
          >
          <input
            id="degree"
            v-model="degree"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Master"
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
            v-model="jobType"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Part-time"
          />
        </div>

        <div class="location-input mb-4">
          <label
            for="location"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
            Location</label
          >
          <input
            id="location"
            v-model="location"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Earth"
          />
        </div>
        <!--TO DO-->
        <div class="minimumQualifications-input mb-4">
          <label
            for="minimumQualifications"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
            minimumQualifications</label
          >
          <input
            id="minimumQualifications"
            v-model="minimumQualifications"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Divide different qualifications with #"
          />
        </div>

        <div class="preferredQualification-input mb-4">
          <label
            for="preferredQualification"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
            preferredQualification</label
          >
          <input
            id="preferredQualification"
            v-model="preferredQualification"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Divide different qualifications with #"
          />
        </div>

        <div class="description-input mb-4">
          <label
            for="description"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
            description</label
          >
          <input
            id="description"
            v-model="description"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Divide different qualifications with #"
          />
        </div>

        <div class="dateAdded-input mb-4">
          <label
            for="dateAdded"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
            dateAdded</label
          >
          <input
            id="dateAdded"
            v-model="dateAdded"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="00-00-0000"
          />
        </div>

        <div class="flex items-center justify-between">
          <button
            class="bg-blue-600 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            @click="submit()"
          >
            Submit new job
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
    const id = ref("");
    const title = ref("");
    const organization = ref("");
    const degree = ref("");
    const jobType = ref("");
    const location = ref("");
    const minimumQualifications = ref("");
    const preferredQualification = ref("");
    const description = ref("");
    const dateAdded = ref("");

    return {
      id,
      title,
      organization,
      degree,
      jobType,
      location,
      minimumQualifications,
      preferredQualification,
      description,
      dateAdded,
    };
  },
  methods: {
    parsing(stringToParse: string) {
      let res = "";
      let myarray = stringToParse;
      let myArray = myarray.split("#");
      for (let i = 0; i < myArray.length; i++) {
        if (i == myArray.length - 1) res.concat('\\"', myArray[i], '\\"');
        else res.concat('\\"', myArray[i], '\\",\\r\\n        ');
      }
      return res;
    },

    async submit() {
      let return_code;
      try {
        return_code = (
          await axios.post(`${process.env.VUE_APP_API_URI}/jobs/new/submit`, {
            id: this.id,
            title: this.title,
            organization: this.organization,
            degree: this.degree,
            jobType: this.jobType,
            location: this.location,
            minimumQualifications: this.parsing(
              this.minimumQualifications.valueOf()
            ),
            preferredQualification: await this.parsing(
              this.preferredQualification
            ),
            description: this.parsing(this.description),
            dateAdded: this.dateAdded,
          })
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
  },
});
</script>
