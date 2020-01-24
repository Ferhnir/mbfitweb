<template>
  <q-layout class="flex flex-center column text-y">
    <div class="bg-black column q-py-xl q-page-gaps">
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="yellow"
        navigation
        padding
        arrows
        height="400px"
        infinite
        class="bg-black text-white shadow-1 rounded-borders"
      >
        <q-carousel-slide
          :name="card.userID"
          class="column no-wrap flex-center"
          v-for="(card, index) in testimonialsObj"
          :key="index"
        >
          <q-card class="my-card bg-black text-y q-pt-xl" flat bordered>
            <q-item>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label>{{ card.user }}</q-item-label>
              </q-item-section>
            </q-item>
            <q-card-section>
              <q-card-section>
                {{ card.desc }}
              </q-card-section>
            </q-card-section>
            <q-separator />
            <q-card-section class="text-center">
              <q-rating v-model="card.rate" :max="5" size="32px" />
            </q-card-section>
            <q-separator />
          </q-card>
        </q-carousel-slide>
        <div class="row q-pa-md">
          <div class="col col-xs-12">
            <p class="text-h3 text-center text-weight-bold text-y">
              LOOK WHO HAS MADE IT
            </p>
          </div>
        </div>
      </q-carousel>
    </div>
  </q-layout>
</template>
<script>
export default {
  name: "whoHasMadeIt",
  data: () => {
    return {
      slide: 1,
      testimonialsObj: [
        {
          user: "Psikuta bez S",
          userID: 1,
          desc:
            "When i started i could not do a single push up, now i am pushing equivalent of my age 40 x. Coach Ben was clear in the when i will achieve that..Super happy.",
          rate: 5
        },
        {
          user: "Psikuta 123bez S",
          userID: 2,
          desc:
            "Learned so much and still learning as my physique is keeping progressing..Coach Ben is fun to with.",
          rate: 5
        },
        {
          user: "Psikuta 45645645bez S",
          userID: 3,
          desc:
            "Been with Coach Ben for 15 Weeks and cannot recommend him enough..Got my body back and we are not finished yet.",
          rate: 5
        },
        {
          user: "Psikuta 45645645bez S",
          userID: 4,
          desc: "asdasdasdasdas das das das das das das das dasdasd asd asd a",
          rate: 5
        },
        {
          user: "Psikuta 45645645bez S",
          userID: 5,
          desc: "asdasdasdasdas das das das das das das das dasdasd asd asd a",
          rate: 5
        },
        {
          user: "Psikuta 45645645bez S",
          userID: 6,
          desc: "asdasdasdasdas das das das das das das das dasdasd asd asd a",
          rate: 5
        },
        {
          user: "Psikuta 45645645bez S",
          userID: 7,
          desc: "asdasdasdasdas das das das das das das das dasdasd asd asd a",
          rate: 5
        }
      ]
    };
  }
};
</script>
