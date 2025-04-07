export function itensDeLista1EstaoEmLista2(lista1 : unknown[], lista2 : unknown[]){
    return lista1.every((itemLista1) => lista2.includes(itemLista1) ) //every retornara verdadeiro se todos os itens da lista1 forem verdadeiros
}