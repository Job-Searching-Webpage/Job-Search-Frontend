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
  it("displayes menu items for navigation", () => {
    const wrapper = mount(MainNav);
    //wrapper.find finds the first element "li"
    //findAll fidn al the elements "li"
    const navigationMenuItem = wrapper.findAll(
      "[data-test='main-nav-list-item']"
    );
    const navigationMenuText = navigationMenuItem.map((item) => item.text());
    expect(navigationMenuText).toEqual([
      "Teams",
      "Locations",
      "Life at Job Search LTD",
      "How we hire",
      "Students",
      "Jobs",
    ]);
    console.log(navigationMenuText);
  });
});
