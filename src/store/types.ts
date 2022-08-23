import { Job, Degree, Team } from "@/api/types";

export interface GlobalState {
  isLoggedIn: boolean;
  jobs: Job[];
  teams: Team[];
  //degrees for teams?
  degrees: Degree[];
  skillsSearchTerm: string;
  locationSearchTerm: string;
  nameSearchTerm: string;
  jobSearchTerm: string;
  selectedOrganizations: string[];
  selectedJobTypes: string[];
  selectedDegrees: string[];
  selectedLocations: string[];
  selectedQualifications: string[];
  selectedLanguages: string[];
  selectedTeamJob: string[];
  selectedTeamName: string[];
  selectedTeamDisponibility: string[];
  selectedTeamPatenta: string[];
  selectedTeamAddress: string[];
}
