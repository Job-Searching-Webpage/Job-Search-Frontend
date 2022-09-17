import { shallowMount } from "@vue/test-utils";
import { useStore } from "vuex";
jest.mock("vuex");
const useStoreMock = useStore as jest.Mock;

import TeamFiltersSidebarJob from "@/components/TeamResults/TeamFiltersSidebar/TeamFiltersSidebarJob.vue";

describe("TeamFiltersSidebarJob", () => {
  it("populates search input from store", () => {
    useStoreMock.mockReturnValue({
      state: {
        jobSearchTerm: "Programmer",
      },
      commit: jest.fn(),
    });
    const wrapper = shallowMount(TeamFiltersSidebarJob);
    const skillsSearchInput = wrapper.find("[data-test= 'job-search-input']");
    const inputElement = skillsSearchInput.element as HTMLInputElement;
    expect(inputElement.value).toBe("Programmer");
  });

  it("tells store that the user has enetered job search term", async () => {
    const commit = jest.fn();
    useStoreMock.mockReturnValue({
      state: {
        jobSearchTerm: "",
      },
      commit,
    });
    const wrapper = shallowMount(TeamFiltersSidebarJob);
    const skillsSearchInput = wrapper.find("[data-test= 'job-search-input']");
    await skillsSearchInput.setValue("Vue Developer");
    expect(commit).toHaveBeenCalledWith(
      "UPDATE_JOB_SEARCH_TERM",
      "Vue Developer"
    );
  });

  it("removes whitespace from user input", async () => {
    const commit = jest.fn();
    useStoreMock.mockReturnValue({
      state: {
        jobSearchTerm: "",
      },
      commit,
    });
    const wrapper = shallowMount(TeamFiltersSidebarJob);
    const skillsSearchInput = wrapper.find("[data-test= 'job-search-input']");
    await skillsSearchInput.setValue("         Vue Developer  ");
    expect(commit).toHaveBeenCalledWith(
      "UPDATE_JOB_SEARCH_TERM",
      "Vue Developer"
    );
  });
});
