<template>
  <q-layout class="flex flex-center column">
    <div id="AboutMeField" class="row">
      <div
        class="full-width row wrap justify-center items-top content-stretch"
        style="overflow: hidden;"
      >
        <div
          class="col-sm-12 col-md-6 self-center text-center"
          style="overflow: auto;"
        >
          <q-img :src="'../statics/ben_prof_img2.jpg'" class="bordered-image" />
        </div>
        <div
          class="col-sm-12 col-md-6 self-top"
          style="overflow: auto; max-width: 500px; padding: 20px;"
        >
          <q-card
            class="about-me-card page-bg-black"
            style="border: 1px solid #fdd247;"
          >
            <q-card-section>
              <div class="text-capitalize">
                <div class="text-h5 text-bold q-pt-sm text-capitalize">
                  {{ aboutMe.header }}
                </div>
                <div class="text-subtitle2 q-pa-md">
                  {{ aboutMe.text }}
                </div>
                <div class="text-h5 text-bold q-pt-sm text-capitalize">
                  {{ specialozation.header }}
                </div>
                <div class="text-subtitle2">
                  <q-list class="q-pa-md">
                    <q-item style="padding: 5px; min-height: 26px !important;">
                      {{ specialozation.text }}
                    </q-item>
                  </q-list>
                </div>
                <div class="text-h5 text-bold q-pt-sm text-capitalize">
                  {{ qualifications.header }}
                  <div class="text-subtitle2">
                    <q-list class="q-pa-md">
                      <q-item
                        v-for="(item, index) in qualifications.list"
                        :key="index"
                        style="padding: 5px 10px; min-height: 26px !important;"
                      >
                        {{ item }}
                      </q-item>
                    </q-list>
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-layout>
</template>
<script>
export default {
  name: "AboutMe",
  data: () => {
    return {
      aboutMe: {
        header: "Hi, I'm Ben...",
        text:
          "My greatest achievement is coaching myself to seven consecutive Namibian Junior / Senior 400m titles.  My biggest regret is not making it to the Olympic Games because I did not have a coach to take me to the next level.  Have you come up short because you did not have support?  With my experience, I can help you to;  finally agree with your scales, prepare the best version of you, keep up with your little ones without gasping for air, and yes ... Keep the lights on!"
      },
      specialozation: {
        header: "My Specialist areas",
        text: "Fat loss specialist"
      },
      qualifications: {
        header: "My qualifications",
        list: [
          "Certified Level 2 - Fitness instructor",
          "Certified Level 3  - Personal trainer",
          "Certified Nutrition Adviser"
        ]
      }
    };
  }
};
</script>
<style>
#AboutMeField {
  max-width: 1439px;
  width: 95%;
}

@media only screen and (min-width: 1024px) {
  #AboutMeField {
    width: 80%;
  }
}

.bordered-image {
  border-width: 2px;
  border-radius: 175px;
  border-color: #fdd247;
  border-style: solid;
  width: 350px;
  height: 350px;
  /* max-height: 400px;
  min-height: 200px;
  max-width: 400px;
  min-width: 200px; */
}
</style>
