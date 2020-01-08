<template>
  <div class="bg-black q-pa-md">
    <div class="row">
      <div
        class="col col-4-md col-12-sm"
        v-for="(pack, index) in packs"
        :key="index"
      >
        asd
      </div>
    </div>
  </div>
</template>
<script>
// import card from "../../components/card";
export default {
  name: "chooseYourPack",
  components: {
    // card
  },
  data: () => {
    return {
      packs: [
        {
          title: "ABasdasdsadC sdfaf sf f ",
          price: "£ 234",
          contain: ["abc", "bcd", "der", "asdfasd"]
        },
        {
          title: "ABCasdasdasd",
          price: "£ 234",
          contain: ["abc", "bcd", "der", "asdfasd"]
        },
        {
          title: "ABCasdasdasd",
          price: "£ 234",
          contain: ["abc", "bcd", "der", "asdfasd"]
        }
      ]
    };
  }
};
</script>
