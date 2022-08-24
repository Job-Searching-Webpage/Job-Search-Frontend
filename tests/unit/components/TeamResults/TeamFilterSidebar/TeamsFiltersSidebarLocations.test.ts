import { shallowMount } from "@vue/test-utils";
import { useUniqueLocations } from "@/store/composables";
jest.mock("@/store/composables");

const useUniqueLocationsMock = useUniqueLocations as jest.Mock;

import TeamFiltersSidebarLocations from "@/components/TeamResults/TeamFiltersSidebar/TeamFiltersSidebarLocations.vue";

describe("TeamFilterSidebarLocations", () => {
  it("allows user to filter workers by location", () => {
    useUniqueLocationsMock.mockReturnValue(new Set(["Earth", "Planet"]));
    const wrapper = shallowMount(TeamFiltersSidebarLocations);
    const locationFilter = wrapper.findComponent({
      name: "TeamFiltersSidebarCheckboxGroup",
    });
    const { uniqueValues, mutation } = locationFilter.props();
    expect(uniqueValues).toEqual(new Set(["Earth", "Planet"]));
    expect(mutation).toBe("ADD_SELECTED_LOCATIONS");
  });
});
