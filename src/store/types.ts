import { Job, Degree } from "@/api/types";

export interface GlobalState {
  isLoggedIn: boolean;
  jobs: Job[];
  degrees: Degree[];
  skillsSearchTerm: string;
  locationSearchTerm: string;
  selectedOrganizations: string[];
  selectedJobTypes: string[];
  selectedDegrees: string[];
}
