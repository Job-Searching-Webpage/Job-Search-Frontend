<template>
  <div v-if="isLoggedIn" class="flex justify-center items-center mt-0">
    <div class="w-full max-w-xl">
      <form class="bg-white shadow-md rounded px-12 pt-6 pb-12 mb-4">
        <h2 class="block text-gray-700 text-xl font-bold mb-2">
          New Job Offer
        </h2>

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
  <div v-else>You Have to login to see this page</div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "vue";
import { mapState } from "vuex";
import axios from "axios";
import { required, minLength, maxLength, helpers } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

export default defineComponent({
  setup() {
    const state = reactive({
      title: "",
      organization: "",
      degree: "",
      jobType: "",
      location: "",
      minimumQualifications: "",
      preferredQualification: "",
      description: "",
      dateAdded: "",
    });
    const date = helpers.regex(
      "alphaNum",
      /^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/
    );
    const rules = computed(() => {
      return {
        title: {
          required,
          minLength: minLength(3),
          maxLength: maxLength(20),
        },
        organization: {
          required,
          minLength: minLength(3),
          maxLength: maxLength(20),
        },
        degree: {
          required,
          minLength: minLength(3),
          maxLength: maxLength(20),
        },
        jobType: {
          required,
          minLength: minLength(3),
          maxLength: maxLength(20),
        },
        location: {
          required,
          minLength: minLength(3),
        },
        minimumQualifications: {
          required,
          minLength: minLength(3),
        },
        preferredQualification: {
          required,
          minLength: minLength(3),
        },
        description: {
          required,
          minLength: minLength(3),
        },
        dateAdded: {
          required,
          date,
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
    ...mapState(["isLoggedIn"]), //pulls off the isLoggedIn state from the vuex store
  },
  methods: {
    async submit() {
      let return_code;
      const baseUrl = process.env.VUE_APP_API_URL;

      this.v$.$validate();
      if (this.v$.title.$error) {
        alert(
          "Title " + this.v$.title.$errors[0].$message.toString().slice(10)
        );
      } else if (this.v$.organization.$error) {
        alert(
          "Organization " +
            this.v$.organization.$errors[0].$message.toString().slice(10)
        );
      } else if (this.v$.degree.$error) {
        alert(
          "Degree " + this.v$.degree.$errors[0].$message.toString().slice(10)
        );
      } else if (this.v$.jobType.$error) {
        alert(
          "Job Type " + this.v$.jobType.$errors[0].$message.toString().slice(10)
        );
      } else if (this.v$.location.$error) {
        alert(
          "Location " +
            this.v$.location.$errors[0].$message.toString().slice(10)
        );
      } else if (this.v$.minimumQualifications.$error) {
        alert(
          "Minimum Qualifications " +
            this.v$.minimumQualifications.$errors[0].$message
              .toString()
              .slice(10)
        );
      } else if (this.v$.preferredQualification.$error) {
        alert(
          "Preferred Qualification " +
            this.v$.preferredQualification.$errors[0].$message
              .toString()
              .slice(10)
        );
      } else if (this.v$.description.$error) {
        alert(
          "Description " +
            this.v$.description.$errors[0].$message.toString().slice(10)
        );
      } else if (this.v$.dateAdded.$error) {
        alert(
          "Date Added " +
            this.v$.dateAdded.$errors[0].$message.toString().slice(10)
        );
      } else {
        try {
          return_code = (
            await axios.post(`${baseUrl}/JobSave/`, {
              title: this.state.title,
              organization: this.state.organization,
              degree: this.state.degree,
              jobType: this.state.jobType,
              location: this.state.location,
              minimumQualifications:
                this.state.minimumQualifications.split("#"),
              preferredQualifications:
                this.state.preferredQualification.split("#"),
              description: this.state.description.split("#"),
              dateAdded: this.state.dateAdded,
            })
          ).status;
        } catch (_) {
          /*eslint no-empty: "error"*/
        }

        if (return_code && return_code == 200) {
          alert("Job added successfully");
        } else {
          alert("Error on adding job");
        }
      }
    },
  },
});
</script>
