import { mount, RouterLinkStub } from "@vue/test-utils";

import { createJob } from "../../store/utils";

import { Job } from "@/api/types";
import JobListing from "@/components/JobResults/JobListing.vue";

describe("JobListing", () => {
  const createConfig = (job: Job) => ({
    props: {
      job: {
        ...job,
      },
    },
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  it("Renders Job titlte", () => {
    const job = createJob({ title: "Vue programmer" });
    const wrapper = mount(JobListing, createConfig(job));
    expect(wrapper.text()).toMatch("Vue programmer");
  });
  it("Renders Job organisation", () => {
    const job = createJob({ organization: "AirBnB" });
    const wrapper = mount(JobListing, createConfig(job));
    expect(wrapper.text()).toMatch("AirBnB");
  });
  it("Renders Job location", () => {
    const job = createJob({ locations: ["Orlando", "Jacksonville"] });
    const wrapper = mount(JobListing, createConfig(job));
    expect(wrapper.text()).toMatch("Orlando");
    expect(wrapper.text()).toMatch("Jacksonville");
  });
  it("Renders Job location", () => {
    const job = createJob({
      minimumQualifications: ["Code", "Develop"],
    });
    const wrapper = mount(JobListing, createConfig(job));
    expect(wrapper.text()).toMatch("Code");
    expect(wrapper.text()).toMatch("Develop");
  });
  it("links to individual job's page", () => {
    const job = createJob({
      id: 15,
    });
    const wrapper = mount(JobListing, createConfig(job));
    const jobPageLink = wrapper.findComponent(RouterLinkStub);
    const toProp = jobPageLink.props("to");
    expect(toProp).toBe("/jobs/results/15");
  });
});
