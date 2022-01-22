<template>
  <div class="flex flex-row justify-center text-gray-500">
    <div
      class="
        w-10/12
        border
        py-2
        px-2
        lg:p-12 lg:flex-row
        flex flex-col
        bg-white
        shadow-2xl
        -translate-y-24
        lg:-translate-y-44
        transform
        rounded-3xl
      "
    >
      <img :src="flower.image" alt="" class="mx-10 w-1/8 self-center" />
      <div class="lg:ml-10 text-left flex flex-col gap-6 w-3/4 self-center">
        <h1 class="font-oswald text-5xl">{{ flower.name }}</h1>
        <h1 class="font-opensans text-3xl">
          {{ lang.price }}:
          <span class="text-green-600 font-bold">
            {{ flower.price + " \u20b4" }}
          </span>
        </h1>
        <h1 class="font-opensans text-3xl">{{ lang.bouqite }}</h1>
        <hr class="w-full" />
        <p
          class="font-opensans text-xl lg:text-2xl text-justify"
          v-show="flower.description.length"
        >
          {{ flower.description }}
        </p>
        <h2 class="font-opensans text-xl lg:text-2xl">
          {{ lang.composition }}: <br />{{ flower.composition }}
        </h2>
        <div class="flex lg:flex-row flex-col lg:gap-20 w-full">
          <a
            class="
              text-center
              uppercase
              border
              lg:py-5 lg:px-10 lg:gap-3
              py-1
              px-3
              rounded-xl
              text-white
              hover:scale-105
              transform
              duration-200
              justify-between
              flex flex-row
              bg-green-500
            "
            @click="onWhatsupClick()"
          >
            <p class="self-center">buy with whatsapp</p>

            <i class="fab fa-whatsapp self-center text-3xl"></i>
          </a>
          <a
            class="
              text-center
              uppercase
              border
              lg:py-5 lg:px-10 lg:gap-3
              py-1
              rounded-xl
              text-white
              hover:scale-105
              transform
              duration-200
              flex flex-row
              justify-between
              px-3
              bg-yellow-500
              hidden
            "
            @click="pay(flower.price)"
          >
            <p class="self-center">Buy with card</p>
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
import { proceed_payment as pay } from "@/services/payment.js";
// import router from "../router";
import { logtailLog } from "../utils/logger.js";
// import { ref } from "vue";s
export default {
  setup() {
    //

    const id = useRoute().params.id;
    const flowers = inject("flowers");
    const lang = inject("lang");
    const flower = flowers[id];

    console.log(flower);
    const onWhatsupClick = () => {
      // logdnaLog(`${new Date()}Trying to buy ${flower}`);
      const date = new Date();
      logtailLog(
        `${date.toLocaleDateString("ru-RU")} Trying to buy ${JSON.stringify({
          flower: flower.name,
          price: flower.price,
        })}`
      );
      // router.push("/whatsup");
    };
    return {
      onWhatsupClick,
      flower,
      lang,
      pay,
    };
  },
};
</script>

<style></style>
