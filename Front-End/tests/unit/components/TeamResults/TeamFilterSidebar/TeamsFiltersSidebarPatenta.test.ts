import { shallowMount } from "@vue/test-utils";
import { useUniquePatenta } from "@/store/composables";
jest.mock("@/store/composables");

const useUniquePatentasMock = useUniquePatenta as jest.Mock;

import TeamFiltersSidebarPatenta from "@/components/TeamResults/TeamFiltersSidebar/TeamFiltersSidebarPatenta.vue";

describe("TeamFilterSidebarPatenta", () => {
  it("allows user to filter workers by driving license", () => {
    useUniquePatentasMock.mockReturnValue(new Set(["True", "False"]));
    const wrapper = shallowMount(TeamFiltersSidebarPatenta);
    const licenseOwningFilter = wrapper.findComponent({
      name: "TeamFiltersSidebarCheckboxGroup",
    });
    const { uniqueValues, mutation } = licenseOwningFilter.props();
    expect(uniqueValues).toEqual(new Set(["True", "False"]));
    expect(mutation).toBe("ADD_SELECTED_PATENTA");
  });
});
