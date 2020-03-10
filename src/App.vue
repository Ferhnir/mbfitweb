<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  preFetch({ store }) {
    return store.dispatch("mailMeBox/registerToken");
  }
};
</script>
<style>
body {
  background: #000;
}

.no-scroll {
  overflow: hidden;
}

.q-page-gaps {
  max-width: 1260px;
  margin: auto;
}
.text-y,
.text-y * {
  color: #fdd247 !important;
}

.text-b * {
  color: #000 !important;
}

.page-bg-black * {
  background-color: #000;
  color: #fdd247 !important;
}

.page-bg-yellow {
  background-color: #fdd247;
  color: #000 !important;
}

.claim-btn {
  color: #000 !important;
  background-color: #fdd247 !important;
}

.text-h7 {
  font-size: 1rem;
}
</style>
