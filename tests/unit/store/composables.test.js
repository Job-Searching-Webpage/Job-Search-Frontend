import { useStore } from "vuex";
jest.mock("vuex");

import { useFiltererdJobs } from "@/store/composables";

describe("composables", () => {
  describe("useFiltererdJobs", () => {
    it("retrieves filtered jobs from the store", () => {
      useStore.mockReturnValue({
        getters: {
          FILTERED_JOBS: [{ id: 1 }],
        },
      });

      const result = useFiltererdJobs();
      expect(result.value).toEqual([{ id: 1 }]);
    });
  });
});
