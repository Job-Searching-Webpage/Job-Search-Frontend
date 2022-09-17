import { Commit } from "vuex";
import getJobs from "@/api/getJobs";
import getDegrees from "@/api/getDegrees";
import getTeams from "@/api/getTeams";
import {
  FETCH_JOBS,
  RECEIVE_JOBS,
  FETCH_DEGREES,
  RECEIVE_DEGREES,
  FETCH_TEAMS,
  RECEIVE_TEAMS,
} from "@/store/constants";

interface Context {
  commit: Commit;
}
const actions = {
  [FETCH_JOBS]: async (context: Context) => {
    const jobListings = await getJobs();
    context.commit(RECEIVE_JOBS, jobListings);
  },
  [FETCH_DEGREES]: async (context: Context) => {
    const degrees = await getDegrees();
    context.commit(RECEIVE_DEGREES, degrees);
  },
  [FETCH_TEAMS]: async (context: Context) => {
    const teams = await getTeams();
    context.commit(RECEIVE_TEAMS, teams);
  },
};

export default actions;
