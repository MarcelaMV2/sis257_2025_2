<script lang="ts" setup>
import ColorItem from '@/components/icons/ColorItem.vue'
import { ref } from 'vue'

const titulo = ref<string>('Pagina de prueba')
const contador = ref<number>(0)
//const colores = ref<string[]>(['Rojo', 'Amarillo', 'Verde', 'Rosa', 'Morado'])
const colores = ref([
  { clave: 'red', valor: 'Rojo' },
  { clave: 'yellow', valor: 'Amarillo' },
  { clave: 'green', valor: 'Verde' },
  { clave: 'blue', valor: 'Azul' },
])

function incrementar() {
  contador.value++
}
</script>

<template>
  <div>
    <h1>{{ titulo }} - {{ contador }}</h1>
    <!--<button @click="contador++">Incrementar</button> @click lo que hace es que puede tomar los eventos que se estan realizando -->
    <button @click="incrementar()">Incrementar</button>

    <p v-if="contador % 2 === 0">El contador es par</p>
    <p v-else>El contador es impar</p>
    <!--RENDERIZACION DE LISTAS-->
    <ul v-for="(color, index) in colores" :key="index">
      <!--<li :style="{ color: color.clave }">{{ color.valor }}</li>-->
      <ColorItem :color="color"></ColorItem>
      <!--como ahora es un objeto puedo acceder a sis demas funciones que tiene el objeto-->
      <!--si varios procesos se repiten entonces lo que se puede hacecr es crear un componente en esta caso-->
    </ul>
  </div>
</template>

<style scoped></style>
