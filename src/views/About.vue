<template>
  <section class="py-10 lg:p-20">
    <h1 class="font-oswald text-4xl lg:text-6xl text-gray-500">
      {{ lang.about_us }}
    </h1>
    <p class="font-opensans text-xl lg:text-3xl tracking-normal m-10 lg:m-20">
      Keep reading this page to figure out how we got started and who is behind
      it!
    </p>

    <div class="text-left mx-7 lg:mx-32">
      <h1 class="font-oswald text-2xl lg:text-4xl">
        {{ lang.the_first_days }}
      </h1>
      <p
        class="
          font-opensans
          text-lg
          lg:text-2xl
          my-5
          tracking-wide
          leading-relaxed
        "
      >
        {{ lang.the_first_days_text }}
      </p>
    </div>
  </section>
  <section class="bg-gray-50 py-10 lg:py-20">
    <h1
      class="
        text-gray-400
        font-montserrat
        tracking-widest
        uppercase
        text-md
        lg:text-xl
      "
    >
      who we are
    </h1>
    <h1 class="m-10 font-oswald text-5xl">{{ lang.our_team }}</h1>
    <div class="flex flex-row justify-center">
      <figure class="bg-blue-400 h-1 rounded-full w-1/12 place-self-center" />
    </div>

    <p class="m-10 font-opensans text-xl lg:text-3xl text-gray-500">
      {{ lang.our_team_summary }}
    </p>

    <div
      class="
        mx-10
        grid grid-cols-1
        lg:grid-flow-row lg:grid-cols-3 lg:grid-rows-1
        gap-10
        justify-center
      "
    >
      <TeamMember :member="team[0]" />
      <TeamMember :member="team[1]" />
      <TeamMember :member="team[2]" />
    </div>
  </section>
</template>
<script>
import TeamMember from "@/components/TeamMember.vue";
import { inject } from "@vue/runtime-core";
export default {
  name: "About",
  components: {
    TeamMember,
  },
  emits: ["scrollToTopEvent"],
  setup() {
    const lang = inject("lang");
    const team = inject("team");
    return {
      lang,
      team,
    };
  },
};
</script>
