<template>
  <q-layout view="lHh Lpr lFf">
    <navbar />
    <intro />
    <yourObjective />
    <achiveYourGoal />
    <test />
  </q-layout>
</template>

<script>
import navbar from "../components/navbar";
//subpages
import intro from "../pages/subpages/Intro";
import yourObjective from "../pages/subpages/yourObjectives";
import achiveYourGoal from "../pages/subpages/achiveYourGoal";
import test from "../pages/subpages/test";

export default {
  name: "MyLayout",
  components: {
    navbar,
    intro,
    yourObjective,
    achiveYourGoal,
    test
  },
  data() {
    return {
      // leftDrawerOpen: false
    };
  }
};
</script>
