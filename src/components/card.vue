<template>
  <q-card
    class="my-card text-white"
    style="background: radial-gradient(circle, #1a1a1a 0%, #000000, #000000 100%)"
  >
    <!-- IMAGE WITH TITLE -->
    <q-img
      v-if="$_.has(cardData, 'bgImage')"
      :src="'../statics/' + cardData.bgImage"
      basic
    >
      <div class="absolute-bottom text-h7 text-center text-white text-bold">
        {{ cardData.title }}
      </div>
    </q-img>
    <!-- ICON WITH TITLE -->
    <q-card-section v-if="$_.has(cardData, 'icon')" class="text-center">
      <q-icon size="xl" :name="cardData.icon" />
      <div class="text-h5 text-center">{{ cardData.title }}</div>
    </q-card-section>
    <q-card-section v-if="cardData">
      <div class="text-subtitle2 text-center q-pt-sm text-y">
        {{ cardData.desc }}
      </div>
    </q-card-section>
  </q-card>
</template>
<script>
export default {
  name: "Card",
  props: ["cardData"]
};
</script>
<style>
.q-img__content > div {
  color: #fdd247;
  background: rgba(0, 0, 0, 0.7);
}
</style>
