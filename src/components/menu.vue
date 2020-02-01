<template>
  <q-layout
    class="menuScreen flex flex-center column text-y"
    :class="{ active: menuScreenState }"
  >
    <div class="menu-screen-close">
      <q-btn
        flat
        round
        text-color="yellow"
        icon="clear"
        size="xl"
        @click="setMenuScreenState(false)"
      />
    </div>
    <q-list padding>
      <q-item clickable v-ripple v-for="(el, index) in menuList" :key="index">
        <q-item-section>
          <a
            href="#"
            class="menu-link q-py-md"
            @click="handleScroll(el.href)"
            >{{ el.name }}</a
          >
        </q-item-section>
      </q-item>
    </q-list>
  </q-layout>
</template>
<script>
import { scroll } from "quasar";
const { getScrollTarget, setScrollPosition } = scroll;
export default {
  name: "Menu",
  props: ["menuScreenStatus"],
  data: () => {
    return {
      isActive: false,
      menuList: [
        { name: "YOUR OBJECTIVE", href: "yourObjective" },
        { name: "ACHIVE YOUR GOAL", href: "achiveYourGoal" },
        { name: "DISCOVER YOUR PACK", href: "discoverYourPack" },
        { name: "CHOOSE YOUR PACK", href: "chooseYourPack" },
        { name: "ABOUT ME", href: "aboutMe" }
      ]
    };
  },
  computed: {
    menuScreenState: {
      get() {
        return this.$store.state.menuScreen.menuScreenState;
      }
    }
  },
  methods: {
    setMenuScreenState: function(val) {
      this.$store.commit("menuScreen/updateMenuScreenState", val);
    },
    handleScroll(href) {
      const ele = document.getElementById(href);
      const target = getScrollTarget(ele);
      const offset = ele.offsetTop;
      const duration = 500;
      setScrollPosition(target, offset, duration);
      this.$store.commit("menuScreen/updateMenuScreenState", false);
    }
  }
};
</script>
<style scoped>
.menuScreen {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -100000;
  background-color: #000;
  opacity: 0;
  transition: 0.5s;
}

.active {
  z-index: 100000;
  opacity: 0.95;
}

.menu-screen-close {
  position: absolute;
  top: 0;
  right: 0;
}

.menu-list a {
  text-decoration: none;
  text-align: center;
}

.menu-link {
  font-size: 24px;
  text-decoration: none;
  text-align: center;
}
</style>
