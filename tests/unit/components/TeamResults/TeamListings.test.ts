import { ref } from "vue";

import { shallowMount, flushPromises, RouterLinkStub } from "@vue/test-utils";

import { useFilteredTeams, useFetchTeamsDispatch } from "@/store/composables";
jest.mock("@/store/composables");
const useFilteredTeamsMock = useFilteredTeams as jest.Mock;

import useCurrentPage from "@/composables/useCurrentPage";
jest.mock("@/composables/useCurrentPage");
const useCurrentPageMock = useCurrentPage as jest.Mock;

import usePreviousAndNextPages from "@/composables/usePreviousAndNextPages";
jest.mock("@/composables/usePreviousAndNextPages");
const usePreviousAndNextPagesMock = usePreviousAndNextPages as jest.Mock;

import TeamListings from "@/components/TeamResults/TeamListings.vue";

describe("TeamListings", () => {
  const createConfig = () => ({
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  describe("When component mounts", () => {
    it("makes call to fetch jobs from API", () => {
      useFilteredTeamsMock.mockReturnValue({ value: [] });
      useCurrentPageMock.mockReturnValue({ value: 2 });
      usePreviousAndNextPagesMock.mockReturnValue({
        previousPage: 1,
        nextPage: 3,
      });
      shallowMount(TeamListings, createConfig());
      expect(useFetchTeamsDispatch).toHaveBeenCalled();
    });
  });
  it("creates workers listing for a max of 10  of each received worker", async () => {
    useFilteredTeamsMock.mockReturnValue({ value: Array(15).fill({}) });
    useCurrentPageMock.mockReturnValue({ value: 1 });
    usePreviousAndNextPagesMock.mockReturnValue({
      previousPage: undefined,
      nextPage: 2,
    });

    const wrapper = shallowMount(TeamListings, createConfig());
    await flushPromises();
    const teamListings = wrapper.findAll("[data-test='team-listing']");
    expect(teamListings).toHaveLength(10);
  });

  it("displays page number ", () => {
    useFilteredTeamsMock.mockReturnValue({ value: [] });
    useCurrentPageMock.mockReturnValue(ref(5));
    usePreviousAndNextPagesMock.mockReturnValue({
      previousPage: 4,
      nextPage: 6,
    });

    const wrapper = shallowMount(TeamListings, createConfig());
    expect(wrapper.text()).toMatch("Page 5");
  });

  describe("when user is on first page of team results", () => {
    it("does not show link to previous page", () => {
      useFilteredTeamsMock.mockReturnValue({ value: [] });
      useCurrentPageMock.mockReturnValue(ref(1));
      usePreviousAndNextPagesMock.mockReturnValue({
        previousPage: undefined,
        nextPage: 2,
      });

      const wrapper = shallowMount(TeamListings, createConfig());
      const previousPage = wrapper.find("[data-test='previous-page-link']");
      expect(previousPage.exists()).toBe(false);
    });
    it("shows link to next page", async () => {
      useFilteredTeamsMock.mockReturnValue({ value: [] });
      useCurrentPageMock.mockReturnValue(ref(1));
      usePreviousAndNextPagesMock.mockReturnValue({
        previousPage: undefined,
        nextPage: 2,
      });
      const wrapper = shallowMount(TeamListings, createConfig());
      await flushPromises();
      const nextPage = wrapper.find("[data-test='next-page-link']");
      expect(nextPage.exists()).toBe(true);
    });
  });
  describe("When user is on last page of results", () => {
    it("does not show link to next page", async () => {
      useFilteredTeamsMock.mockReturnValue({ value: [] });
      useCurrentPageMock.mockReturnValue(ref(10));
      usePreviousAndNextPagesMock.mockReturnValue({
        previousPage: 9,
        nextPage: undefined, //this line can be commented since it has undefined value
      });
      const wrapper = shallowMount(TeamListings, createConfig());
      await flushPromises();
      const nextPage = wrapper.find("[data-test='next-page-link']");
      expect(nextPage.exists()).toBe(false);
    });
    it("shows link to previous page", async () => {
      useFilteredTeamsMock.mockReturnValue({ value: [] });
      useCurrentPageMock.mockReturnValue(ref(9));
      usePreviousAndNextPagesMock.mockReturnValue({
        previousPage: 8,
        nextPage: 10,
      });
      const wrapper = shallowMount(TeamListings, createConfig());
      await flushPromises();
      const previousPage = wrapper.find("[data-test='previous-page-link']");
      expect(previousPage.exists()).toBe(true);
    });
  });
});
