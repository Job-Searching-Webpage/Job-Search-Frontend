import { mount } from "@vue/test-utils";

import { useRoute } from "vue-router";
import { useStore } from "vuex";
jest.mock("vue-router");
jest.mock("vuex");

import SubNavigation from "@/components/Navigation/SubNavigation";

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
      useRoute.mockReturnValue({
        name: "JobResults",
      });

      useStore.mockReturnValue({
        getters: {
          FILTERED_JOBS: [{ id: 1 }, { id: 2 }],
        },
      });

      const wrapper = mount(SubNavigation, createConfig());
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.text()).toMatch("2 jobs matched");
    });
  });

  describe("when user is not on job page", () => {
    it("does NOT display job count", () => {
      useRoute.mockReturnValue({
        name: "Home",
      });
      const wrapper = mount(SubNavigation, createConfig());
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
