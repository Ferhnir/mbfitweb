<template>
  <q-layout view="lHh Lpr lFf">
    <navbar />
    <intro />
    <yourObjective />
    <achiveYourGoal />
    <discoverYourPack />
    <choseYourPack />
    <test />
  </q-layout>
</template>

<script>
import navbar from "../components/navbar";
//subpages
import intro from "../pages/subpages/Intro";
import yourObjective from "../pages/subpages/yourObjectives";
import achiveYourGoal from "../pages/subpages/achiveYourGoal";
import discoverYourPack from "../pages/subpages/discoverYourPack";
import choseYourPack from "../pages/subpages/chooseYourPack";
import test from "../pages/subpages/test";

export default {
  name: "MyLayout",
  components: {
    navbar,
    intro,
    yourObjective,
    achiveYourGoal,
    discoverYourPack,
    choseYourPack,
    test
  },
  data() {
    return {
      // leftDrawerOpen: false
    };
  }
};
</script>
