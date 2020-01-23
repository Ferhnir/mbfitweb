<template>
  <div class="bg-black text-y q-py-xl">
    <div class="row q-pa-md">
      <div class="col-xs-12">
        <p class="text-h3 text-center text-weight-bold">
          WHAT IS YOUR OBJECTIVE?
        </p>
      </div>
    </div>
    <div class="row q-pa-md q-page-gaps">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="col-xs-12 col-sm-6 col-md-3 col-lg-3 q-pa-md"
      >
        <card :card-data="card" />
      </div>
    </div>
  </div>
</template>
<script>
import card from "../../components/card";
export default {
  name: "YourObjective",
  components: {
    card
  },
  data: () => {
    return {
      cards: [
        {
          title: "Become fit",
          icon: "mdi-star",
          desc:
            "One of our experts with excellent knowledge of script engine and bot functionality is always ready to help you."
        },
        {
          title: "Loosing weight",
          icon: "mdi-heart",
          desc:
            "One of our experts with excellent knowledge of script engine and bot functionality is always ready to help you."
        },
        {
          title: "Tone up my body",
          icon: "mdi-battery-charging-50",
          desc:
            "One of our experts with excellent knowledge of script engine and bot functionality is always ready to help you."
        },
        {
          title: "Release stress",
          icon: "mdi-anchor",
          desc:
            "One of our experts with excellent knowledge of script engine and bot functionality is always ready to help you."
        }
      ]
    };
  }
};
</script>
