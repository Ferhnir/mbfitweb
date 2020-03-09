<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog full-width persistent v-model="mailMeBoxState">
      <q-card>
        <q-bar dark class="q-mt-md">
          Send me message
          <q-space />
          <q-btn
            dense
            flat
            icon="close"
            size="lg"
            @click="setMailMeBoxState(false)"
          >
            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section class="q-pt-md">
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <q-input
              filled
              v-model="name"
              label="Your name *"
              hint="Name and surname"
              lazy-rules
              :rules="[
                val => (val && val.length > 0) || 'Please type something'
              ]"
            />
            <q-input v-model="email" filled type="email" hint="Email" />

            <q-input v-model="text" filled type="textarea" />

            <div>
              <q-btn label="Submit" type="submit" color="primary" />
              <q-btn
                label="Reset"
                type="reset"
                color="primary"
                flat
                class="q-ml-sm"
              />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
export default {
  name: "mailMeBox",
  data() {
    return {
      mailMeBox: true,
      name: null,
      email: null,
      text: null,
      accept: false
    };
  },
  computed: {
    mailMeBoxState: {
      get() {
        return this.$store.state.mailMeBox.mailMeBoxState;
      }
    }
  },
  methods: {
    setMailMeBoxState: function(val) {
      this.$store.commit("mailMeBox/updateMailMeBoxState", val);
    },
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "You need to accept the license and terms first"
        });
      } else {
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted"
        });
      }
    },
    onReset() {
      this.name = null;
      this.age = null;
      this.accept = !false;
    }
  }
};
</script>
<style>
#ClsBtn {
  float: right;
}
</style>
