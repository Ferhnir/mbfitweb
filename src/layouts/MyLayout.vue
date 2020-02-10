<template>
  <q-layout view="lHh Lpr lFf">
    <navbar v-on:changeMenuStatus="updateMenuStatus($event)" />
    <intro />
    <yourObjective />
    <achiveYourGoal />
    <discoverYourPack />
    <choseYourPack />
    <whoHasMadeIt />
    <testXer />
    <menuScreen :menu-screen-status="menuStatus" />
    <q-btn
      flat
      rounded
      class="back-to-top-btn"
      icon="mdi-menu-up"
      size="lg"
      text-color="yellow"
      color="black"
    />
  </q-layout>
</template>

<script>
import navbar from "../components/navbar";
import menuScreen from "../components/menu";
//subpages
import intro from "../pages/subpages/Intro";
import yourObjective from "../pages/subpages/yourObjectives";
import achiveYourGoal from "../pages/subpages/achiveYourGoal";
import discoverYourPack from "../pages/subpages/discoverYourPack";
import choseYourPack from "../pages/subpages/chooseYourPack";
import whoHasMadeIt from "../pages/subpages/whoHasMadeIt";

import testXer from "../pages/subpages/test";

export default {
  name: "MyLayout",
  components: {
    navbar,
    menuScreen,
    intro,
    yourObjective,
    achiveYourGoal,
    discoverYourPack,
    choseYourPack,
    whoHasMadeIt,
    testXer
  },
  data() {
    return {
      menuStatus: false
    };
  },
  methods: {
    updateMenuStatus: status => {
      this.menuStatus = status;
    }
  }
};
</script>
<style>
.back-to-top-btn {
  position: fixed;
  right: 20px;
  bottom: 20px;
}
</style>
