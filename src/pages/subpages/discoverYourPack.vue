<template>
  <div class="bg-black column q-py-xl">
    <div class="row q-pa-md">
      <div class="col col-xs-12">
        <p class="text-h3 text-center text-weight-bold text-y">
          DISCOVER THE PACK THAT REPRESENTS YOU!
        </p>
      </div>
    </div>
    <div class="row q-page-gaps q-pa-lg">
      <div
        class="col col-xs-12 col-sm-6 col-md-4 col-lg-4 q-pa-md"
        v-for="(card, index) in cards"
        :key="index"
      >
        <card :card-data="card" />
      </div>
    </div>
  </div>
</template>
<script>
import card from "../../components/card";
export default {
  name: "discoverYourPack",
  components: {
    card
  },
  data: () => {
    return {
      cards: [
        {
          title: "WE PUSH FOR WORTHY CAUSES",
          bgImage: "package1.jpg",
          desc: "JOIN OUR FREE FIT FOR A CAUSE CHALLANGE"
        },
        {
          title: "BEST OF FOUR",
          bgImage: "package2.jpg",
          desc: "HAVE A LOOL AT OUR FIR 4 PROGRAMS"
        },
        {
          title: "TURN ORDINARY MOM TO SEXY MOM",
          bgImage: "package3.jpg",
          desc: "MOMS FOCUSED PROGRAMS"
        },
        {
          title: "EAT WHAT YOU LIKE AND LOOSE THE GUT",
          bgImage: "package4.jpg",
          desc: "A COMPLETE NUTRITIONAL COACHING"
        },
        {
          title: "MAKE DAD HANDSOME AGAIN",
          bgImage: "package5.jpg",
          desc: "DAD'S FOCUSED PROGRAMS"
        },
        {
          title: "BEST OF TWO",
          bgImage: "package6.jpg",
          desc: "TWO FOR ONE TEAM COACHING"
        }
      ]
    };
  }
};
</script>
