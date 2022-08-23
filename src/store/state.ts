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
    selectedLocations: [],
    selectedQualifications: [],
    selectedLanguages: [],
    selectedTeamJob: [],
    selectedTeamName: [],
    selectedTeamDisponibility: [],
    selectedTeamPatenta: [],
    selectedTeamAddress: [],
  };
};

export default state;
