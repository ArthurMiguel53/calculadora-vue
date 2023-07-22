<template>
  <div class="principal">
    <div class="nada"></div>
    <div class="result">
      <result :resultado="resultado" :opfeita="op" style="color: white;"/>
    </div>
    <div class="butons">
      <div class="linha1">
        <numberbutton :num="num1" @click="numero(num1)"/>
        <numberbutton :num="num2" @click="numero(num2)"/>
        <numberbutton :num="num3" @click="numero(num3)"/>
        <operation :operacao="mais" @click="add()"/>
      </div>
      <div class="linha2">
        <numberbutton :num="num4" @click="numero(num4)"/>
        <numberbutton :num="num5" @click="numero(num5)"/>
        <numberbutton :num="num6" @click="numero(num6)"/>
        <operation :operacao="menos"/>
      </div>
      <div class="linha3">
        <numberbutton :num="num7" @click="numero(num7)"/>
        <numberbutton :num="num8" @click="numero(num8)"/>
        <numberbutton :num="num9" @click="numero(num9)"/>
        <operation :operacao="vezes"/>
      </div>
      <div class="linha4">
        <operation :operacao="delete" @click="deletar(resultado)"/>
        <numberbutton :num="num0" @click="numero(num0)"/>
        <operation :operacao="igual" @click="igualdade()" :disabled="desligado"/>
        <operation :operacao="dividido"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import numberbutton from "./numberbutton.vue"
import operation from "./operation.vue"
import result from "@/components/result.vue"

export default defineComponent({
  name: 'calcstructure',
  components: {
    numberbutton, operation, result
  },
  data() {
    return{
      num1: 1,
      num2: 2,
      num3: 3,
      num4: 4,
      num5: 5,
      num6: 6,
      num7: 7,
      num8: 8,
      num9: 9,
      num0: 0,
      delete: "del",
      igual: "=",
      mais: "+",
      menos: "-",
      vezes: "x",
      dividido: ":",
      resultado: 0,
      op: "",
      dadoarmazenado: 0,
      desligado: false
    }
  },
  methods: {
    numero(numclick: number) {
      if (this.resultado === 0) {
        this.resultado = numclick
      } else {
        this.resultado = this.resultado * 10 + numclick
      }
    },

    deletar(resultado: Number) {
      const resultadoStr = resultado.toString()
      const novoresultado = resultadoStr.slice(0, -1)
      this.resultado = (novoresultado === "" ? 0 : Number(novoresultado))
      if (this.resultado === 0) {
        this.desligado = false
        console.log(this.desligado)
      }
      if (this.desligado === true) {
        this.resultado = 0
        this.desligado = false
      }
    },

    add() {
      if (this.resultado != 0) {
        this.desligado = false
        const dados1 = this.resultado
        this.dadoarmazenado = dados1
        this.op = "+"
        this.resultado = 0
      }
    },

    igualdade() {
      if (this.op = "+") {
        this.resultado = this.dadoarmazenado + this.resultado
        this.op = ""
        this.desligado = true
      }
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .principal{
    height: 90%;
    width: 80%;
    margin: auto;
    background: #000;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  }
  .butons{
    height: 70%;
    width: 65%;
    margin: auto;
    background: #424f4e;
    border-radius: 10px;
  }

  .result{
    background: #4e5240;
    width: 65%;
    height: 50px;
    margin: auto;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  .nada{
    height: 20px;
  }
</style>
