import { createApp } from "vue";

//import VueSimpleAlert from "vue-simple-alert";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleDown,
  faAngleUp,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import App from "@/App.vue";
import "@/assets/tailwind.css";
import router from "@/router";
import store, { key } from "@/store";

library.add(faSearch, faAngleDown, faAngleUp);
//library.add(faAngleDown);

createApp(App)
  .use(store, key)
  .use(router)
  //.use(VueSimpleAlert)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
