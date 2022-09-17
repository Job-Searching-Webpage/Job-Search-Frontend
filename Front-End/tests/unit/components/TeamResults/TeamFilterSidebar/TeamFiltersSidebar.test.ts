import { shallowMount } from "@vue/test-utils";

import { useStore } from "vuex";
jest.mock("vuex");
const useStoreMock = useStore as jest.Mock;

import { useRoute } from "vue-router";
jest.mock("vue-router");
const useRouteMock = useRoute as jest.Mock;

import TeamFiltersSidebar from "@/components/TeamResults/TeamFiltersSidebar/TeamFiltersSidebar.vue";

describe("TeamFiltersSidebar", () => {
  it("sets up panel for user to filter workers by one or more criteria", () => {
    useStoreMock.mockReturnValue({ commit: jest.fn() });
    useRouteMock.mockReturnValue({
      query: {},
    });
    const wrapper = shallowMount(TeamFiltersSidebar);
    expect(wrapper.exists()).toBe(true);
  });
});
