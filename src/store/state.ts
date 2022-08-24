import { GlobalState } from "@/store/types";

const state = (): GlobalState => {
  return {
    isLoggedIn: false,
    jobs: [],
    teams: [],
    degrees: [],
    skillsSearchTerm: "",
    locationSearchTerm: "",
    nameSearchTerm: "",
    jobSearchTerm: "",
    selectedOrganizations: [],
    selectedJobTypes: [],
    selectedDegrees: [],
    selectedQualifications: [],
    selectedLanguages: [],
    selectedTeamDisponibility: [],
    selectedTeamPatenta: [],
    selectedTeamAddress: [],
  };
};

export default state;
