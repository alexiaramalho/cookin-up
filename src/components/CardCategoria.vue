<script lang="ts">
import type ICategoria from "@/interfaces/ICategoria";
import type { PropType } from "vue";
import Tag from "./Tag.vue";
import IngredienteSelecionavel from "./IngredienteSelecionavel.vue";

export default {
  props: {
    //props é a forma do pai passar informação para o filho// componente filho que declara as props que quer receber
    categoria: { type: Object as PropType<ICategoria>, required: true }, //o Vue nao entende tipos typescript, então diz que categoria é do tipo objeto e deve seguir a estrutura da interface// required indica que essa prop é obrigatória
  },
  components: {Tag, IngredienteSelecionavel},
  emits: ['adicionarIngrediente', 'removerIngrediente']
};
</script>

<template>
  <article class="categoria">
    <header class="categoria__cabecalho">
      <img :src="`/imagens/icones/categorias_ingredientes/${categoria.imagem}`" alt="" class="categoria_imagem">

      <h2 class="paragrafolg categoria__nome">{{ categoria.nome }}</h2>
    </header>

    <ul class="categoria__ingredientes">
      <li v-for="ingrediente in categoria.ingredientes" :key="ingrediente">
      <IngredienteSelecionavel :ingrediente="ingrediente" @adicionar-ingrediente="$emit('adicionarIngrediente', $event)" @remover-ingrediente="$emit('removerIngrediente', $event)"/>
      </li>
    </ul>
  </article>
</template>


<style scoped>
.categoria {
  width: 19.5rem;
  padding: 1rem;
  border-radius: 1rem;
  background: var(--branco, #FFF);
  box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.categoria__cabecalho {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.categoria__imagem {
  width: 3.5rem;
}

.categoria__nome {
  text-align: center;
  color: var(--verde-medio, #3D6D4A);
  font-weight: 700;
}

.categoria__ingredientes {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}
</style>