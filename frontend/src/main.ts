import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { QueryClient, VueQueryPlugin } from "@tanstack/vue-query";
import { router } from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faLink, faX } from "@fortawesome/free-solid-svg-icons";
import { createPinia } from "pinia";

const queryClient = new QueryClient();
const pinia = createPinia();

const app = createApp(App);

library.add(faLink, faX);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);
app.use(pinia);
app.use(VueQueryPlugin, { queryClient });

app.mount("#app");
