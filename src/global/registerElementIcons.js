import { UserFilled, Iphone } from "@element-plus/icons-vue";

// 全局注册组件element-icon
const components = [UserFilled, Iphone];

export default function (app) {
  for (const component of components) {
    app.component(component.name, component);
  }
}
