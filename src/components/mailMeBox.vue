<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog persistent v-model="mailMeBoxState">
      <q-card style="max-width: 500px; width: 500px;">
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
              v-model="form.user_name"
              label="Your name *"
              hint="Name and surname"
              lazy-rules
              :rules="[
                val => (val && val.length > 0) || 'Please type your name'
              ]"
            />

            <q-input
              v-model="form.phone"
              filled
              type="Mobile"
              label="Mobile *"
              hint="Mask: (###) ## ## ###"
              mask="(###) ## ## ###"
              unmasked-value
              lazy-rules
              :rules="[
                val =>
                  (val && val.length > 9) || 'Please type your phone number'
              ]"
            />

            <q-input
              v-model="form.email"
              filled
              type="Email"
              label="Email *"
              hint="email@domain"
              unmasked-value
              lazy-rules
              :rules="[
                val =>
                  (val && $_.includes(val, '@')) || 'Please type your email'
              ]"
            />

            <q-input
              label="Message"
              v-model="form.text"
              autogrow
              filled
              type="textarea"
              lazy-rules
              :rules="[
                val =>
                  (val && val.length > 10) ||
                  'Please tell me what you want to say'
              ]"
            />

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
      form: {
        user_name: null,
        email: null,
        phone: null,
        text: null
      }
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
      this.$axios({
        method: "POST",
        url: "contactme/message",
        headers: {
          "X-Access-Token":
            "Bearer " + this.$store.state.mailMeBox.mailMeBoxToken
        },
        data: {
          test: "test"
        }
      })
        .then(response => {
          if (response.status === 200) {
            this.$store.commit("mailMeBox/updateMailMeBoxState", false);
            this.$q.notify("Message sent!");
            this.onReset();
          }
        })
        .catch(error => {
          this.$q.notify("Error: " + error);
        });
    },
    onReset() {
      this.form.user_name = null;
      this.form.phone = null;
      this.form.email = null;
      this.form.text = null;
    }
  }
};
</script>
<style>
#ClsBtn {
  float: right;
}
</style>
