import registerElementIcons from "./registerElementIcons";

export function globalRegister(app) {
  app.use(registerElementIcons);
}
