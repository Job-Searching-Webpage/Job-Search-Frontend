import {
  LOGIN_USER,
  BUTTON_CLICK_SHOW_MODAL,
  RECEIVE_JOBS,
  RECEIVE_DEGREES,
  ADD_SELECTED_ORGANIZATIONS,
  ADD_SELECTED_JOB_TYPES,
  ADD_SELECTED_DEGREES,
  UPDATE_SKILLS_SEARCH_TERM,
  UPDATE_LOCATION_SEARCH_TERM,
  CLEAR_USER_JOB_FILTER_SELECTIONS,
  RECEIVE_TEAMS,
  ADD_SELECTED_LOCATIONS,
  ADD_SELECTED_TEAM_LANGUAGES,
  ADD_SELECTED_PATENTA,
  ADD_SELECTED_CAR,
  ADD_SELECTED_QUALIFICATIONS,
  UPDATE_NAME_SEARCH_TERM,
  UPDATE_JOB_SEARCH_TERM,
  UPDATE_PERIOD_SEARCH_TERM,
  CLEAR_USER_TEAM_FILTER_SELECTIONS,
} from "@/store/constants";

import { GlobalState } from "@/store/types";
import { Job, Degree, Team } from "@/api/types";

const mutations = {
  [LOGIN_USER](state: GlobalState) {
    state.isLoggedIn = true;
  },
  [BUTTON_CLICK_SHOW_MODAL](state: GlobalState) {
    state.showModal = true;
    state.isLoggedIn = true;
  },
  [RECEIVE_JOBS](state: GlobalState, jobs: Job[]) {
    state.jobs = jobs;
  },
  [RECEIVE_DEGREES](state: GlobalState, degrees: Degree[]) {
    state.degrees = degrees;
  },
  [RECEIVE_TEAMS](state: GlobalState, teams: Team[]) {
    state.teams = teams;
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
    state.selectedTeamAddress = locations;
  },
  [ADD_SELECTED_TEAM_LANGUAGES](state: GlobalState, teamLanguages: string[]) {
    state.selectedLanguages = teamLanguages;
  },
  [ADD_SELECTED_PATENTA](state: GlobalState, patenta: string[]) {
    state.selectedTeamPatenta = patenta;
  },
  [ADD_SELECTED_CAR](state: GlobalState, car: string[]) {
    state.selectedTeamCar = car;
  },
  [ADD_SELECTED_QUALIFICATIONS](state: GlobalState, qualifications: string[]) {
    state.selectedQualifications = qualifications;
  },
  [CLEAR_USER_JOB_FILTER_SELECTIONS](state: GlobalState) {
    state.selectedOrganizations = [];
    state.selectedJobTypes = [];
    state.selectedDegrees = [];
    state.skillsSearchTerm = "";
    state.locationSearchTerm = "";
  },
  [CLEAR_USER_TEAM_FILTER_SELECTIONS](state: GlobalState) {
    state.selectedTeamAddress = [];
    state.selectedTeamPatenta = [];
    state.selectedTeamCar = [];
    state.selectedLanguages = [];
    state.selectedQualifications = [];
    state.nameSearchTerm = "";
    state.jobSearchTerm = "";
    state.periodSearchTerm = "";
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
  [UPDATE_PERIOD_SEARCH_TERM](state: GlobalState, periodSearchTerm: string) {
    state.periodSearchTerm = periodSearchTerm;
  },
};

export default mutations;
