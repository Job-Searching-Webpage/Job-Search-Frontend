import { Job, Degree, Team } from "@/api/types";

export interface GlobalState {
  isLoggedIn: boolean;
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
  selectedTeamAddress: string[];
}
