import axios from "axios";
import { Job } from "@/api/types";

export default async function getJobById(
  jobid: string | string[]
): Promise<Job> {
  try {
    const response = await axios.get<Job>(
      `${process.env.VUE_APP_API_URL}/jobs/${jobid}` //change url later to getJobById
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(`API ${error}`);
  }
}
