import axios from "axios";
import { Team } from "@/api/types";

export default async function getTeamId(
  teamCF: string | string[]
): Promise<Team> {
  const baseUrl = process.env.VUE_APP_API_URL;

  try {
    const response = await axios.get<Team>(
      `${baseUrl}/getTeamID_By_CF/${teamCF}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(`API ${error}`);
  }
}
