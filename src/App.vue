<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
<style>
.q-page-gaps {
  padding-top: 100px;
  padding-bottom: 100px;
}

.q-page-gaps > .row {
  max-width: 1260px;
  margin: auto;
}

.text-y * {
  color: #fdd247 !important;
}

.text-b * {
  color: #000 !important;
}

.bg-black {
  background-color: #000;
}

.claim-btn {
  color: #000 !important;
  background-color: #fdd247 !important;
}
</style>
