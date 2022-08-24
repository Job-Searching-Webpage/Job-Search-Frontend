import { shallowMount } from "@vue/test-utils";
import { useUniqueQualifications } from "@/store/composables";
jest.mock("@/store/composables");

const useUniqueQualificationsMock = useUniqueQualifications as jest.Mock;

import TeamFiltersSidebarQualifications from "@/components/TeamResults/TeamFiltersSidebar/TeamFiltersSidebarQualifications.vue";

describe("TeamFiltersSidebarQualifications", () => {
  it("allows user to filter workers qualifications", () => {
    useUniqueQualificationsMock.mockReturnValue(
      new Set(["Master", "Bachelor"])
    );
    const wrapper = shallowMount(TeamFiltersSidebarQualifications);
    const qualificationFilter = wrapper.findComponent({
      name: "TeamFiltersSidebarCheckboxGroup",
    });
    const { uniqueValues, mutation } = qualificationFilter.props();
    expect(uniqueValues).toEqual(new Set(["Master", "Bachelor"]));
    expect(mutation).toBe("ADD_SELECTED_QUALIFICATIONS");
  });
});
