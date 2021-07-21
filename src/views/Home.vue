<template>
  <section class="p-5 lg:p-20">
    <p class="text-xl text-gray-300 font-montseratt uppercase">Flowers</p>
    <h1 class="font-oswald text-6xl my-10">{{ lang.top_sales }}</h1>
    <div class="flex flex-row justify-center">
      <div class="w-1/12 h-1 bg-blue-300 rounded-full" />
    </div>
    <p class="font-opensans text-xl lg:text-3xl text-gray-400 my-10">
      {{ lang.last_five_flowers }}
    </p>
    <div
      class="grid col-span-1 m-0"
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
    <div class="flex flex-row justify-center">
      <div
        @click="
          () => {
            catalog();
            $emit('scrollToTopEvent');
          }
        "
        class="
          m-16
          transform
          cursor-pointer
          border
          bg-blue-400
          hover:shadow-xl hover:scale-105
          duration-500
          uppercase
          p-5
          rounded-xl
          text-white
          font-opensans-semi
          lg:text-xl
          text-md
          tracking-wider
          px-11
        "
      >
        {{ lang.browse_all_flowers }}
      </div>
    </div>
  </section>
</template>

<script>
// import Navigation from "../components/Navigation.vue";
import FlowerListItem from "@/components/FlowerListItem.vue";
import router from "@/router/index.js";
import { inject } from "vue";
export default {
  name: "Home",
  components: { FlowerListItem },
  emits: ["scrollToTopEvent"],
  setup() {
    const catalog = () => {
      router.push("/catalog");
    };
    const inspect = (id) => {
      router.push("/inspect/" + id);
    };

    const flowers = inject("flowers").slice(0, 5);
    const lang = inject("lang");
    return {
      flowers,
      inspect,
      lang,
      catalog,
    };
  },
};
</script>
<style></style>
