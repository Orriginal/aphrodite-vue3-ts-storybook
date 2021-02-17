<template>
  <div v-shadow>
    <button style="background-color: #42b983;">klik hier</button>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator'
export default class AButton extends Vue {
  @Prop() readonly msg!: string
}
</script>

<style scoped>
button {
  background-color: #42b983;
}
</style>
