<template>
  <q-header elevated>
    <q-toolbar
      class="bg-black glossy text-y"
      style="border-bottom: 1px solid #fdd247"
    >
      <q-img
        src="../assets/images/mbfit-logo.jpg"
        style="height: 38px; max-width: 64px"
      />
      <q-toolbar-title id="PageTitle">Mbfitlifecoaching</q-toolbar-title>
      <q-toolbar-title id="InvPageTitle"></q-toolbar-title>
      <q-btn
        id="MailMeBox"
        flat
        round
        dense
        icon="mail"
        class="q-mr-sm"
        size="xl"
        @click="updateMailMeBoxState(true)"
      />
      <q-btn
        id="PhoneCall"
        flat
        round
        dense
        icon="phone"
        class="q-mr-sm"
        size="xl"
      />
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
    },
    updateMailMeBoxState: function(val) {
      this.$store.commit("mailMeBox/updateMailMeBoxState", val);
    }
  }
};
</script>
<style scoped>
.bg-black {
  background-color: rgb("0,0,0");
}

#InvPageTitle,
#PhoneCall,
#MailMeBox {
  display: none;
}

@media only screen and (max-width: 600px) {
  #PageTitle {
    display: none;
  }

  #InvPageTitle,
  #PhoneCall,
  #MailMeBox {
    display: block;
  }
}
</style>
