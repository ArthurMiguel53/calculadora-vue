<template>
  <h2>{{ resultado }}                        {{ opfeita }}</h2>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'result',
  props: {
    resultado: Number,
    opfeita: String
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
