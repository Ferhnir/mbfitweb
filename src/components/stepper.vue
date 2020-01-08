<template>
  <q-stepper
    v-model="currentStep"
    animated
    header-nav
    flat
    vertical
    light
    ref="stepper"
    active-color="deep-orange"
    inactive-color="black"
    active-icon="mdi-arrow-right-bold"
    style="background: #fdd247 !important; max-width:1024px;"
  >
    <q-step
      v-for="(el, index) in stepsData"
      :key="index"
      :name="index + 1"
      :prefix="index + 1"
      :title="el.title"
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
      currentStep: 1
    };
  }
};
</script>
<style>
.q-stepper__title,
.q-stepper__tab {
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1.5rem;
}
</style>
