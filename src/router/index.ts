import { createRouter, createWebHashHistory } from "vue-router";
//import HomeView from "@/views/HomeView.vue";
//import JobResultsView from "@/views/JobResultsView.vue";
//import JobView from "@/views/JobView.vue";
//Lazy Loading...
const HomeView = () => import("@/views/HomeView.vue");
const JobResultsView = () =>
  import(/* webpackChunkName: "jobs"*/ "@/views/JobResultsView.vue");
const JobView = () =>
  import(/* webpackChunkName: "jobs"*/ "@/views/JobView.vue");

const TeamsView = () =>
  import(/* webpackChunkName: "teams"*/ "@/views/TeamsView.vue");
//path name component

const TeamView = () =>
  import(/* webpackChunkName: "teams"*/ "@/views/TeamView.vue");

const NewApplicantView = () =>
  import(/* webpackChunkName: "applicants"*/ "@/views/NewApplicantView.vue");

const NewJobView = () =>
  import(/* webpackChunkName: "jobs"*/ "@/views/NewJobView.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/jobs/results",
    name: "JobResults",
    component: JobResultsView,
  },
  {
    path: "/jobs/results/:id",
    name: "JobListing",
    component: JobView,
  },
  {
    path: "/teams",
    name: "Teams",
    component: TeamsView,
  },
  {
    path: "/teams/results/:name",
    name: "TeamListing",
    component: TeamView,
  },
  {
    path: "/applicant/new",
    name: "NewApplicant",
    component: NewApplicantView,
  },
  {
    path: "/jobs/new",
    name: "NewJob",
    component: NewJobView,
  },
  //To ADD NEW ROUTES
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0,
      left: 0,
      behavior: "smooth",
    };
  },
});
export default router;
