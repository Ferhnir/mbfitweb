<template>
  <!-- <q-card class="my-card text-white" :style="cardBgStyle"> -->
  <q-card
    class="my-card text-white"
    v-bind:style="[
      $_.has(cardData.style, 'background') ? cardData.style : styleDefault
    ]"
    v-bind:class="cardData.class"
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
    <!-- TITLE WITH ICON-->
    <q-card-section v-if="$_.has(cardData, 'icon')" class="text-center">
      <q-icon size="xl" :name="cardData.icon" />
      <div class="text-h6 text-center">{{ cardData.title }}</div>
    </q-card-section>
    <!-- TITLE WITHOUT ICON ANDBACKGROUND IMAGE -->
    <q-card-section
      v-if="!$_.has(cardData, 'icon') && !$_.has(cardData, 'bgImage')"
      class="text-center"
    >
      <div class="text-h7 text-center">{{ cardData.title }}</div>
    </q-card-section>
    <!-- IF PRICE EXIST -->
    <q-card-section v-if="$_.has(cardData, 'price')" class="text-center">
      <div class="text-h4 text-center q-pb-md">{{ cardData.price }}</div>
      <div class="text-h7 text-center q-pb-md">PER MONTH</div>
      <q-separator style="padding-top: 1px;" color="red" inset />
    </q-card-section>
    <!-- DEFAULT DESCRIPTION -->
    <q-card-section v-if="$_.has(cardData, 'desc')" class="q-pt-lg">
      <div class="text-subtitle2 text-center q-pt-sm text-y">
        {{ cardData.desc }}
      </div>
    </q-card-section>
    <!-- LISTS -->
    <q-card-section v-if="$_.has(cardData, 'list')" class="text-center">
      <list :list-array="cardData.list" />
    </q-card-section>
    <q-card-section class="text-center q-pb-md">
      <slot></slot>
    </q-card-section>
  </q-card>
</template>
<script>
import list from "./list";
export default {
  name: "Card",
  components: {
    list
  },
  props: ["cardData", "cardBgStyle"],
  data: () => {
    return {
      styleDefault: {
        background: "radial-gradient(circle, #1a1a1a 0%, #000000, #000000 100%)"
      }
    };
  }
};
</script>
<style>
.q-img__content > div {
  color: #fdd247;
  background: rgba(0, 0, 0, 0.7);
}
</style>
