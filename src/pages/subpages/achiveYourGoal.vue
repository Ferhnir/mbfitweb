<template>
  <div class="q-page-gaps bg-black column q-pt-lg">
    <div class="row q-pa-md">
      <div class="col-xs-12 text-darker-y">
        <p class="text-h3 text-center text-weight-bold">
          ACHIEVE YOUR GOALS IN 4 STEPS
        </p>
        <p class="text-h4 text-center">
          CLARITY OF PURPOSE IS THE ULTIMATE PATH TO SUCCESS
        </p>
        <stepper :steps-data="achiveStepData" />
      </div>
    </div>
  </div>
</template>
<script>
import stepper from "../../components/stepper";
export default {
  name: "AchiveYourGoal",
  components: { stepper },
  data: () => ({
    achiveStepData: [
      {
        title: "DECIDE TO MAKE  THE CHANGE",
        desc:
          "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape."
      },
      {
        title: "DEFINE YOUR REASONS WHY",
        desc:
          "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape."
      },
      {
        title: "CREATE A PLAN TO REACH YOUR GOALS",
        desc:
          "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape."
      },
      {
        title: "WORK THE PLAN UNTIL YOU REACH YOUR GOAL",
        desc:
          "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape."
      }
    ]
  })
};
</script>
<style>
.text-darker-y > * {
  color: #fdd247 !important;
}
</style>
