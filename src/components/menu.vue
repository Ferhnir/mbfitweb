<template>
  <q-layout
    class="flex flex-center column menu-screen text-y"
    :class="{ active: menuScreenState }"
  >
    <div
      class="row full-width row wrap justify-center items-center content-stretch"
      style="width: 80%;"
    >
      <div id="MenuField" class="row justify-center items-top content-stretch">
        <!-- LEFT MENU LIST -->
        <div id="MenuList" class="col-xs-12 col-sm-12 col-md-12 q-px-md">
          <div class="text-h3 nav-header" style="margin: auto;">
            Navigation
          </div>
          <q-list padding>
            <q-item
              clickable
              v-ripple
              v-for="(el, index) in menuList"
              :key="index"
            >
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
        </div>
      </div>
    </div>
    <!-- MENU CLOSE BTN -->
    <div class="menu-screen-close">
      <q-btn
        flat
        round
        text-color="yellow"
        icon="clear"
        size="lg"
        @click="setMenuScreenState(false)"
      />
    </div>
  </q-layout>
</template>
<script>
import { scroll } from "quasar";
const { getScrollTarget, setScrollPosition } = scroll;
export default {
  name: "Menu",
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
    setMailMeBoxState: function(val) {
      this.$store.commit("mailMeBox/updateMailMeBoxState", val);
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
.menu-screen {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -1000;
  background-color: #000;
  opacity: 0;
  transition: 0.5s;
  width: 100%;
}

.active {
  z-index: 5000;
  opacity: 0.95;
  transition: 0.5s;
}

.menu-screen-close {
  position: absolute;
  top: 0;
  right: 0;
  padding-right: 20px;
}

#MenuField {
  width: 70%;
  max-width: 1920px;
}

#MenuList {
  text-align: center;
  max-width: 550px;
}

.nav-header {
  border-bottom: #fdd247 1px;
  border-bottom-style: outset;
  padding: 10px;
}

.menu-list {
  border-bottom: #fdd247 1px;
  border-bottom-style: outset;
  padding: 10px;
}

.menu-list a {
  text-decoration: none;
}

.menu-link {
  font-size: 24px;
  text-decoration: none;
  transition: 0.5s;
}

.menu-link:hover {
  padding-left: 20px;
  transition: 0.5s;
}

@media only screen and (max-width: 1023px) {
  #ContactDetails {
    display: none;
  }

  #MenuField {
    width: 100%;
  }

  .nav-header,
  .menu-link {
    text-align: center;
  }
}
</style>
