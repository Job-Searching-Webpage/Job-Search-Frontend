import { shallowMount } from "@vue/test-utils";
import { useStore } from "vuex";
jest.mock("vuex");
const useStoreMock = useStore as jest.Mock;

import TeamFiltersSidebarPeriod from "@/components/TeamResults/TeamFiltersSidebar/TeamFiltersSidebarPeriod.vue";

describe("TeamFiltersSidebarPeriod", () => {
  it("populates search input from store", () => {
    useStoreMock.mockReturnValue({
      state: {
        periodSearchTerm: "1 year",
      },
      commit: jest.fn(),
    });
    const wrapper = shallowMount(TeamFiltersSidebarPeriod);
    const periodSearchInput = wrapper.find(
      "[data-test = 'period-search-input']"
    );
    const inputElement = periodSearchInput.element as HTMLInputElement;
    expect(inputElement.value).toBe("1 year");
  });

  it("tells store that the user has enetered period search term", async () => {
    const commit = jest.fn();
    useStoreMock.mockReturnValue({
      state: {
        periodSearchTerm: "",
      },
      commit,
    });
    const wrapper = shallowMount(TeamFiltersSidebarPeriod);
    const periodSearchInput = wrapper.find(
      "[data-test= 'period-search-input']"
    );
    await periodSearchInput.setValue("1 year");
    expect(commit).toHaveBeenCalledWith("UPDATE_PERIOD_SEARCH_TERM", "1 year");
  });

  it("removes whitespace from user input", async () => {
    const commit = jest.fn();
    useStoreMock.mockReturnValue({
      state: {
        periodSearchTerm: "",
      },
      commit,
    });
    const wrapper = shallowMount(TeamFiltersSidebarPeriod);
    const periodSearchInput = wrapper.find(
      "[data-test= 'period-search-input']"
    );
    await periodSearchInput.setValue("         2 years  ");
    expect(commit).toHaveBeenCalledWith("UPDATE_PERIOD_SEARCH_TERM", "2 years");
  });
});
