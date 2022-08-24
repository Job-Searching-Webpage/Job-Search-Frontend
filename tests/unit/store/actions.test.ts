import actions from "@/store/actions";

import getJobs from "@/api/getJobs";
jest.mock("@/api/getJobs");

const getJobMock = getJobs as jest.Mock;

import getDegrees from "@/api/getDegrees";
jest.mock("@/api/getDegrees");
const getDegreeMock = getDegrees as jest.Mock;

import getTeams from "@/api/getTeams";
jest.mock("@/api/getTeams");
const getTeamMock = getTeams as jest.Mock;

describe("actions", () => {
  describe("FETCH_JOBS", () => {
    beforeEach(() => {
      getJobMock.mockResolvedValue([
        {
          id: 1,
          title: "Software Developer",
        },
      ]);
    });

    it("makes request to fetch jobs", async () => {
      const context = { commit: jest.fn() };
      await actions.FETCH_JOBS(context);
      expect(getJobs).toHaveBeenCalled();
    });

    it("send message to save received jobs in store", async () => {
      const commit = jest.fn();
      const context = { commit };
      await actions.FETCH_JOBS({ commit: context.commit });
      expect(commit).toHaveBeenCalledWith("RECEIVE_JOBS", [
        {
          id: 1,
          title: "Software Developer",
        },
      ]);
    });
  });

  describe("FETCH_DEGREES", () => {
    beforeEach(() => {
      getDegreeMock.mockResolvedValue([
        {
          id: 1,
          degree: "Bachelor'",
        },
      ]);
    });

    it("makes request to fetch degree", async () => {
      const context = { commit: jest.fn() };
      await actions.FETCH_DEGREES({ commit: context.commit });
      expect(getDegrees).toHaveBeenCalled();
    });

    it("send message to save received degree in store", async () => {
      const commit = jest.fn();
      const context = { commit };
      await actions.FETCH_DEGREES(context);
      expect(commit).toHaveBeenCalledWith("RECEIVE_DEGREES", [
        {
          id: 1,
          degree: "Bachelor'",
        },
      ]);
    });
  });

  describe("FETCH_TEAMS", () => {
    beforeEach(() => {
      getTeamMock.mockResolvedValue([
        {
          id: 1,
          name: "HomoSapiens",
        },
      ]);
    }),
      it("makes request to fetch teams", async () => {
        const context = { commit: jest.fn() };
        await actions.FETCH_TEAMS({ commit: context.commit });
        expect(getTeams).toHaveBeenCalled();
      }),
      it("send message to save received teams in store", async () => {
        const commit = jest.fn();
        const context = { commit };
        await actions.FETCH_TEAMS(context);
        expect(commit).toHaveBeenCalledWith("RECEIVE_TEAMS", [
          {
            id: 1,
            name: "HomoSapiens",
          },
        ]);
      });
  });
});
