import { shallowMount } from "@vue/test-utils";
import { useUniqueLocations } from "@/store/composables";
jest.mock("@/store/composables");

const useUniqueLocationsMock = useUniqueLocations as jest.Mock;

import TeamFiltersSidebarLocations from "@/components/TeamResults/TeamFiltersSidebar/TeamFiltersSidebarLocations.vue";

describe("TeamFilterSidebarLocations", () => {
  it("allows user to filter workers by car disponibility", () => {
    useUniqueLocationsMock.mockReturnValue(new Set(["Earth", "Planet"]));
    const wrapper = shallowMount(TeamFiltersSidebarLocations);
    const carOwningFilter = wrapper.findComponent({
      name: "TeamFiltersSidebarCheckboxGroup",
    });
    const { uniqueValues, mutation } = carOwningFilter.props();
    expect(uniqueValues).toEqual(new Set(["Earth", "Planet"]));
    expect(mutation).toBe("ADD_SELECTED_LOCATIONS");
  });
});
