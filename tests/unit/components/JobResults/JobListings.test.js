import { shallowMount, flushPromises, RouterLinkStub } from "@vue/test-utils";

import JobListings from "@/components/JobResults/JobListings.vue";

describe("JobListings", () => {
  const createRoute = (queryParams = {}) => ({
    query: {
      page: "5",
      ...queryParams,
    },
  });

  const createStore = (config = {}) => ({
    state: {
      jobs: Array(15).fill({}),
    },
    dispatch: jest.fn(),
    ...config,
  });

  const createConfig = ($route, $store) => ({
    global: {
      mocks: {
        $route,
        $store,
      },
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  it("creates jobs listing for a max of 10  of each received job", async () => {
    const queryParams = { page: "1" };
    const $route = createRoute(queryParams);
    const $store = createStore();

    const wrapper = shallowMount(JobListings, createConfig($route, $store));
    await flushPromises();
    const jobListings = wrapper.findAll("[data-test='job-listing']");
    expect(jobListings).toHaveLength(10);
  });

  describe("when params esclude page number", () => {
    it("displays page number 1", () => {
      const queryParams = {
        page: undefined,
      };
      const $route = createRoute(queryParams);
      const $store = createStore({
        state: {
          jobs: Array(15).fill({}),
        },
      });
      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      expect(wrapper.text()).toMatch("Page 1");
    });
  });

  describe("when query params include page number", () => {
    it("displays page number", () => {
      const queryParams = {
        page: "3",
      };
      const $route = createRoute(queryParams);
      const $store = createStore();
      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      expect(wrapper.text()).toMatch("Page 3");
    });
  });
  describe("when user is on first page of job results", () => {
    it("does not show link to previous page", () => {
      const queryParams = {
        page: "1",
      };
      const $route = createRoute(queryParams);
      const $store = createStore();
      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      const previousPage = wrapper.find("[data-test='previous-page-link']");
      expect(previousPage.exists()).toBe(false);
    });
    it("shows link to next page", async () => {
      const queryParams = {
        page: "1",
      };
      const $route = createRoute(queryParams);
      const $store = createStore({
        state: {
          jobs: Array(15).fill({}),
        },
      });
      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      await flushPromises();
      const nextPage = wrapper.find("[data-test='next-page-link']");
      expect(nextPage.exists()).toBe(true);
    });
  });
  describe("When user is on last page of results", () => {
    it("does not show link to next page", async () => {
      const queryParams = {
        page: "2",
      };
      const $route = createRoute(queryParams);
      const $store = createStore({
        state: {
          jobs: Array(15).fill({}),
        },
      });
      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      await flushPromises();
      const nextPage = wrapper.find("[data-test='next-page-link']");
      expect(nextPage.exists()).toBe(false);
    });
    it("shows link to previous page", async () => {
      const queryParams = {
        page: "2",
      };
      const $route = createRoute(queryParams);
      const $store = createStore({
        state: {
          jobs: Array(15).fill({}),
        },
      });
      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      await flushPromises();
      const previousPage = wrapper.find("[data-test='previous-page-link']");
      expect(previousPage.exists()).toBe(true);
    });
  });
});
