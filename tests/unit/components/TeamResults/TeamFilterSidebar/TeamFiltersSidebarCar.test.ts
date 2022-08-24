import { shallowMount } from "@vue/test-utils";
import { useUniqueCar } from "@/store/composables";
jest.mock("@/store/composables");

const useUniqueCarsMock = useUniqueCar as jest.Mock;

import TeamFiltersSidebarCar from "@/components/TeamResults/TeamFiltersSidebar/TeamFiltersSidebarCar.vue";

describe("TeamFilterSidebarCar", () => {
  it("allows user to filter workers by car disponibility", () => {
    useUniqueCarsMock.mockReturnValue(new Set(["Full-time", "Part-time"]));
    const wrapper = shallowMount(TeamFiltersSidebarCar);
    const carOwningFilter = wrapper.findComponent({
      name: "TeamFiltersSidebarCheckboxGroup",
    });
    const { uniqueValues, mutation } = carOwningFilter.props();
    expect(uniqueValues).toEqual(new Set(["Full-time", "Part-time"]));
    expect(mutation).toBe("ADD_SELECTED_CAR");
  });
});
