import { library } from "@fortawesome/fontawesome-svg-core";
import { faLink, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import "./style.css";

// const queryClient = new QueryClient();
const pinia = createPinia();

const app = createApp(App);

library.add(faLink, faX);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);
app.use(pinia);
app.use(VueQueryPlugin);

app.mount("#app");
