import mutations from "@/store/mutations";
import { createDegree, createState, createJob, createTeam } from "./utils";

describe("mutations", () => {
  describe("LOGIN_USER", () => {
    it("logs the user in", () => {
      const startingState = createState({ isLoggedIn: false });
      mutations.LOGIN_USER(startingState);
      expect(startingState.isLoggedIn).toBe(true);
    });
  });

  describe("RECEIVE_JOBS", () => {
    it("receives jobs from API response", () => {
      const startingState = createState({ jobs: [] });
      const jobOne = createJob();
      const jobTwo = createJob();
      mutations.RECEIVE_JOBS(startingState, [jobOne, jobTwo]);
      expect(startingState.jobs).toEqual([jobOne, jobTwo]);
    });
  });

  describe("RECEIVE_DEGREES", () => {
    it("receives degrees from API response", () => {
      const startingState = createState({ degrees: [] });
      const degree = createDegree();
      mutations.RECEIVE_DEGREES(startingState, [degree]);
      expect(startingState.degrees).toEqual([degree]);
    });
  });
  describe("ADD_SELECTED_ORGANIZATIONS", () => {
    it("Updates the organizations that the user has chosen to filter jobs by", () => {
      const startingState = createState({ selectedOrganizations: [] });
      mutations.ADD_SELECTED_ORGANIZATIONS(startingState, ["Org1", "Org2"]);
      expect(startingState.selectedOrganizations).toEqual(["Org1", "Org2"]);
    });
  });

  describe("ADD_SELECTED_JOB_TYPES", () => {
    it("Updates the job types that the user has chosen to filter jobs by", () => {
      const startingState = createState({ selectedJobTypes: [] });
      mutations.ADD_SELECTED_JOB_TYPES(startingState, [
        "Full-time",
        "Part-time",
      ]);
      expect(startingState.selectedJobTypes).toEqual([
        "Full-time",
        "Part-time",
      ]);
    });
  });
  describe("ADD_SELECTED_DEGREES", () => {
    it("keeps track of which degrees the user has chosen to filter jobs by", () => {
      const startingState = createState({ selectedDegrees: [] });
      mutations.ADD_SELECTED_DEGREES(startingState, ["Bachelor's", "Master's"]);
      expect(startingState.selectedDegrees).toEqual(["Bachelor's", "Master's"]);
    });
  });

  describe("UPDATE_SKILLS_SEARCH_TERM", () => {
    it("receives search term from API response", () => {
      const startingState = createState({ skillsSearchTerm: "" });
      mutations.UPDATE_SKILLS_SEARCH_TERM(startingState, "Vue");
      expect(startingState.skillsSearchTerm).toEqual("Vue");
    });
  });

  describe("CLEAR_USER_JOB_FILTER_SELECTIONS", () => {
    it("removes all job filters that user has chosen", () => {
      const startingState = createState({
        selectedOrganizations: ["Org1", "Org2"],
        selectedJobTypes: ["Full-time", "Part-time"],
        selectedDegrees: ["Bachelor's", "Master's"],
        skillsSearchTerm: "Vue",
      });
      mutations.CLEAR_USER_JOB_FILTER_SELECTIONS(startingState);
      expect(startingState.selectedOrganizations).toEqual([]);
      expect(startingState.selectedJobTypes).toEqual([]);
      expect(startingState.selectedDegrees).toEqual([]);
      expect(startingState.skillsSearchTerm).toEqual("");
    });
  });

  describe("RECEIVE_TEAMS", () => {
    it("receives teams from API response", () => {
      const startingState = createState({ teams: [] });
      const teamOne = createTeam();
      const teamTwo = createTeam();
      mutations.RECEIVE_TEAMS(startingState, [teamOne, teamTwo]);
      expect(startingState.teams).toEqual([teamOne, teamTwo]);
    });
  });

  describe("ADD_SELECTED_LOCATIONS", () => {
    it("Updates the locations that the user has chosen to filter jobs by", () => {
      const startingState = createState({ selectedTeamAddress: [] });
      mutations.ADD_SELECTED_LOCATIONS(startingState, ["Loc1", "Loc2"]);
      expect(startingState.selectedTeamAddress).toEqual(["Loc1", "Loc2"]);
    });
  });

  describe("ADD_SELECTED_TEAM_LANGUAGES", () => {
    it("Updates the languages that the user has chosen to filter jobs by", () => {
      const startingState = createState({ selectedLanguages: [] });
      mutations.ADD_SELECTED_TEAM_LANGUAGES(startingState, [
        "English",
        "French",
      ]);
      expect(startingState.selectedLanguages).toEqual(["English", "French"]);
    });
  });

  describe("ADD_SELECTED_PATENTA", () => {
    it("Updates the patenta that the user has chosen to filter jobs by", () => {
      const startingState = createState({ selectedTeamPatenta: [] });
      mutations.ADD_SELECTED_PATENTA(startingState, ["True", "False"]);
      expect(startingState.selectedTeamPatenta).toEqual(["True", "False"]);
    });
  });

  describe("ADD_SELECTED_CAR", () => {
    it("Updates the car that the user has chosen to filter jobs by", () => {
      const startingState = createState({ selectedTeamCar: [] });
      mutations.ADD_SELECTED_CAR(startingState, ["True", "False"]);
      expect(startingState.selectedTeamCar).toEqual(["True", "False"]);
    });
  });

  describe("ADD_SELECTED_QUALIFICATIONS", () => {
    it("Updates the qualifications that the user has chosen to filter jobs by", () => {
      const startingState = createState({ selectedQualifications: [] });
      mutations.ADD_SELECTED_QUALIFICATIONS(startingState, [
        "Qualification1",
        "Qualification2",
      ]);
      expect(startingState.selectedQualifications).toEqual([
        "Qualification1",
        "Qualification2",
      ]);
    });
  });

  describe("UPDATE_NAME_SEARCH_TERM", () => {
    it("receives search term from API response", () => {
      const startingState = createState({ nameSearchTerm: "" });
      mutations.UPDATE_NAME_SEARCH_TERM(startingState, "Human");
      expect(startingState.nameSearchTerm).toEqual("Human");
    });
  });

  describe("UPDATE_JOB_SEARCH_TERM", () => {
    it("receives search term from API response", () => {
      const startingState = createState({ jobSearchTerm: "" });
      mutations.UPDATE_JOB_SEARCH_TERM(startingState, "King");
      expect(startingState.jobSearchTerm).toEqual("King");
    });
  });

  describe("UPDATE_PERIOD_SEARCH_TERM", () => {
    it("receives search term from API response", () => {
      const startingState = createState({ periodSearchTerm: "" });
      mutations.UPDATE_PERIOD_SEARCH_TERM(startingState, "lifetime");
      expect(startingState.periodSearchTerm).toEqual("lifetime");
    });
  });

  describe("CLEAR_USER_TEAM_FILTER_SELECTIONS", () => {
    it("removes all team filters that user has chosen", () => {
      const startingState = createState({
        selectedTeamAddress: ["Loc1", "Loc2"],
        selectedLanguages: ["English", "French"],
        selectedTeamPatenta: ["True", "False"],
        selectedTeamCar: ["True", "False"],
        selectedQualifications: ["Qualification1", "Qualification2"],
        nameSearchTerm: "Human",
        jobSearchTerm: "King",
        periodSearchTerm: "lifetime",
      });
      mutations.CLEAR_USER_TEAM_FILTER_SELECTIONS(startingState);
      expect(startingState.selectedTeamAddress).toEqual([]);
      expect(startingState.selectedLanguages).toEqual([]);
      expect(startingState.selectedTeamPatenta).toEqual([]);
      expect(startingState.selectedTeamCar).toEqual([]);
      expect(startingState.selectedQualifications).toEqual([]);
      expect(startingState.nameSearchTerm).toEqual("");
      expect(startingState.jobSearchTerm).toEqual("");
      expect(startingState.periodSearchTerm).toEqual("");
    });
  });
});
