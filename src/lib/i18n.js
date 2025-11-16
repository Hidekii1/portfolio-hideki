import { register, getLocaleFromNavigator, init } from "svelte-i18n";

register("en-US", () => import("../translations/en.json"));
register("en", () => import("../translations/en.json"));
register("es", () => import("../translations/es.json"));
register("es-ES", () => import("../translations/es.json"));

const savedLocale = typeof localStorage !== "undefined" ? localStorage.getItem("locale") : null;
init({
  fallbackLocale: "en-US",
  initialLocale: savedLocale || getLocaleFromNavigator(),
});
