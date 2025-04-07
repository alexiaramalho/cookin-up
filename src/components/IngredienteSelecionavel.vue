<script>
import Tag from './Tag.vue';

export default{
    components: {Tag},
    props:{
        ingrediente: { type: String, required: true}
    },
    data(){
        return{
            selecionado: false
        }
    },
    methods: {
        aoClicar(){
            this.selecionado = !this.selecionado

            if (this.selecionado){
                this.$emit('adicionarIngrediente', this.ingrediente);
            }
        }
    },
    emits: ['adicionarIngrediente'] //boa prática ao utilizar eventos personalizados, que ajuda a prevenir erros
}

</script>

<template>
    <button
    class="ingrediente" @click="aoClicar()" :aria-pressed="selecionado">
        <Tag :texto="ingrediente" :ativa="selecionado"/>
    </button>
</template>