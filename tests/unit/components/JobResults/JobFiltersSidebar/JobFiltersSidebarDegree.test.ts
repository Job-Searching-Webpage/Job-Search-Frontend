import { shallowMount } from "@vue/test-utils";
import { useUniqueDegrees } from "@/store/composables";
jest.mock("@/store/composables");
jest.mock("@/store/composables");

const useUniqueDegreesMock = useUniqueDegrees as jest.Mock;

import JobFiltersSidebarDegrees from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarDegrees.vue";
describe("JobFilterSidebarDegrees", () => {
  it("allows user to filter by degrees", () => {
    useUniqueDegreesMock.mockReturnValue(["Associate", "Bachelor's"]);
    const wrapper = shallowMount(JobFiltersSidebarDegrees);
    const degreesFilter = wrapper.findComponent({
      name: "JobFiltersSidebarCheckboxGroup",
    });
    const { uniqueValues, mutation } = degreesFilter.props();
    expect(uniqueValues).toEqual(["Associate", "Bachelor's"]);
    expect(mutation).toBe("ADD_SELECTED_DEGREES");
  });
});
