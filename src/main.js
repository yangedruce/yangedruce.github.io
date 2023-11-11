import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import MainComponents from "./views/MainComponents.vue";
import { isDarkMode } from "./darkModeMixin";

const app = createApp(App);

app.component("MainComponents", MainComponents);

app.provide("isDarkMode", isDarkMode);

app.mount("#app");
