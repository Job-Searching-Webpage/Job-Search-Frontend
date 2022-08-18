import { GlobalState } from "@/store/types";

const state = (): GlobalState => {
  return {
    isLoggedIn: false,
    jobs: [],
    degrees: [],
    skillsSearchTerm: "",
    locationSearchTerm: "",
    selectedOrganizations: [],
    selectedJobTypes: [],
    selectedDegrees: [],
  };
};

export default state;
