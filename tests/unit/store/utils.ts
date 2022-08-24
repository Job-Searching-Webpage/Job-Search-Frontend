import { Job, Degree, Team } from "@/api/types";
import { GlobalState } from "@/store/types";
import state from "@/store/state";

export const createState = (config: Partial<GlobalState> = {}): GlobalState => {
  const initialState = state();
  return { ...initialState, ...config };
};

export const createDegree = (config: Partial<Degree> = {}): Degree => ({
  id: 1,
  degree: "Bachelor's",
  ...config,
});

export const createJob = (config: Partial<Job> = {}): Job => ({
  id: 1,
  title: "Angular Developer",
  organization: "Vue and Me",
  degree: "Master's",
  jobType: "Intern",
  location: "Lisbon",
  minimumQualifications: [],
  preferredQualifications: [],
  description: [],
  dateAdded: "2021-07-04",
  ...config,
});

export const createTeam = (config: Partial<Team> = {}): Team => ({
  CF: "CF",
  id: 1,
  name: "Human",
  cognome: "Sappiens",
  dataNascita: "0000-00-00",
  birthplace: "Earth",
  nazionalita: "World",
  address: "Everywhere",
  jobType: "Living",
  period: "Always",
  phone: "3333333333",
  email: "planet@earth.com",
  languages: [],
  patenta: "True",
  car: "True",
  qualification: "All Knowing",
  esperienze: [],
  backUpPerson: {
    name: "God",
    cognome: "Father",
    email: "jesus@god.com",
    phone: "333333333",
  },
  ...config,
});
