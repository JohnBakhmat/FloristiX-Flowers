<template>
  <div
    class="
      font-opensans-semi
      flex flex-row
      justify-center
      gap-3
      text-md
      lg:gap-9 lg:text-xl
      text-white text-opacity-50
      tracking-wider
      pt-10
    "
  >
    <router-link to="/">{{ lang.home }}</router-link>
    <router-link to="/about">{{ lang.information }}</router-link>
    <router-link to="/catalog">{{ lang.catalog }}</router-link>
    <button @click="$emit('changeLangEvent')">RU/ENG</button>
  </div>
  <div class="text-center flex-row py-24 lg:py-64 h-5/6 z-10">
    <h1
      class="
        text-white text-4xl
        lg:text-5xl
        font-oswald font-bold
        tracking-wider
      "
    >
      Your <span class="text-blue-400">beloved</span> will be delighted
    </h1>
    <p class="font-opensans text-xl lg:text-3xl m-3 text-white tracking-widest">
      Find a bouquet in a second
    </p>
  </div>
</template>

<script>
import { inject } from "@vue/runtime-core";
export default {
  name: "Navigation",
  setup() {
    const lang = inject("lang");
    return {
      lang,
    };
  },
  emits: ["changeLangEvent"],
};
</script>

<style>
a.router-link-exact-active {
  color: white;
}
</style>
