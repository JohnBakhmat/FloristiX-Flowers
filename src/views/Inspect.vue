<template>
  <div class="flex flex-row justify-center text-gray-500">
    <div
      class="
        w-10/12
        border
        p-12
        flex flex-row
        bg-white
        shadow-2xl
        -translate-y-44
        transform
        rounded-3xl
      "
    >
      <img :src="flower.image" alt="" class="mx-10 w-1/8 self-center" />
      <div class="ml-10 text-left flex flex-col gap-6 w-3/4 self-center">
        <h1 class="font-oswald text-5xl">{{ flower.name }}</h1>
        <h1 class="font-opensans text-3xl">
          {{ lang.price }}:
          <span class="text-green-600 font-bold">
            {{ flower.price + " \u20b4" }}
          </span>
        </h1>
        <h1 class="font-opensans text-3xl">{{ lang.bouqite }}</h1>
        <hr class="w-full" />
        <p class="font-opensans text-2xl">{{ flower.description }}</p>
        <h2 class="font-opensans text-2xl">
          {{ lang.composition }}: {{ flower.composition }}
        </h2>
        <div class="flex flex-row gap-20">
          <a
            href="https://wa.me/+380953622829"
            class="
              uppercase
              border
              py-5
              px-10
              rounded-xl
              bg-green-500
              text-white
              hover:scale-105
              transform
              duration-200
              flex flex-row
              gap-3
            "
          >
            <span class="self-center">buy with whatsapp</span>

            <i class="fab fa-whatsapp self-center text-3xl"></i>
          </a>
          <a
            class="
              uppercase
              border
              py-5
              px-10
              rounded-xl
              bg-yellow-500
              text-white
              hover:scale-105
              transform
              duration-200
              flex flex-row
              gap-3
            "
          >
            <span class="self-center">Buy with card</span>
            <i class="fas fa-credit-card self-center text-3xl"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { inject } from "@vue/runtime-core";
// import { ref } from "vue";s
export default {
  setup() {
    const id = useRoute().params.id;
    const flowers = inject("flowers");
    const lang = inject("lang");
    const flower = flowers[id];

    console.log(flower);
    return {
      flower,
      lang,
    };
  },
};
</script>

<style></style>
