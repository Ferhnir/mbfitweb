<template>
  <q-header elevated>
    <q-toolbar class="bg-black glossy text-y">
      <q-img
        src="../assets/images/mbfit-logo.jpg"
        style="height: 38px; max-width: 64px"
      />
      <q-toolbar-title>Mbfitlifecoaching</q-toolbar-title>
      <q-btn
        flat
        round
        dense
        icon="menu"
        class="q-mr-sm"
        size="xl"
        @click="menuScreenState(true)"
      />
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    menuScreenState: function(val) {
      this.$store.commit("menuScreen/updateMenuScreenState", val);
    }
  }
};
</script>
<style scoped>
.bg-black {
  background-color: rgb("0,0,0");
}
</style>
