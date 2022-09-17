import { computed } from "vue";
import { useStore } from "vuex";

import {
  FILTERED_JOBS,
  FILTERED_TEAMS,
  UNIQUE_JOB_TYPES,
  UNIQUE_DEGREES,
  UNIQUE_QUALIFICATIONS,
  UNIQUE_ORGANIZATIONS,
  UNIQUE_LOCATIONS,
  UNIQUE_LANGUAGES,
  UNIQUE_PERIODS,
  UNIQUE_PATENTA,
  UNIQUE_CAR,
  FETCH_JOBS,
  FETCH_DEGREES,
  FETCH_TEAMS,
} from "@/store/constants";

import { Job, Team } from "@/api/types";

import { key } from "@/store";

/* GETTERS */
export const useFilteredJobs = () => {
  const store = useStore(key);
  return computed<Job[]>(() => store.getters[FILTERED_JOBS]);
};
export const useFilteredTeams = () => {
  const store = useStore(key);
  return computed<Team[]>(() => store.getters[FILTERED_TEAMS]);
};

export const useUniqueJobTypes = () => {
  const store = useStore(key);
  return computed<Set<string>>(() => store.getters[UNIQUE_JOB_TYPES]);
};

export const useUniqueOrganizations = () => {
  const store = useStore(key);
  return computed<Set<string>>(() => store.getters[UNIQUE_ORGANIZATIONS]);
};

export const useUniqueDegrees = () => {
  const store = useStore(key);
  return computed<Set<string>>(() => store.getters[UNIQUE_DEGREES]);
};

export const useUniqueLocations = () => {
  const store = useStore(key);
  return computed<Set<string>>(() => store.getters[UNIQUE_LOCATIONS]);
};
export const useUniqueQualifications = () => {
  const store = useStore(key);
  return computed<Set<string>>(() => store.getters[UNIQUE_QUALIFICATIONS]);
};
export const useUniqueTeamLanguages = () => {
  const store = useStore(key);
  return computed<Set<string>>(() => store.getters[UNIQUE_LANGUAGES]);
};

export const useUniquePeriods = () => {
  const store = useStore(key);
  return computed<Set<string>>(() => store.getters[UNIQUE_PERIODS]);
};

export const useUniquePatenta = () => {
  const store = useStore(key);
  return computed<Set<string>>(() => store.getters[UNIQUE_PATENTA]);
};
export const useUniqueCar = () => {
  const store = useStore(key);
  return computed<Set<string>>(() => store.getters[UNIQUE_CAR]);
};

/* ACTIONS */
export const useFetchJobsDispatch = () => {
  const store = useStore(key);
  return store.dispatch(FETCH_JOBS);
};

export const useFetchDegreesDispatch = () => {
  const store = useStore(key);
  return store.dispatch(FETCH_DEGREES);
};
export const useFetchTeamsDispatch = () => {
  const store = useStore(key);
  return store.dispatch(FETCH_TEAMS);
};
