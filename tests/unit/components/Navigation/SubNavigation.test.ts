import { mount } from "@vue/test-utils";
import useConfirmRoute from "@/composables/useConfirmRoute";
jest.mock("@/composables/useConfirmRoute");
import { useFilteredJobs } from "@/store/composables";
jest.mock("@/store/composables");

import SubNavigation from "@/components/Navigation/SubNavigation.vue";

const useConfirmRouteMock = useConfirmRoute as jest.Mock;
const useFilteredJobsMock = useFilteredJobs as jest.Mock;
describe("SubNavigation bar", () => {
  const createConfig = () => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });

  describe("when user is on job page", () => {
    it("displays job count", () => {
      useConfirmRouteMock.mockReturnValue(true);

      useFilteredJobsMock.mockReturnValue([{ id: 1 }, { id: 2 }]);

      const wrapper = mount(SubNavigation, createConfig());
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.text()).toMatch("2 jobs matched");
    });
  });

  describe("when user is not on job page", () => {
    it("does NOT display job count", () => {
      useConfirmRouteMock.mockReturnValue(false);
      useFilteredJobsMock.mockReturnValue([]);
      const wrapper = mount(SubNavigation, createConfig());
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
