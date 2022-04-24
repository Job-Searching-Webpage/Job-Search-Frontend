import { mount } from "@vue/test-utils";

import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("displays company name", async () => {
    const wrapper = mount(MainNav); //returns a object that is a wrapper around MainNav
    await wrapper.setData({
      company: "Job Search LTD",
    });
    expect(wrapper.text()).toMatch("Job Search LTD");
  });
});
