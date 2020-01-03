<template>
  <q-card
    class="my-card text-white"
    style="background: radial-gradient(circle, #1a1a1a 0%, #000000, #000000 100%)"
  >
    <q-card-section class="text-center">
      <q-icon size="xl" :name="cardData.icon" />
    </q-card-section>
    <q-card-section>
      <div class="text-h5 text-center">{{ cardData.title }}</div>
      <div class="text-subtitle2 q-pt-md">{{ cardData.desc }}</div>
    </q-card-section>
  </q-card>
</template>
<script>
export default {
  name: "Card",
  props: ["cardData"]
};
</script>
