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
    periodSearchTerm: "",
    selectedOrganizations: [],
    selectedJobTypes: [],
    selectedDegrees: [],
    selectedQualifications: [],
    selectedLanguages: [],
    selectedTeamPatenta: [],
    selectedTeamAddress: [],
  };
};

export default state;
