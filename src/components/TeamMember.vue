<template>
  <div
    class="
      border
      hover:shadow-lg
      bg-white
      font-oswald
      p-10
      flex flex-col
      gap-10
    "
  >
    <h1 class="text-4xl text-blue-400">{{ member.name }}</h1>
    <h2 class="text-2xl">{{ member.job }}</h2>
    <img :src="member.avatar" class="w-2/3 self-center" />
    <p class="text-2xl italic text-gray-500">
      {{ member.quote }}
    </p>
  </div>
</template>

<script>
export default {
  name: "TeamMember",
  props: {
    member: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
