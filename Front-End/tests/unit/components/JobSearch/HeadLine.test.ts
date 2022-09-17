import { mount } from "@vue/test-utils";
import { nextTick } from "vue";
import HeadLine from "@/components/JobSearch/HeadLine.vue";

describe("HeadLine", () => {
  //runs before every it test function
  beforeEach(() => {
    jest.useFakeTimers("legacy");
  });
  afterEach(() => {
    jest.useRealTimers();
  });
  it("displays introductory action verb", () => {
    const wrapper = mount(HeadLine);
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Build for everyone");
  });
  it("changes action verb at a consisten interval", () => {
    mount(HeadLine);
    expect(setInterval).toHaveBeenCalled();
  });
  it("swaps action verb after first interval", async () => {
    const wrapper = mount(HeadLine);
    jest.runOnlyPendingTimers();
    await nextTick();
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Design for everyone");
  });
  it("removes interval when component dissapears", () => {
    const wrapper = mount(HeadLine);
    wrapper.unmount();
    expect(clearInterval).toHaveBeenCalled();
  });
});
