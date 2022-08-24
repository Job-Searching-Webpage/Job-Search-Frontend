import { shallowMount } from "@vue/test-utils";
import { useStore } from "vuex";
jest.mock("vuex");
const useStoreMock = useStore as jest.Mock;

import { useRouter } from "vue-router";
jest.mock("vue-router");
const useRouterMock = useRouter as jest.Mock;

import TeamFiltersSidebarCheckboxGroup from "@/components/TeamResults/TeamFiltersSidebar/TeamFiltersSidebarCheckboxGroup.vue";
describe("JobFiltersSidebarJobTypes", () => {
  const createConfig = (props = {}) => ({
    props: {
      uniqueValues: new Set(["valueA", "valueB"]),
      mutation: "Some mutation",
      ...props,
    },
  });

  it("renders unique list of Worker for filtering", async () => {
    useStoreMock.mockReturnValue({ commit: jest.fn(), subscribe: jest.fn() });
    const props = {
      uniqueValues: new Set(["valueA", "valueB"]),
    };
    const wrapper = shallowMount(
      TeamFiltersSidebarCheckboxGroup,
      createConfig(props)
    );
    const inputLabels = wrapper.findAll("[data-test='value']");
    const inputValues = inputLabels.map((node) => node.text());
    expect(inputValues).toEqual(["valueA", "valueB"]);
  });

  describe("When user clicks a checkbox", () => {
    it("communicates that user has selected a checkbox for worker", async () => {
      const commit = jest.fn();
      useStoreMock.mockReturnValue({ commit, subscribe: jest.fn() });
      useRouterMock.mockReturnValue({ push: jest.fn() });
      const props = {
        mutation: "SOME_MUTATION",
        uniqueValues: new Set(["Full-time"]),
      };

      const wrapper = shallowMount(
        TeamFiltersSidebarCheckboxGroup,
        createConfig(props)
      );
      const fullTimeInput = wrapper.find("[data-test='Full-time']");
      await fullTimeInput.setValue(true);

      expect(commit).toHaveBeenCalledWith("SOME_MUTATION", ["Full-time"]);
    });
    it("navigates user to teams page to see fresh batch of teams", async () => {
      useStoreMock.mockReturnValue({ commit: jest.fn(), subscribe: jest.fn() });
      const push = jest.fn();
      useRouterMock.mockReturnValue({ push });
      const props = {
        uniqueValues: new Set(["Full-time"]),
      };
      const wrapper = shallowMount(
        TeamFiltersSidebarCheckboxGroup,
        createConfig(props)
      );
      const fullTimeInput = wrapper.find("[data-test='Full-time']");
      await fullTimeInput.setValue(true);

      expect(push).toHaveBeenCalledWith({ name: "Teams" });
    });
  });
});
