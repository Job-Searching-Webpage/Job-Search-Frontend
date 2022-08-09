import { useStore } from "vuex";
jest.mock("vuex");

import { useFilteredJobs } from "@/store/composables";
import { useUniqueJobTypes } from "@/store/composables";

describe("composables", () => {
  describe("useFilteredJobs", () => {
    it("retrieves filtered jobs from the store", () => {
      useStore.mockReturnValue({
        getters: {
          FILTERED_JOBS: [{ id: 1 }],
        },
      });

      const result = useFilteredJobs();
      expect(result.value).toEqual([{ id: 1 }]);
    });

    describe("useUniqueJobTypes", () => {
      it("retrieves unique job types from the store", () => {
        useStore.mockReturnValue({
          getters: {
            UNIQUE_JOB_TYPES: new Set(["Full-time"]),
          },
        });

        const result = useUniqueJobTypes();
        expect(result.value).toEqual(new Set(["Full-time"]));
      });
    });
  });
});
