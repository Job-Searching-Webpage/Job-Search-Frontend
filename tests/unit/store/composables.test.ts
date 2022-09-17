import { useStore } from "vuex";
jest.mock("vuex");

import {
  useFilteredJobs,
  useFilteredTeams,
  useUniqueJobTypes,
  useUniqueOrganizations,
  useUniqueCar,
  useUniqueLocations,
  useUniqueQualifications,
  useUniqueTeamLanguages,
  useUniquePatenta,
  useUniquePeriods,
  useFetchJobsDispatch,
  useUniqueDegrees,
  useFetchDegreesDispatch,
  useFetchTeamsDispatch,
} from "@/store/composables";

const useStoreMock = useStore as jest.Mock;

describe("composables", () => {
  describe("useFilteredJobs", () => {
    it("retrieves filtered jobs from store", () => {
      useStoreMock.mockReturnValue({
        getters: {
          FILTERED_JOBS: [{ id: 1 }],
        },
      });

      const result = useFilteredJobs();
      expect(result.value).toEqual([{ id: 1 }]);
    });
  });

  describe("useFilteredTeams", () => {
    it("retrieves filtered teams from store", () => {
      useStoreMock.mockReturnValue({
        getters: {
          FILTERED_TEAMS: [{ id: 1 }],
        },
      });

      const result = useFilteredTeams();
      expect(result.value).toEqual([{ id: 1 }]);
    });
  });

  describe("useUniqueJobTypes", () => {
    it("retrieves unique job types from store", () => {
      useStoreMock.mockReturnValue({
        getters: {
          UNIQUE_JOB_TYPES: new Set(["Full-time"]),
        },
      });

      const result = useUniqueJobTypes();
      expect(result.value).toEqual(new Set(["Full-time"]));
    });
  });

  describe("useUniqueOrganizations", () => {
    it("retrieves unique job organizations from store", () => {
      useStoreMock.mockReturnValue({
        getters: {
          UNIQUE_ORGANIZATIONS: new Set(["Apple"]),
        },
      });

      const result = useUniqueOrganizations();
      expect(result.value).toEqual(new Set(["Apple"]));
    });
  });

  describe("useUniqueDegrees", () => {
    it("retrieves unique degrees from store", () => {
      useStoreMock.mockReturnValue({
        getters: {
          UNIQUE_DEGREES: ["Ph.D"],
        },
      });

      const result = useUniqueDegrees();
      expect(result.value).toEqual(["Ph.D"]);
    });
  });

  describe("useUniqueLocations", () => {
    it("retrieves unique locations from store", () => {
      useStoreMock.mockReturnValue({
        getters: {
          UNIQUE_LOCATIONS: new Set(["San Francisco"]),
        },
      });

      const result = useUniqueLocations();
      expect(result.value).toEqual(new Set(["San Francisco"]));
    });
  });

  describe("useUniqueQualifications", () => {
    it("retrieves unique qualifications from store", () => {
      useStoreMock.mockReturnValue({
        getters: {
          UNIQUE_QUALIFICATIONS: new Set(["Bachelor's degree"]),
        },
      });

      const result = useUniqueQualifications();
      expect(result.value).toEqual(new Set(["Bachelor's degree"]));
    });
  });

  describe("useUniqueLanguages", () => {
    it("retrieves unique languages from store", () => {
      useStoreMock.mockReturnValue({
        getters: {
          UNIQUE_LANGUAGES: new Set(["English"]),
        },
      });

      const result = useUniqueTeamLanguages();
      expect(result.value).toEqual(new Set(["English"]));
    });
  });

  describe("useUniquePeriods", () => {
    it("retrieves unique periods from store", () => {
      useStoreMock.mockReturnValue({
        getters: {
          UNIQUE_PERIODS: new Set(["1 year"]),
        },
      });

      const result = useUniquePeriods();
      expect(result.value).toEqual(new Set(["1 year"]));
    });
  });

  describe("useUniquePatenta", () => {
    it("retrieves unique patenta from store", () => {
      useStoreMock.mockReturnValue({
        getters: {
          UNIQUE_PATENTA: new Set(["True"]),
        },
      });

      const result = useUniquePatenta();
      expect(result.value).toEqual(new Set(["True"]));
    });
  });

  describe("useUniqueCar", () => {
    it("retrieves unique car from store", () => {
      useStoreMock.mockReturnValue({
        getters: {
          UNIQUE_CAR: new Set(["True"]),
        },
      });

      const result = useUniqueCar();
      expect(result.value).toEqual(new Set(["True"]));
    });
  });

  describe("useFetchJobsDispatch", () => {
    it("sends call to fetch jobs from API", () => {
      const dispatch = jest.fn();
      useStoreMock.mockReturnValue({
        dispatch,
      });
      useFetchJobsDispatch();
      expect(dispatch).toHaveBeenCalledWith("FETCH_JOBS");
    });
  });

  describe("useFetchDegreesDispatch", () => {
    it("sends call to fetch degrees from API", () => {
      const dispatch = jest.fn();
      useStoreMock.mockReturnValue({
        dispatch,
      });
      useFetchDegreesDispatch();
      expect(dispatch).toHaveBeenCalledWith("FETCH_DEGREES");
    });
  });

  describe("useFetchTeamsDispatch", () => {
    it("sends call to fetch teams from API", () => {
      const dispatch = jest.fn();
      useStoreMock.mockReturnValue({
        dispatch,
      });
      useFetchTeamsDispatch();
      expect(dispatch).toHaveBeenCalledWith("FETCH_TEAMS");
    });
  });
});
