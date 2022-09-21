import axios from "axios";
import { experience } from "@/api/types";

export default async function getExperienceById(
  expId: string | string[]
): Promise<experience[]> {
  const baseUrl = process.env.VUE_APP_API_URL;

  try {
    const response = await axios.get<experience[]>(
      `${baseUrl}/getExperienceById/${expId}/`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(`API ${error}`);
  }
}
