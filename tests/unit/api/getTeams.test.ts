import axios from "axios";
jest.mock("axios");

import getTeams from "@/api/getTeams";

const axiosGetMock = axios.get as jest.Mock;

describe("getTeams", () => {
  beforeEach(() => {
    axiosGetMock.mockResolvedValue({
      data: [
        {
          id: 1,
          name: "Human",
        },
      ],
    });
  });

  it("fetches worker from database", async () => {
    await getTeams();
    expect(axios.get).toHaveBeenCalledWith("http://myfakeapi.com/teams");
  });
});

it("extracts jobs from response", async () => {
  const data = await getTeams();
  expect(data).toEqual([
    {
      id: 1,
      name: "Human",
    },
  ]);
});
