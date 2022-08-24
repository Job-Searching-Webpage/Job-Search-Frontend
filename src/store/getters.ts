import {
  UNIQUE_ORGANIZATIONS,
  UNIQUE_JOB_TYPES,
  UNIQUE_DEGREES,
  INCLUDE_JOB_BY_ORGANIZATION,
  INCLUDE_JOB_BY_JOB_TYPE,
  INCLUDE_JOB_BY_DEGREE,
  INCLUDE_JOB_BY_SKILL,
  INCLUDE_JOB_BY_LOCATION,
  FILTERED_JOBS,

  /*Teams*/
  UNIQUE_LOCATIONS,
  UNIQUE_LANGUAGES,
  UNIQUE_PATENTA,
  UNIQUE_CAR,
  UNIQUE_QUALIFICATIONS,
  INCLUDE_TEAM_BY_LOCATION,
  INCLUDE_TEAM_BY_QUALIFICATION,
  INCLUDE_TEAM_BY_LANGUAGE,
  INCLUDE_TEAM_BY_JOB,
  INCLUDE_TEAM_BY_NAME,
  INCLUDE_TEAM_BY_PERIOD,
  INCLUDE_TEAM_BY_PATENTA,
  INCLUDE_TEAM_BY_CAR,
  INCLUDE_TEAM_BY_ADDRESS,
  FILTERED_TEAMS,
} from "@/store/constants";

import { GlobalState } from "@/store/types";
import { Job, Team } from "@/api/types";

interface IncludeJobGetters {
  INCLUDE_JOB_BY_ORGANIZATION: (job: Job) => boolean;
  INCLUDE_JOB_BY_JOB_TYPE: (job: Job) => boolean;
  INCLUDE_JOB_BY_DEGREE: (job: Job) => boolean;
  INCLUDE_JOB_BY_SKILL: (job: Job) => boolean;
  INCLUDE_JOB_BY_LOCATION: (job: Job) => boolean;
}

interface IncludeTeamGetters {
  INCLUDE_TEAM_BY_LOCATION: (team: Team) => boolean;
  INCLUDE_TEAM_BY_QUALIFICATION: (team: Team) => boolean;
  INCLUDE_TEAM_BY_LANGUAGE: (team: Team) => boolean;
  INCLUDE_TEAM_BY_JOB: (team: Team) => boolean;
  INCLUDE_TEAM_BY_NAME: (team: Team) => boolean;
  INCLUDE_TEAM_BY_PERIOD: (team: Team) => boolean;
  INCLUDE_TEAM_BY_PATENTA: (team: Team) => boolean;
  INCLUDE_TEAM_BY_CAR: (team: Team) => boolean;
  INCLUDE_TEAM_BY_ADDRESS: (team: Team) => boolean;
}

const getters = {
  [UNIQUE_ORGANIZATIONS](state: GlobalState) {
    const uniqueOrganizations = new Set<string>();
    state.jobs.forEach((job) => uniqueOrganizations.add(job.organization));
    return uniqueOrganizations;
  },
  [UNIQUE_JOB_TYPES](state: GlobalState) {
    const uniqueJobTypes = new Set<string>();
    state.jobs.forEach((job) => uniqueJobTypes.add(job.jobType));
    return uniqueJobTypes;
  },
  [UNIQUE_DEGREES](state: GlobalState) {
    return state.degrees.map((degree) => degree.degree);
  },
  [INCLUDE_JOB_BY_ORGANIZATION]: (state: GlobalState) => (job: Job) => {
    if (state.selectedOrganizations.length === 0) return true;
    return state.selectedOrganizations.includes(job.organization);
  },
  [INCLUDE_JOB_BY_JOB_TYPE]: (state: GlobalState) => (job: Job) => {
    if (state.selectedJobTypes.length === 0) return true;
    return state.selectedJobTypes.includes(job.jobType);
  },
  [INCLUDE_JOB_BY_DEGREE]: (state: GlobalState) => (job: Job) => {
    if (state.selectedDegrees.length === 0) return true;
    return state.selectedDegrees.includes(job.degree);
  },
  [INCLUDE_JOB_BY_SKILL]: (state: GlobalState) => (job: Job) => {
    return job.title
      .toLowerCase()
      .includes(state.skillsSearchTerm.toLowerCase());
  },
  [INCLUDE_JOB_BY_LOCATION]: (state: GlobalState) => (job: Job) => {
    return job.location
      .toLowerCase()
      .includes(state.locationSearchTerm.toLowerCase());
  },
  [FILTERED_JOBS](state: GlobalState, getters: IncludeJobGetters) {
    return state.jobs
      .filter((job) => getters.INCLUDE_JOB_BY_ORGANIZATION(job))
      .filter((job) => getters.INCLUDE_JOB_BY_JOB_TYPE(job))
      .filter((job) => getters.INCLUDE_JOB_BY_DEGREE(job))
      .filter((job) => getters.INCLUDE_JOB_BY_SKILL(job))
      .filter((job) => getters.INCLUDE_JOB_BY_LOCATION(job));
  },

  /* TEAM GETTERS */
  [UNIQUE_LOCATIONS](state: GlobalState) {
    const uniqueLocations = new Set<string>();
    state.teams.forEach((team) => uniqueLocations.add(team.address));
    return uniqueLocations;
  },
  [UNIQUE_LANGUAGES](state: GlobalState) {
    let uniqueLanguages = new Set<string>();
    state.teams.forEach((team) => {
      uniqueLanguages = new Set([...uniqueLanguages, ...team.languages]);
    });
    return uniqueLanguages;
  },
  [UNIQUE_PATENTA](state: GlobalState) {
    const uniquePatenta = new Set<string>();
    state.teams.forEach((team) => uniquePatenta.add(team.patenta));
    return uniquePatenta;
  },
  [UNIQUE_CAR](state: GlobalState) {
    const uniqueCar = new Set<string>();
    state.teams.forEach((team) => uniqueCar.add(team.car));
    return uniqueCar;
  },
  [UNIQUE_QUALIFICATIONS](state: GlobalState) {
    const uniqueQualifications = new Set<string>();
    state.teams.forEach((team) => uniqueQualifications.add(team.qualification));
    return uniqueQualifications;
  },
  [INCLUDE_TEAM_BY_LOCATION]: (state: GlobalState) => (team: Team) => {
    if (state.selectedTeamAddress.length === 0) return true;
    return state.selectedTeamAddress.includes(team.address);
  },
  [INCLUDE_TEAM_BY_QUALIFICATION]: (state: GlobalState) => (team: Team) => {
    if (state.selectedQualifications.length === 0) return true;
    return state.selectedQualifications.includes(team.qualification);
  },
  [INCLUDE_TEAM_BY_LANGUAGE]: (state: GlobalState) => (team: Team) => {
    if (state.selectedLanguages.length === 0) return true;
    return state.selectedLanguages.every((language) =>
      team.languages.includes(language)
    );
  },
  [INCLUDE_TEAM_BY_JOB]: (state: GlobalState) => (team: Team) => {
    return team.jobType
      .toLowerCase()
      .includes(state.jobSearchTerm.toLowerCase());
  },
  [INCLUDE_TEAM_BY_NAME]: (state: GlobalState) => (team: Team) => {
    return team.name.toLowerCase().includes(state.nameSearchTerm.toLowerCase());
  },
  [INCLUDE_TEAM_BY_PERIOD]: (state: GlobalState) => (team: Team) => {
    return team.period
      .toLowerCase()
      .includes(state.periodSearchTerm.toLowerCase());
  },
  [INCLUDE_TEAM_BY_PATENTA]: (state: GlobalState) => (team: Team) => {
    if (state.selectedTeamPatenta.length === 0) return true;
    return state.selectedTeamPatenta.includes(team.patenta);
  },
  [INCLUDE_TEAM_BY_CAR]: (state: GlobalState) => (team: Team) => {
    if (state.selectedTeamCar.length === 0) return true;
    return state.selectedTeamCar.includes(team.car);
  },
  [INCLUDE_TEAM_BY_ADDRESS]: (state: GlobalState) => (team: Team) => {
    if (state.selectedTeamAddress.length === 0) return true;
    return state.selectedTeamAddress.includes(team.address);
  },
  [FILTERED_TEAMS](state: GlobalState, getters: IncludeTeamGetters) {
    return state.teams
      .filter((team) => getters.INCLUDE_TEAM_BY_LOCATION(team))
      .filter((team) => getters.INCLUDE_TEAM_BY_QUALIFICATION(team))
      .filter((team) => getters.INCLUDE_TEAM_BY_LANGUAGE(team))
      .filter((team) => getters.INCLUDE_TEAM_BY_JOB(team))
      .filter((team) => getters.INCLUDE_TEAM_BY_NAME(team))
      .filter((team) => getters.INCLUDE_TEAM_BY_PERIOD(team))
      .filter((team) => getters.INCLUDE_TEAM_BY_PATENTA(team))
      .filter((team) => getters.INCLUDE_TEAM_BY_CAR(team))
      .filter((team) => getters.INCLUDE_TEAM_BY_ADDRESS(team));
  },
};
export default getters;
