import { Notify } from "quasar";

Notify.setDefaults({
  icon: "announcement",
  position: "top",
  timeout: 4000,
  color: "white",
  textColor: "black",
  progress: true,
  actions: [{ icon: "close", color: "black" }]
});
