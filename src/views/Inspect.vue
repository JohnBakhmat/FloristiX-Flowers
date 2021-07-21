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
        <p class="font-opensans text-xl lg:text-2xl text-justify">
          {{ flower.description }}
        </p>
        <h2 class="font-opensans text-xl lg:text-2xl">
          {{ lang.composition }}: <br />{{ flower.composition }}
        </h2>
        <div class="flex lg:flex-row flex-col lg:gap-20 w-full">
          <a
            href="https://wa.me/+380953622829"
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
import LiqPay from "@/services/liqpay";
import generator from "generate-password";
// import { ref } from "vue";s
export default {
  setup() {
    //LiqPay
    const public_key = "sandbox_i78702606286";
    const private_key = "sandbox_s4FSNyEIpXb2eOU076bas7t2q29Z4EWJRJtpor9b";
    var liqpay = new LiqPay(public_key, private_key);

    const pay = (amount) => {
      const pass = generator.generate({ length: 10, numbers: true });
      let html = liqpay.cnb_form({
        action: "pay",
        amount: `${amount}`,
        currency: "UAH",
        description: "description text",
        order_id: `${pass}`,
        version: "3",
      });
      let dom = document.createElement("div");
      dom.innerHTML = html;
      let form = dom.getElementsByTagName("form")[0];
      document.body.appendChild(form);
      form.submit();
    };

    //
    const id = useRoute().params.id;
    const flowers = inject("flowers");
    const lang = inject("lang");
    const flower = flowers[id];

    console.log(flower);
    return {
      flower,
      lang,
      pay,
    };
  },
};
</script>

<style></style>
