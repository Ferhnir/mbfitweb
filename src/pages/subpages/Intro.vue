<template>
  <q-layout class="flex flex-center column text-y">
    <q-parallax src="../../statics/intro_img.jpg" class="parallax">
      <p class="text-h2 text-weight-bold">PERSONAL</p>
      <p class="text-h3">FITNESS COACHING</p>
      <p class="text-h6 text-center q-pa-md">
        WE ARE NOT THE SHOUTING TYPE, WE RATHER YOU TEST US BELOW
      </p>
      <q-btn
        unelevated
        rounded
        class="claim-btn glossy text-b"
        label="CLAIM your  your free 5 day clarity consult"
      />
    </q-parallax>
  </q-layout>
</template>

<script>
export default {
  name: "IntroPage"
};
</script>
<style>
.parallax {
  height: 100vh !important;
}
.q-parallax__media > img {
  bottom: 250px !important;
}

.q-parallax__content {
  background-color: rgba(0, 0, 0, 0.6) !important;
}
</style>
