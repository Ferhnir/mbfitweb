<template>
  <q-stepper
    v-model="currentStep"
    animated
    header-nav
    flat
    vertical
    dark
    ref="stepper"
    active-color="deep-orange"
    inactive-color="yellow"
    active-icon="mdi-arrow-right-bold"
    style="background: #000 !important; max-width:1024px;"
  >
    <q-step
      v-for="(el, index) in stepsData"
      :key="index"
      :name="index + 1"
      :prefix="index + 1"
      :title="el.title"
      :done="done1"
    >
      {{ el.desc }}
    </q-step>
  </q-stepper>
</template>
<script>
export default {
  name: "Stepper",
  props: ["stepsData"],
  data() {
    return {
      currentStep: 1,
      done1: false,
      done2: false,
      done3: false,
      done4: false
    };
  }
};
</script>
