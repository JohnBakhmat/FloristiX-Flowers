<template>
  <div class="image">
    <Navigation class="p-10" @changeLangEvent="changeLang()" />
    <div class="bg-white">
      <router-view @scrollToTopEvent="scrollToTop()" />
    </div>
    <Footer />

    <BackToTopButton :isShown="toTop" @scrollToTopEvent="scrollToTop()" />
  </div>
</template>
<script>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";
import BackToTopButton from "@/components/BackToTopButton.vue";
import { ref, onMounted, computed, provide } from "vue";
import db from "../db.json";
import ru from "@/assets/lang/ru.json";
import en from "@/assets/lang/en.json";
export default {
  components: {
    Navigation,
    Footer,
    BackToTopButton,
  },
  setup() {
    const scroll = ref({ timer: 0, y: 0 });
    const toTop = computed(() => scroll.value.y > 200);

    const handleScroll = () => {
      if (scroll.value.timer) return;
      scroll.value.timer = setTimeout(() => {
        scroll.value.y = window.scrollY;
        clearTimeout(scroll.value.timer);
        scroll.value.timer = 0;
      }, 200);
    };
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    const lang = ref(en);
    let eng = true;
    const changeLang = () => {
      lang.value = eng ? ru : en;
      eng = !eng;
    };

    provide("flowers", db.flowers);
    provide("team", db.team);
    provide("lang", lang);

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    return {
      scrollToTop,
      scroll,
      toTop,
      changeLang,
      handleScroll,
    };
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.image {
  background: linear-gradient(rgba(6, 46, 73, 0.5), rgba(6, 46, 73, 0.5)),
    url(https://i.imgur.com/3o0xZ56.jpeg);
  background-repeat: no-repeat;
  background-attachment: absolute;
  background-size: inherit;
}
.font-oswald {
  font-family: Oswald;
}
.font-opensans {
  font-family: OpenSans;
}
.font-opensans-semi {
  font-family: OpenSans-Semi;
}
.font-montseratt {
  font-family: Montserrat;
}
.bg-flower {
  background: linear-gradient(rgba(6, 46, 73, 0.5), rgba(6, 46, 73, 0.5)),
    url("https://thumbs.dreamstime.com/b/spring-flowers-blue-crocuses-drops-water-backgro-background-tracks-rain-113784722.jpg");
  background-repeat: no-repeat;
  background-attachment: absolute;
  background-size: cover;
}
</style>
