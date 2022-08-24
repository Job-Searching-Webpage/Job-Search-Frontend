import { Job, Degree, Team } from "@/api/types";

export interface GlobalState {
  isLoggedIn: boolean;
  jobs: Job[];
  teams: Team[];
  //degrees for teams?
  degrees: Degree[];
  skillsSearchTerm: string;
  locationSearchTerm: string;
  selectedOrganizations: string[];
  selectedJobTypes: string[];
  selectedDegrees: string[];

  nameSearchTerm: string;
  jobSearchTerm: string;
  selectedQualifications: string[];
  selectedLanguages: string[];
  selectedTeamDisponibility: string[];
  selectedTeamPatenta: string[];
  selectedTeamAddress: string[];
}
