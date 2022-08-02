import getters from "@/store/getters";

describe("getters", () => {
  describe("UNIQUE_ORGANIZATIONS", () => {
    it("find unique organizations from list of jobs", () => {
      const state = {
        jobs: [
          { organization: "Google" },
          { organization: "Amazon" },
          { organization: "Google" },
        ],
      };
      const result = getters.UNIQUE_ORGANIZATIONS(state);
      expect(result).toEqual(new Set(["Google", "Amazon"]));
    });
  });

  describe("FILTERED_JOBS_BY_ORGANIZATIONS", () => {
    it("identifies jobs that are associated by the given organization", () => {
      const state = {
        jobs: [
          { organization: "Google" },
          { organization: "Microsoft" },
          { organization: "Amazon" },
        ],
        selectedOrganizations: ["Google", "Microsoft"],
      };

      const filteredJobs = getters.FILTERED_JOBS_BY_ORGANIZATIONS(state);
      expect(filteredJobs).toEqual([
        { organization: "Google" },
        { organization: "Microsoft" },
      ]);
    });

    describe("when no organizations are selected", () => {
      it("returns all jobs", () => {
        const state = {
          jobs: [
            { organization: "Google" },
            { organization: "Microsoft" },
            { organization: "Amazon" },
          ],
          selectedOrganizations: [],
        };

        const filteredJobs = getters.FILTERED_JOBS_BY_ORGANIZATIONS(state);
        expect(filteredJobs).toEqual([
          { organization: "Google" },
          { organization: "Microsoft" },
          { organization: "Amazon" },
        ]);
      });
    });
  });

  describe("UNIQUE_JOBS_TYPES", () => {
    it("find unique job types from list of jobs", () => {
      const state = {
        jobs: [
          { jobType: "Full-time" },
          { jobType: "Temporary" },
          { jobType: "Full-time" },
        ],
      };
      const result = getters.UNIQUE_JOB_TYPES(state);
      expect(result).toEqual(new Set(["Full-time", "Temporary"]));
    });
  });

  describe("FILTERED_JOB_TYPES", () => {
    it("identifies jobs that are associated by the given job type", () => {
      const state = {
        jobs: [
          { jobType: "Full-time" },
          { jobType: "Temporary" },
          { jobType: "Part-time" },
        ],
        selectedJobTypes: ["Full-time", "Part-time"],
      };

      const filteredJobs = getters.FILTERED_JOBS_BY_JOB_TYPES(state);
      expect(filteredJobs).toEqual([
        { jobType: "Full-time" },
        { jobType: "Part-time" },
      ]);
    });

    describe("when no job types are selected", () => {
      it("returns all jobs", () => {
        const state = {
          jobs: [
            { jobType: "Full-time" },
            { jobType: "Temporary" },
            { jobType: "Part-time" },
          ],
          selectedJobTypes: [],
        };

        const filteredJobs = getters.FILTERED_JOBS_BY_JOB_TYPES(state);
        expect(filteredJobs).toEqual([
          { jobType: "Full-time" },
          { jobType: "Temporary" },
          { jobType: "Part-time" },
        ]);
      });
    });
  });
});
