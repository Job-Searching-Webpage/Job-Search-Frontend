import { Job, Degree, Team } from "@/api/types";

export interface GlobalState {
  isLoggedIn: boolean;
  showModal: boolean;
  jobs: Job[];
  teams: Team[];
  degrees: Degree[];
  skillsSearchTerm: string;
  locationSearchTerm: string;
  selectedOrganizations: string[];
  selectedJobTypes: string[];
  selectedDegrees: string[];

  nameSearchTerm: string;
  jobSearchTerm: string;
  periodSearchTerm: string;
  selectedQualifications: string[];
  selectedLanguages: string[];
  selectedTeamPatenta: string[];
  selectedTeamCar: string[];
  selectedTeamAddress: string[];
}
