<template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-list dense padding>
      <q-item v-for="(element, index) in listArray" :key="index">
        <q-item-section v-if="typeof listArray === 'object'">
          {{ element }}
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
<script>
export default {
  name: "List",
  props: ["listArray"]
};
</script>
