<template>
  <div class="flex flex-col justify-center bg-flower text-white py-10 lg:p-20">
    <h1 class="font-oswald text-6xl lg:text-7xl m-10">{{ lang.subscribe }}</h1>
    <p class="font-opensans text-xl lg:text-3xl tracking-wider">
      {{ lang.subscribe_info }}
    </p>
    <div class="flex flex-row my-10 lg:my-20 justify-center font-opensans">
      <form class="w-full lg:w-2/4 h-12 lg:h-16 flex flex-row" @submit.prevent>
        <input
          type="email"
          required="true"
          class="
            px-10
            h-full
            focus:outline-none
            rounded-l-full
            w-3/4
            text-xl
            lg:text-3xl
            text-gray-500
          "
          :placeholder="lang.email_placeholder"
        />
        <button
          type="submit"
          class="
            bg-green-500
            h-full
            rounded-r-full
            w-1/4
            text-sm
            lg:text-3xl
            transform
          "
        >
          {{ lang.subscribe }}
        </button>
      </form>
    </div>
  </div>
  <div class="bg-gray-800 py-10 lg:py-20">
    <div class="px-10 lg:px-40 flex flex-row gap-10">
      <div class="w-1/2">
        <h1
          class="
            text-white
            uppercase
            text-left text-2xl
            lg:text-3xl
            font-oswald
            mb-5
          "
        >
          About
        </h1>
        <p class="text-gray-300 font-opensans text-left text-md lg:text-xl">
          A flower sales website is a website specifically dedicated to buying
          flowers. Many flower buying websites are designed to get people to buy
          bouquets for their loved ones.
        </p>
      </div>
      <div class="w-1/2">
        <h1
          class="
            text-white
            uppercase
            text-left text-2xl
            lg:text-3xl
            font-oswald
            mb-5
          "
        >
          Company
        </h1>
        <div
          class="
            text-gray-300
            font-opensans
            text-left text-md
            lg:text-xl
            flex-col flex
            gap-3
          "
        >
          <a class="cursor-pointer hover:text-white duration-200">About Us</a>
          <a class="cursor-pointer hover:text-white duration-200"
            >Help Center</a
          >
          <a class="cursor-pointer hover:text-white duration-200"
            >Privacy policy</a
          >
          <a class="cursor-pointer hover:text-white duration-200">Contact us</a>
        </div>
      </div>
    </div>
    <div class="bg-gray-700 h-1 mx-20 lg:mx-40 my-10" />
    <div
      class="
        flex flex-col-reverse
        mx-5
        lg:mx-40 lg:flex-row lg:text-2xl lg:justify-between
        text-gray-300 text-lg
      "
    >
      <h1>
        Copyrights © 2020 All Rights Reserved by
        <a class="underline cursor-pointer">Pipiska 22</a>.
      </h1>
      <div class="flex gap-3 self-center">
        <h1 class="self-center">For support</h1>
        <a
          href="https://wa.me/+380953622829"
          class="
            rounded-full
            bg-gray-600
            hover:bg-green-500 hover:text-gray-800
          "
        >
          <i class="fab fa-whatsapp m-5 self-center"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  name: "Footer",
  setup() {
    const lang = inject("lang");

    return {
      lang,
    };
  },
};
</script>

<style></style>
