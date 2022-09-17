import { mount, RouterLinkStub } from "@vue/test-utils";

import { createTeam } from "../../store/utils";

import { Team } from "@/api/types";
import TeamListing from "@/components/TeamResults/TeamListing.vue";

describe("TeamListing", () => {
  const createConfig = (team: Team) => ({
    props: {
      team: {
        ...team,
      },
    },
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  it("Renders workers name", () => {
    const team = createTeam({ name: "Human" });
    const wrapper = mount(TeamListing, createConfig(team));
    expect(wrapper.text()).toMatch("Human");
  });
  it("Renders workers email", () => {
    const team = createTeam({ email: "jesus@god.com" });
    const wrapper = mount(TeamListing, createConfig(team));
    expect(wrapper.text()).toMatch("jesus@god.com");
  });
  it("Renders workers address", () => {
    const team = createTeam({ address: "Orlando" });
    const wrapper = mount(TeamListing, createConfig(team));
    expect(wrapper.text()).toMatch("Orlando");
  });
  it("Renders language skills", () => {
    const team = createTeam({
      languages: ["English", "Italian"],
    });
    const wrapper = mount(TeamListing, createConfig(team));
    expect(wrapper.text()).toMatch("English");
    expect(wrapper.text()).toMatch("Italian");
  });
  it("links to individual workers's page", () => {
    const team = createTeam({
      id: 15,
    });
    const wrapper = mount(TeamListing, createConfig(team));
    const teamPageLink = wrapper.findComponent(RouterLinkStub);
    const toProp = teamPageLink.props("to");
    expect(toProp).toBe("/teams/15");
  });
});
