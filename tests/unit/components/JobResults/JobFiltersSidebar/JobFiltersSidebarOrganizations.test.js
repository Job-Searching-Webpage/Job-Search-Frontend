import { mount } from "@vue/test-utils";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useUniqueOrganizations } from "@/store/composables";
jest.mock("vue-router");
jest.mock("vuex");
jest.mock("@/store/composables");

import JobFiltersSidebarOrganizations from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganizations.vue";

describe("JobFiltersSidebarOrganizations", () => {
  const createConfig = () => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });

  it("renders unique list of organizations for filtering jobs", async () => {
    useUniqueOrganizations.mockReturnValue(new Set(["Google", "Amazon"]));
    const wrapper = mount(JobFiltersSidebarOrganizations, createConfig());
    const clickableArea = wrapper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click");
    const organizationLabels = wrapper.findAll("[data-test='organization']");
    const organizations = organizationLabels.map((node) => node.text());
    expect(organizations).toEqual(["Google", "Amazon"]);
  });
  describe("When user clicks a checkbox", () => {
    it("communicates that user has selected a checkbox for organization", async () => {
      const commit = jest.fn();
      useStore.mockReturnValue({
        commit,
      });
      useRouter.mockReturnValue({
        push: jest.fn(),
      });
      const wrapper = mount(JobFiltersSidebarOrganizations, createConfig());
      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");
      const googleInput = wrapper.find("[data-test='Google']");
      await googleInput.setChecked();

      expect(commit).toHaveBeenCalledWith("ADD_SELECTED_ORGANIZATIONS", [
        "Google",
      ]);
    });
    it("navigates user to job results page to see fresh batch of jobs", async () => {
      useUniqueOrganizations.mockReturnValue(new Set(["Google", "Amazon"]));
      useStore.mockReturnValue({
        commit: jest.fn(),
      });
      const push = jest.fn();
      useRouter.mockReturnValue({
        push,
      });
      const wrapper = mount(JobFiltersSidebarOrganizations, createConfig());
      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");
      const googleInput = wrapper.find("[data-test='Google']");
      await googleInput.setChecked();

      expect(push).toHaveBeenCalledWith({ name: "JobResults" });
    });
  });
});
