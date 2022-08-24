import { shallowMount } from "@vue/test-utils";
import { useStore } from "vuex";
jest.mock("vuex");
const useStoreMock = useStore as jest.Mock;

import TeamFiltersSidebarName from "@/components/TeamResults/TeamFiltersSidebar/TeamFiltersSidebarName.vue";

describe("TeamFiltersSidebarName", () => {
  it("populates search input from store", () => {
    useStoreMock.mockReturnValue({
      state: {
        nameSearchTerm: "Human",
      },
      commit: jest.fn(),
    });
    const wrapper = shallowMount(TeamFiltersSidebarName);
    const nameSearchInput = wrapper.find("[data-test= 'name-search-input']");
    const inputElement = nameSearchInput.element as HTMLInputElement;
    expect(inputElement.value).toBe("Human");
  });

  it("tells store that the user has enetered name search term", async () => {
    const commit = jest.fn();
    useStoreMock.mockReturnValue({
      state: {
        nameSearchTerm: "",
      },
      commit,
    });
    const wrapper = shallowMount(TeamFiltersSidebarName);
    const nameSearchInput = wrapper.find("[data-test= 'name-search-input']");
    await nameSearchInput.setValue("HomoSapiens");
    expect(commit).toHaveBeenCalledWith(
      "UPDATE_NAME_SEARCH_TERM",
      "HomoSapiens"
    );
  });

  it("removes whitespace from user input", async () => {
    const commit = jest.fn();
    useStoreMock.mockReturnValue({
      state: {
        nameSearchTerm: "",
      },
      commit,
    });
    const wrapper = shallowMount(TeamFiltersSidebarName);
    const nameSearchInput = wrapper.find("[data-test= 'name-search-input']");
    await nameSearchInput.setValue("         Person  ");
    expect(commit).toHaveBeenCalledWith("UPDATE_NAME_SEARCH_TERM", "Person");
  });
});
