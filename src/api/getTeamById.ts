import axios from "axios";
import { Team } from "@/api/types";

export default async function getTeamById(
  teamid: string | string[]
): Promise<Team> {
  try {
    const response = await axios.get<Team>(
      `${process.env.VUE_APP_API_URL}/teams/${teamid}` //change url later to getTeamById
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(`API ${error}`);
  }
}
