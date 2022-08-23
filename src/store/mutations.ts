import {
  LOGIN_USER,
  RECEIVE_JOBS,
  RECEIVE_DEGREES,
  ADD_SELECTED_ORGANIZATIONS,
  ADD_SELECTED_JOB_TYPES,
  ADD_SELECTED_DEGREES,
  ADD_SELECTED_LOCATIONS,
  CLEAR_USER_JOB_FILTER_SELECTIONS,
  UPDATE_SKILLS_SEARCH_TERM,
  UPDATE_LOCATION_SEARCH_TERM,
  UPDATE_NAME_SEARCH_TERM,
  UPDATE_JOB_SEARCH_TERM,
} from "@/store/constants";

import { GlobalState } from "@/store/types";
import { Job, Degree } from "@/api/types";

const mutations = {
  [LOGIN_USER](state: GlobalState) {
    state.isLoggedIn = true;
  },
  [RECEIVE_JOBS](state: GlobalState, jobs: Job[]) {
    state.jobs = jobs;
  },
  [RECEIVE_DEGREES](state: GlobalState, degrees: Degree[]) {
    state.degrees = degrees;
  },
  [ADD_SELECTED_ORGANIZATIONS](state: GlobalState, organizations: string[]) {
    state.selectedOrganizations = organizations;
  },
  [ADD_SELECTED_JOB_TYPES](state: GlobalState, jobTypes: string[]) {
    state.selectedJobTypes = jobTypes;
  },
  [ADD_SELECTED_DEGREES](state: GlobalState, degrees: string[]) {
    state.selectedDegrees = degrees;
  },
  [ADD_SELECTED_LOCATIONS](state: GlobalState, locations: string[]) {
    state.selectedLocations = locations;
  },
  [CLEAR_USER_JOB_FILTER_SELECTIONS](state: GlobalState) {
    state.selectedOrganizations = [];
    state.selectedJobTypes = [];
    state.selectedDegrees = [];
    state.skillsSearchTerm = "";
  },
  [UPDATE_SKILLS_SEARCH_TERM](state: GlobalState, skillsSearchTerm: string) {
    state.skillsSearchTerm = skillsSearchTerm;
  },
  [UPDATE_LOCATION_SEARCH_TERM](
    state: GlobalState,
    locationSearchTerm: string
  ) {
    state.locationSearchTerm = locationSearchTerm;
  },
  [UPDATE_NAME_SEARCH_TERM](state: GlobalState, nameSearchTerm: string) {
    state.nameSearchTerm = nameSearchTerm;
  },
  [UPDATE_JOB_SEARCH_TERM](state: GlobalState, jobSearchTerm: string) {
    state.jobSearchTerm = jobSearchTerm;
  },
};

export default mutations;
