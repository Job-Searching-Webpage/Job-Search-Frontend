import { GlobalState } from "@/store/types";

const state = (): GlobalState => {
  return {
    isLoggedIn: false,
    showModal: false,
    jobs: [],
    degrees: [],
    selectedDegrees: [],
    selectedJobTypes: [],
    selectedOrganizations: [],
    skillsSearchTerm: "",
    locationSearchTerm: "",

    teams: [],
    nameSearchTerm: "",
    jobSearchTerm: "",
    periodSearchTerm: "",
    selectedQualifications: [],
    selectedLanguages: [],
    selectedTeamPatenta: [],
    selectedTeamCar: [],
    selectedTeamAddress: [],
  };
};

export default state;
