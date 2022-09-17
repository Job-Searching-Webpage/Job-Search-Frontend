import getters from "@/store/getters";
import { createState, createJob, createDegree, createTeam } from "./utils";

describe("getters", () => {
  describe("UNIQUE_ORGANIZATIONS", () => {
    it("find unique organizations from list of jobs", () => {
      const jobs = [
        createJob({ organization: "Google" }),
        createJob({ organization: "Amazon" }),
        createJob({ organization: "Google" }),
      ];
      const state = createState({ jobs });
      const result = getters.UNIQUE_ORGANIZATIONS(state);
      expect(result).toEqual(new Set(["Google", "Amazon"]));
    });
  });

  describe("UNIQUE_JOBS_TYPES", () => {
    it("find unique job types from list of jobs", () => {
      const jobs = [
        createJob({ jobType: "Full-time" }),
        createJob({ jobType: "Temporary" }),
        createJob({ jobType: "Full-time" }),
      ];
      const state = createState({ jobs });
      const result = getters.UNIQUE_JOB_TYPES(state);
      expect(result).toEqual(new Set(["Full-time", "Temporary"]));
    });
  });

  describe("UNIQUE_DEGREES", () => {
    it("extracts unique degree vales", () => {
      const degrees = [
        createDegree({ degree: "Bachelor" }),
        createDegree({ degree: "Master" }),
      ];
      const state = createState({ degrees });
      const result = getters.UNIQUE_DEGREES(state);
      expect(result).toEqual(["Bachelor", "Master"]);
    });
  });

  describe("INCLUDE_JOB_BY_ORGANIZATION", () => {
    describe("When user has not selected any organizations", () => {
      it("includes jobs", () => {
        const state = createState({ selectedOrganizations: [] });
        const job = createJob({ organization: "Google" });
        const includeJob = getters.INCLUDE_JOB_BY_ORGANIZATION(state)(job);
        expect(includeJob).toBe(true);
      });
    });
    it("identifies if job is associated by the given organization", () => {
      const state = createState({
        selectedOrganizations: ["Google", "Microsoft"],
      });
      const job = createJob({ organization: "Google" });
      const includeJob = getters.INCLUDE_JOB_BY_ORGANIZATION(state)(job);
      expect(includeJob).toBe(true);
    });
  });
  describe("INCLUDE_JOB_BY_JOB_TYPE", () => {
    describe("When user has not selected any job types", () => {
      it("includes jobs", () => {
        const state = createState({ selectedJobTypes: [] });
        const job = createJob({ jobType: "Full-time" });
        const includeJob = getters.INCLUDE_JOB_BY_JOB_TYPE(state)(job);
        expect(includeJob).toBe(true);
      });
    });
    it("identifies if job is associated by the given job type", () => {
      const state = createState({
        selectedJobTypes: ["Full-time", "Part-time"],
      });
      const job = createJob({ jobType: "Full-time" });
      const includeJob = getters.INCLUDE_JOB_BY_JOB_TYPE(state)(job);
      expect(includeJob).toBe(true);
    });
  });

  describe("INCLUDE_JOB_BY_DEGREE", () => {
    describe("When user has not selected any degrees", () => {
      it("includes jobs", () => {
        const state = createState({ selectedDegrees: [] });
        const job = createJob({ degree: "Associate" });
        const includeJob = getters.INCLUDE_JOB_BY_DEGREE(state)(job);
        expect(includeJob).toBe(true);
      });
    });
    it("identifies if job is associated by the given degree", () => {
      const state = createState({
        selectedDegrees: ["Ph.D", "Associate"],
      });
      const job = createJob({ degree: "Associate" });
      const includeJob = getters.INCLUDE_JOB_BY_DEGREE(state)(job);
      expect(includeJob).toBe(true);
    });
  });

  describe("INCLUDE_JOB_BY_SKILL", () => {
    it("identifies if job is associated by the given skill", () => {
      const state = createState({
        skillsSearchTerm: "Vue",
      });
      const job = createJob({ title: "Vue Developer" });
      const includeJob = getters.INCLUDE_JOB_BY_SKILL(state)(job);
      expect(includeJob).toBe(true);
    });

    it("handles inconsistent character casing", () => {
      const state = createState({
        skillsSearchTerm: "vuE",
      });
      const job = createJob({ title: "Vue Developer" });
      const includeJob = getters.INCLUDE_JOB_BY_SKILL(state)(job);
      expect(includeJob).toBe(true);
    });

    describe("When user has not entered any skills", () => {
      it("includes jobs", () => {
        const state = createState({ skillsSearchTerm: "" });
        const job = createJob({ title: "Vue Developer" });
        const includeJob = getters.INCLUDE_JOB_BY_SKILL(state)(job);
        expect(includeJob).toBe(true);
      });
    });
  });

  describe("INCLUDE_JOB_BY_LOCATION", () => {
    it("identifies if job is associated by the given location", () => {
      const state = createState({
        locationSearchTerm: "Lisbon",
      });
      const job = createJob({ location: "Lisbon" });
      const includeJob = getters.INCLUDE_JOB_BY_LOCATION(state)(job);
      expect(includeJob).toBe(true);
    });

    it("handles inconsistent character casing", () => {
      const state = createState({
        locationSearchTerm: "LisBon",
      });
      const job = createJob({ location: "Lisbon" });
      const includeJob = getters.INCLUDE_JOB_BY_LOCATION(state)(job);
      expect(includeJob).toBe(true);
    });

    describe("When user has not entered any locations", () => {
      it("includes jobs", () => {
        const state = createState({ locationSearchTerm: "" });
        const job = createJob({ location: "Lisbon" });
        const includeJob = getters.INCLUDE_JOB_BY_LOCATION(state)(job);
        expect(includeJob).toBe(true);
      });
    });
  });

  describe("FILTERED_JOBS", () => {
    it("filters jobs by selected organizations, job types, degree and skills", () => {
      const INCLUDE_JOB_BY_ORGANIZATION = jest.fn().mockReturnValue(true);
      const INCLUDE_JOB_BY_JOB_TYPE = jest.fn().mockReturnValue(true);
      const INCLUDE_JOB_BY_DEGREE = jest.fn().mockReturnValue(true);
      const INCLUDE_JOB_BY_SKILL = jest.fn().mockReturnValue(true);
      const INCLUDE_JOB_BY_LOCATION = jest.fn().mockReturnValue(true);

      const mockGetters = {
        INCLUDE_JOB_BY_ORGANIZATION,
        INCLUDE_JOB_BY_JOB_TYPE,
        INCLUDE_JOB_BY_DEGREE,
        INCLUDE_JOB_BY_SKILL,
        INCLUDE_JOB_BY_LOCATION,
      };

      const job = createJob({ title: "Best job ever" });
      const state = createState({
        jobs: [job],
      });

      const result = getters.FILTERED_JOBS(state, mockGetters);
      expect(result).toEqual([job]);
      expect(INCLUDE_JOB_BY_ORGANIZATION).toHaveBeenCalledWith(job);
      expect(INCLUDE_JOB_BY_JOB_TYPE).toHaveBeenCalledWith(job);
      expect(INCLUDE_JOB_BY_DEGREE).toHaveBeenCalledWith(job);
      expect(INCLUDE_JOB_BY_SKILL).toHaveBeenCalledWith(job);
      expect(INCLUDE_JOB_BY_LOCATION).toHaveBeenCalledWith(job);
    });
  });

  describe("UNIQUE_LOCATIONS", () => {
    it("find unique addresses from list of teams", () => {
      const teams = [
        createTeam({ address: "New York" }),
        createTeam({ address: "New York" }),
        createTeam({ address: "San Francisco" }),
      ];
      const state = createState({ teams });
      const result = getters.UNIQUE_LOCATIONS(state);
      expect(result).toEqual(new Set(["New York", "San Francisco"]));
    });
  });

  describe("UNIQUE_LANGUAGES", () => {
    it("find unique languages from list of teams", () => {
      const teams = [
        createTeam({ languages: ["Italian", "English"] }),
        createTeam({ languages: ["Italian", "English"] }),
        createTeam({ languages: ["Albanian", "English"] }),
      ];
      const state = createState({ teams });
      const result = getters.UNIQUE_LANGUAGES(state);
      expect(result).toEqual(new Set(["Italian", "English", "Albanian"]));
    });
  });

  describe("UNIQUE_PATENTA", () => {
    it("find unique patenta values from list of teams", () => {
      const teams = [
        createTeam({ patenta: "True" }),
        createTeam({ patenta: "True" }),
        createTeam({ patenta: "False" }),
      ];
      const state = createState({ teams });
      const result = getters.UNIQUE_PATENTA(state);
      expect(result).toEqual(new Set(["True", "False"]));
    });
  });

  describe("UNIQUE_CAR", () => {
    it("find unique car values from list of teams", () => {
      const teams = [
        createTeam({ car: "True" }),
        createTeam({ car: "True" }),
        createTeam({ car: "False" }),
      ];
      const state = createState({ teams });
      const result = getters.UNIQUE_CAR(state);
      expect(result).toEqual(new Set(["True", "False"]));
    });
  });

  describe("UNIQUE_QUALIFICATIONS", () => {
    it("find unique qualifications from list of teams", () => {
      const teams = [
        createTeam({ qualification: "Master" }),
        createTeam({ qualification: "PHD" }),
        createTeam({ qualification: "Master" }),
      ];
      const state = createState({ teams });
      const result = getters.UNIQUE_QUALIFICATIONS(state);
      expect(result).toEqual(new Set(["Master", "PHD"]));
    });
  });

  describe("INCLUDE_TEAM_BY_LOCATION", () => {
    describe("When user has not selected any locations", () => {
      it("includes teams", () => {
        const state = createState({ selectedTeamAddress: [] });
        const team = createTeam({ address: "Lisbon" });
        const includeTeam = getters.INCLUDE_TEAM_BY_LOCATION(state)(team);
        expect(includeTeam).toBe(true);
      });
    });
    it("identifies if address is associated by the give team", () => {
      const state = createState({ selectedTeamAddress: ["Lisbon", "Tirana"] });
      const team = createTeam({ address: "Lisbon" });
      const includeTeam = getters.INCLUDE_TEAM_BY_LOCATION(state)(team);
      expect(includeTeam).toBe(true);
    });
  });

  describe("INCLUDE_TEAM_BY_QUALIFICATION", () => {
    describe("When user has not selected any qualifications", () => {
      it("includes teams", () => {
        const state = createState({ selectedQualifications: [] });
        const team = createTeam({ qualification: "Master" });
        const includeTeam = getters.INCLUDE_TEAM_BY_QUALIFICATION(state)(team);
        expect(includeTeam).toBe(true);
      });
    });
    it("identifies if qualification is associated by the give team", () => {
      const state = createState({ selectedQualifications: ["Master", "PHD"] });
      const team = createTeam({ qualification: "Master" });
      const includeTeam = getters.INCLUDE_TEAM_BY_QUALIFICATION(state)(team);
      expect(includeTeam).toBe(true);
    });
  });

  describe("INCLUDE_TEAM_BY_LANGUAGE", () => {
    describe("When user has not selected any languages", () => {
      it("includes teams", () => {
        const state = createState({ selectedLanguages: [] });
        const team = createTeam({ languages: ["Italian", "English"] });
        const includeTeam = getters.INCLUDE_TEAM_BY_LANGUAGE(state)(team);
        expect(includeTeam).toBe(true);
      });
    });
    it("identifies if language is associated by the give team", () => {
      const state = createState({ selectedLanguages: ["Italian", "English"] });
      const team = createTeam({ languages: ["Italian", "English"] });
      const includeTeam = getters.INCLUDE_TEAM_BY_LANGUAGE(state)(team);
      expect(includeTeam).toBe(true);
    });
  });

  describe("INCLUDE_TEAM_BY_JOB", () => {
    it("identifies if worker is associated by the given job", () => {
      const state = createState({
        jobSearchTerm: "Liv",
      });
      const team = createTeam({ jobType: "Living" });
      const includeTeam = getters.INCLUDE_TEAM_BY_JOB(state)(team);
      expect(includeTeam).toBe(true);
    });

    it("handles inconsistent character casing", () => {
      const state = createState({
        jobSearchTerm: "vuE",
      });
      const team = createTeam({ jobType: "Vue Developer" });
      const includeTeam = getters.INCLUDE_TEAM_BY_JOB(state)(team);
      expect(includeTeam).toBe(true);
    });

    describe("When user has not entered any jobs", () => {
      it("includes jobs", () => {
        const state = createState({ jobSearchTerm: "" });
        const team = createTeam({ jobType: "Vue Developer" });
        const includeTeam = getters.INCLUDE_TEAM_BY_JOB(state)(team);
        expect(includeTeam).toBe(true);
      });
    });
  });

  describe("INCLUDE_TEAM_BY_NAME", () => {
    it("identifies if name is associated by the given team", () => {
      const state = createState({ nameSearchTerm: "Human" });
      const team = createTeam({ name: "Human" });
      const includeTeam = getters.INCLUDE_TEAM_BY_NAME(state)(team);
      expect(includeTeam).toBe(true);
    });

    it("handles inconsistent character casing", () => {
      const state = createState({ nameSearchTerm: "humAn" });
      const team = createTeam({ name: "Human" });
      const includeTeam = getters.INCLUDE_TEAM_BY_NAME(state)(team);
      expect(includeTeam).toBe(true);
    });

    describe("When user has not entered any names", () => {
      it("includes names", () => {
        const state = createState({ nameSearchTerm: "" });
        const team = createTeam({ name: "Human" });
        const includeTeam = getters.INCLUDE_TEAM_BY_NAME(state)(team);
        expect(includeTeam).toBe(true);
      });
    });
  });

  describe("INCLUDE_TEAM_BY_PERIOD", () => {
    it("identifies if period is associated by the given team", () => {
      const state = createState({
        periodSearchTerm: "1 year",
      });
      const team = createTeam({ period: "1 year" });
      const includeTeam = getters.INCLUDE_TEAM_BY_PERIOD(state)(team);
      expect(includeTeam).toBe(true);
    });

    it("handles inconsistent character casing", () => {
      const state = createState({ periodSearchTerm: "1 year" });
      const team = createTeam({ period: "1 Year" });
      const includeTeam = getters.INCLUDE_TEAM_BY_PERIOD(state)(team);
      expect(includeTeam).toBe(true);
    });

    describe("When user has not entered any periods", () => {
      it("includes periods", () => {
        const state = createState({ periodSearchTerm: "" });
        const team = createTeam({ period: "1 year" });
        const includeTeam = getters.INCLUDE_TEAM_BY_PERIOD(state)(team);
        expect(includeTeam).toBe(true);
      });
    });
  });

  describe("INCLUDE_TEAM_BY_PATENTA", () => {
    describe("When user has not selected any patenta", () => {
      it("includes teams", () => {
        const state = createState({ selectedTeamPatenta: [] });
        const team = createTeam({ patenta: "True" });
        const includeTeam = getters.INCLUDE_TEAM_BY_PATENTA(state)(team);
        expect(includeTeam).toBe(true);
      });
    });
    it("identifies if patenta is associated by the give team", () => {
      const state = createState({ selectedTeamPatenta: ["True", "False"] });
      const team = createTeam({ patenta: "True" });
      const includeTeam = getters.INCLUDE_TEAM_BY_PATENTA(state)(team);
      expect(includeTeam).toBe(true);
    });
  });

  describe("INCLUDE_TEAM_BY_CAR", () => {
    describe("when user has not selected any cars", () => {
      it("includes teams", () => {
        const state = createState({ selectedTeamCar: [] });
        const team = createTeam({ car: "True" });
        const includeTeam = getters.INCLUDE_TEAM_BY_CAR(state)(team);
        expect(includeTeam).toBe(true);
      });
    });
    it("identifies if car is associated by the given team", () => {
      const state = createState({ selectedTeamCar: ["True", "False"] });
      const team = createTeam({ car: "True" });
      const includeTeam = getters.INCLUDE_TEAM_BY_CAR(state)(team);
      expect(includeTeam).toBe(true);
    });
  });

  describe("INCLUDE_TEAM_BY_ADDRESS", () => {
    describe("when user has not entered any addresses", () => {
      it("includes teams", () => {
        const state = createState({ selectedTeamAddress: [] });
        const team = createTeam({ address: "house" });
        const includeTeam = getters.INCLUDE_TEAM_BY_ADDRESS(state)(team);
        expect(includeTeam).toBe(true);
      });
    });
    it("identifies if address is associated by the given team", () => {
      const state = createState({ selectedTeamAddress: ["house", "street"] });
      const team = createTeam({ address: "house" });
      const includeTeam = getters.INCLUDE_TEAM_BY_ADDRESS(state)(team);
      expect(includeTeam).toBe(true);
    });
  });

  describe("FILTERED_TEAMS", () => {
    it("filters workers by the selected filters", () => {
      const INCLUDE_TEAM_BY_LOCATION = jest.fn().mockReturnValue(true);
      const INCLUDE_TEAM_BY_QUALIFICATION = jest.fn().mockReturnValue(true);
      const INCLUDE_TEAM_BY_LANGUAGE = jest.fn().mockReturnValue(true);
      const INCLUDE_TEAM_BY_JOB = jest.fn().mockReturnValue(true);
      const INCLUDE_TEAM_BY_NAME = jest.fn().mockReturnValue(true);
      const INCLUDE_TEAM_BY_PERIOD = jest.fn().mockReturnValue(true);
      const INCLUDE_TEAM_BY_PATENTA = jest.fn().mockReturnValue(true);
      const INCLUDE_TEAM_BY_CAR = jest.fn().mockReturnValue(true);
      const INCLUDE_TEAM_BY_ADDRESS = jest.fn().mockReturnValue(true);

      const mockGetters = {
        INCLUDE_TEAM_BY_LOCATION,
        INCLUDE_TEAM_BY_QUALIFICATION,
        INCLUDE_TEAM_BY_LANGUAGE,
        INCLUDE_TEAM_BY_JOB,
        INCLUDE_TEAM_BY_NAME,
        INCLUDE_TEAM_BY_PERIOD,
        INCLUDE_TEAM_BY_PATENTA,
        INCLUDE_TEAM_BY_CAR,
        INCLUDE_TEAM_BY_ADDRESS,
      };

      const team = createTeam({ name: "Human" });
      const state = createState({
        teams: [team],
      });

      const result = getters.FILTERED_TEAMS(state, mockGetters);
      expect(result).toEqual([team]);
      expect(INCLUDE_TEAM_BY_LOCATION).toHaveBeenCalledWith(team);
      expect(INCLUDE_TEAM_BY_QUALIFICATION).toHaveBeenCalledWith(team);
      expect(INCLUDE_TEAM_BY_LANGUAGE).toHaveBeenCalledWith(team);
      expect(INCLUDE_TEAM_BY_JOB).toHaveBeenCalledWith(team);
      expect(INCLUDE_TEAM_BY_NAME).toHaveBeenCalledWith(team);
      expect(INCLUDE_TEAM_BY_PERIOD).toHaveBeenCalledWith(team);
      expect(INCLUDE_TEAM_BY_PATENTA).toHaveBeenCalledWith(team);
      expect(INCLUDE_TEAM_BY_CAR).toHaveBeenCalledWith(team);
      expect(INCLUDE_TEAM_BY_ADDRESS).toHaveBeenCalledWith(team);
    });
  });
});
