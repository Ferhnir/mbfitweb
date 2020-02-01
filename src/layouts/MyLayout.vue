<template>
  <q-layout view="lHh Lpr lFf">
    <navbar v-on:changeMenuStatus="updateMenuStatus($event)" />
    <intro />
    <yourObjective />
    <achiveYourGoal />
    <discoverYourPack />
    <choseYourPack />
    <whoHasMadeIt />
    <menuScreen :menu-screen-status="menuStatus" />
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
    whoHasMadeIt
  },
  data() {
    return {
      // leftDrawerOpen: false
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
