<template>
  <calcstructure id="calculadora"/>
</template>
 
<script lang="ts">
  import { DefineComponent, defineComponent } from 'vue';
  import calcstructure from "@/components/calc-structure.vue"

  export default defineComponent({
    name: "Main",
    components: {
      calcstructure
    },
  })
</script>

<style>
  #calculadora{
    width: 75%;
  }
</style>
