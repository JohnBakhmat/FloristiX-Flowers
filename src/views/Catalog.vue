<template>
  <section class="p-20">
    <p class="text-xl text-gray-300 font-montseratt uppercase">Flowers</p>
    <h1 class="font-oswald text-6xl my-10">{{ lang.catalog }}</h1>
    <div class="flex flex-row justify-center">
      <div class="w-1/12 h-1 bg-blue-300 rounded-full" />
    </div>
    <!-- <p class="font-opensans text-3xl text-gray-400 my-10">
      {{ lang.last_five_flowers }}
    </p> -->
    <div
      class="grid col-span-1 gap-4 m-3"
      v-for="(flower, index) in flowers"
      :key="index"
    >
      <FlowerListItem
        :name="flower.name"
        :composition="flower.composition"
        :image="flower.image"
        @click="
          () => {
            inspect(index);
            $emit('scrollToTopEvent');
          }
        "
      />
    </div>
  </section>
</template>

<script>
import FlowerListItem from "@/components/FlowerListItem.vue";
import router from "@/router/index.js";

import { inject } from "@vue/runtime-core";
export default {
  name: "Home",
  components: { FlowerListItem },
  emits: ["scrollToTopEvent"],
  setup() {
    const flowers = inject("flowers");
    const lang = inject("lang");

    const inspect = (id) => {
      router.push("/inspect/" + id);
    };
    return {
      flowers,
      lang,
      inspect,
    };
  },
};
</script>

<style></style>
