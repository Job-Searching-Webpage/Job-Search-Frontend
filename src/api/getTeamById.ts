import axios from "axios";
import { Team } from "@/api/types";

export default async function getTeamById(
  teamid: string | string[]
): Promise<Team> {
  const baseUrl = process.env.VUE_APP_API_URL;

  try {
    const response = await axios.get<Team>(
      `${baseUrl}/getTeam_by_Id/${teamid}` //change url later to getTeamById
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(`API ${error}`);
  }
}
