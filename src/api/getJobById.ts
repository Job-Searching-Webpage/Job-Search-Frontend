import axios from "axios";
import { Job } from "@/api/types";

export default async function getJobById(
  jobid: string | string[]
): Promise<Job> {
  const baseUrl = process.env.VUE_APP_API_URL;
  try {
    const response = await axios.get<Job>(
      `${baseUrl}/getJob_by_Id/${jobid}/` //change url later to getJobById
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(`API ${error}`);
  }
}
