<template>
  <button id="numero">{{ num }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'button-number',
  props: {
    num: Number
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #numero{
    border-radius: 10px;
    height: 65px;
    width: 65px;
    margin-left: 10px;
    margin-top: 10px;
  }
</style>
