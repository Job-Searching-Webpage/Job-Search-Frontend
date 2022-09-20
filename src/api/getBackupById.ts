import axios from "axios";
import { BackUpPerson } from "@/api/types";

export default async function getBackupById(
  backupId: string | string[]
): Promise<BackUpPerson> {
  const baseUrl = process.env.VUE_APP_API_URL;

  try {
    const response = await axios.get<BackUpPerson>(
      `${baseUrl}/getBackupById/${backupId}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(`API ${error}`);
  }
}
