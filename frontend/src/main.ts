import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { QueryClient, VueQueryPlugin } from "@tanstack/vue-query";
import { router } from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const queryClient = new QueryClient();

const app = createApp(App);

library.add(faLink);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);
app.use(VueQueryPlugin, { queryClient });

app.mount("#app");
