<template>
  <div class="flex flex-row justify-center h-36 w-full my-2">
    <div
      class="
        border
        flex flex-row
        py-6
        px-2
        lg:w-4/5
        hover:shadow-xl hover:scale-105
        rounded-2xl
        duration-500
        cursor-pointer
        transform
      "
    >
      <img :src="image" class="h-full mx-2 lg:mx-11" />
      <div class="self-center">
        <h1
          class="
            text-2xl
            lg:text-4xl
            font-opensans
            text-left
            lg:mb-3
            tracking-widest
          "
        >
          {{ name }}
        </h1>
        <p class="text-sm lg:text-2xl text-gray-400 text-left tracking-widest">
          {{ lang.composition }}: {{ comp }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  name: "FlowerListItem",
  props: {
    name: {
      type: String,
      default: "With Love",
    },
    composition: {
      type: String,
      default: "Composition: 11 red imported Freedom roses.",
    },
    image: {
      type: String,
      default: "https://i.imgur.com/uh9t9tG.png",
    },
  },
  setup(props) {
    const name = props.name;
    const comp = props.composition;
    const image = props.image;

    const lang = inject("lang");

    return {
      name,
      comp,
      image,
      lang,
    };
  },
};
</script>

<style></style>
