import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

import "normalize.css";
import "@/assets/css/base.css";

import { globalRegister } from "@/global";
const app = createApp(App);

app.use(createPinia());
app.use(router);
// 注册 Element-plus/icon 组件
app.use(globalRegister);

app.mount("#app");
