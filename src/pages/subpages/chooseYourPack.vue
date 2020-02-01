<template>
  <q-layout id="chooseYourPack" class="flex flex-center page-bg-yellow column">
    <div class="q-py-xl">
      <div class="row q-pa-md">
        <div class="col-xs-12">
          <p class="text-h3 text-center text-weight-bold">
            CHOOSE YOUR PACK
          </p>
          <p class="text-h4 text-center text-weight-light">
            Enjoy the cost of success or pay the price of failure
          </p>
        </div>
      </div>
      <div class="row q-pa-md justify-center">
        <div
          v-for="(pack, index) in packs"
          :key="index"
          class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 q-pa-md"
          style="max-width: 350px;"
        >
          <card :card-data="pack" :card-bg-style="cardBgStyle">
            <q-btn
              rounded
              style="background-color: #EE5240; color: #000; width: 150px;"
              size="md"
            >
              GET STARTED
            </q-btn>
          </card>
        </div>
      </div>
    </div>
  </q-layout>
</template>
<script>
import card from "../../components/card";
export default {
  name: "chooseYourPack",
  components: {
    card
  },
  data: () => {
    return {
      cardBgStyle:
        "background: linear-gradient(to bottom right, #fdd247, #f1b70e);",
      packs: [
        {
          title: "3 MONTH TRANSFORMATION MEMBERSHIP",
          price: "£ 420",
          list: [
            "3 Time Per Week",
            "60 Minutes",
            "100% Money back",
            "2 Free Pt for Family",
            "And many more"
          ],
          style: {
            background:
              "linear-gradient(156deg, rgba(253,210,71,1) 0%, rgba(255,230,149,1) 44%, rgba(253,210,71,1) 62%, rgba(253,210,71,1) 100%)",
            border: "1px solid #000"
          },
          class: "text-black"
        },
        {
          title: "6 MONTH TRANSFORMATION MEMBERSHIP",
          price: "£ 360",
          list: [
            "3 Time Per Week",
            "45 Minutes",
            "100% Money back",
            "2 Free Pt for Family",
            "And many more"
          ],
          style: {
            background:
              "linear-gradient(156deg, rgba(0,0,0,1) 0%, rgba(64,63,63,1) 44%, rgba(0,0,0,1) 62%, rgba(0,0,0,1) 100%)"
          },
          class: ""
        },
        {
          title: "9 MONTH TRANSFORMATION MEMBERSHIP",
          price: "£ 300",
          list: [
            "3 Time Per Week",
            "30 Minutes",
            "100% Money back",
            "2 Free Pt for Family",
            "And many more"
          ],
          style: {
            background:
              "linear-gradient(156deg, rgba(253,210,71,1) 0%, rgba(255,230,149,1) 44%, rgba(253,210,71,1) 62%, rgba(253,210,71,1) 100%)",
            border: "1px solid #000"
          },
          class: "text-black"
        }
      ]
    };
  }
};
</script>
