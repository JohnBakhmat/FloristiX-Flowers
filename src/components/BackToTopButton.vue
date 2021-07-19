<template>
  <transition name="fade">
    <button
      @click="$emit('scrollToTopEvent')"
      v-show="isShown"
      :class="[clicked ? 'bg-emerald-500' : 'bg-teal-400']"
      class="
        border border-opacity-10
        shadow-lg
        border-gray-500
        focus:outline-none
        hover:scale-150
        duration-150
        ease-in-out
        transform
        rounded-full
        w-16
        h-16
        fixed
        bottom-5
        right-5
        z-50
        p-auto
        cursor-pointer
        outline-none
      "
    >
      <i class="fas fa-arrow-up transform scale-150 text-white"></i>
    </button>
  </transition>
</template>

<script>
export default {
  name: "BackToTopButton",
  props: {
    isShown: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["scrollToTopEvent"],
};
</script>

<style></style>
