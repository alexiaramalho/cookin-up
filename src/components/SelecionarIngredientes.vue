<script lang="ts">
import { obterCategorias } from "@/http";
import type ICategoria from "@/interfaces/ICategoria";
import CardCategoria from "./CardCategoria.vue";
import BotaoPrincipal from "./BotaoPrincipal.vue";

export default {
  name: 'SelecionarIngredientes',
  data(vm) {
    return {
      categorias: [] as ICategoria[],
    };
  },

  async created() {
    this.categorias = await obterCategorias();
  },
  components: { CardCategoria, BotaoPrincipal },
  emits:['adicionarIngrediente', 'removerIngrediente', 'buscaReceitas']
};
</script>

<template>
  <section class="selecionar-ingredientes">
    <h1 class="cabecalho titulo-ingredientes">Ingredientes</h1>
    <p class="paragrafo-lg instrucoes">
      Selecione abaixo os ingredientes que você quer usar nesta receita:
    </p>
    <ul class="categorias">
      <!-- v-for vai percorrer a array e criar uma variavel 'categoria' para cada item. :key irá atribuir um key unico para cada item -->
      <li v-for="categoria in categorias" :key="categoria.nome"> 
        <!-- passando o valor da variavel "categoria" para a prop :categoria -->
        <CardCategoria :categoria="categoria" @adicionar-ingrediente="$emit('adicionarIngrediente', $event)" @remover-ingrediente="$emit('removerIngrediente', $event)"/>
      </li>
    </ul>

    <ul class="categorias">
      <p class="paragrafo dica">
        *Atenção: consideramos que você tem em casa sal, pimenta e água.
      </p>
    </ul>
  </section>
  <BotaoPrincipal texto="Buscar receitas!" @click="$emit('buscarReceitas')"/>
</template>

<style scoped>
.selecionar-ingredientes {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.titulo-ingredientes {
  color: var(--verde-medio, #3d6d4a);
  display: block;
  margin-bottom: 1.5rem;
}

.instrucoes {
  margin-bottom: 2rem;
}

.categorias {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.dica {
  align-self: flex-start;
  margin-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
  .dica {
    margin-bottom: 2.5rem;
  }
}
</style>
