import { shallowMount } from "@vue/test-utils";
import { useUniqueTeamLanguages } from "@/store/composables";
jest.mock("@/store/composables");

const useUniqueTeamLanguagesMock = useUniqueTeamLanguages as jest.Mock;

import TeamFiltersSidebarLanguages from "@/components/TeamResults/TeamFiltersSidebar/TeamFiltersSidebarLanguages.vue";

describe("TeamFilterSidebarLanguages", () => {
  it("allows user to filter workers by languages", () => {
    useUniqueTeamLanguagesMock.mockReturnValue(new Set(["English", "Italian"]));
    const wrapper = shallowMount(TeamFiltersSidebarLanguages);
    const languageFilter = wrapper.findComponent({
      name: "TeamFiltersSidebarCheckboxGroup",
    });
    const { uniqueValues, mutation } = languageFilter.props();
    expect(uniqueValues).toEqual(new Set(["English", "Italian"]));
    expect(mutation).toBe("ADD_SELECTED_TEAM_LANGUAGES");
  });
});
