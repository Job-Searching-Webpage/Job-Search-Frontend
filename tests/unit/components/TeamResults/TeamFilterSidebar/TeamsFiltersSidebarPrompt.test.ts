import { mount } from "@vue/test-utils";

import { useStore } from "vuex";
jest.mock("vuex");
const useStoreMock = useStore as jest.Mock;

import TeamFiltersSidebarPrompt from "@/components/TeamResults/TeamFiltersSidebar/TeamFiltersSidebarPrompt.vue";

describe("TeamFiltersSidebarPrompt.vue", () => {
  describe("when user clicks clear filters button", () => {
    it("sends message to clear all user's team search filters", async () => {
      const commit = jest.fn();
      useStoreMock.mockReturnValue({ commit });
      const wrapper = mount(TeamFiltersSidebarPrompt);
      const button = wrapper.find("[data-test='clear-user-team-filters']");
      await button.trigger("click");
      expect(commit).toHaveBeenCalledWith("CLEAR_USER_TEAM_FILTER_SELECTIONS");
    });
  });
});
