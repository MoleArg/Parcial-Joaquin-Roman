<template>
    <div class="container">
        <img :src="Dato.foto" alt="imagen">
        <div v-if="Dato.esPromocion === true" class="promocion">
            <h4>{{Dato.articulo}}</h4>
        </div>
        <div v-else class="nopromocion">
            <h4>{{Dato.articulo}}</h4>
        </div>
        <p>Codigo: {{Dato.codigo}}</p>
        <p>Rubro: {{Dato.rubro}}</p>
        <div v-if="Dato.esPromocion === true">
            <p>Es promomocion: Si</p>
        </div>
        <div v-else><p>Es promocion: No</p></div>
        <p>Fecha de vencimiento: {{Dato.fechaVencimiento}}</p>
        <div>
            <p>Precios relevados</p>
            <li v-for="precio in Dato.preciosRelevados" :key="precio">{{precio}}</li>
        </div><br>
        <p>Promedio: {{ObtenerPromedio(Dato.preciosRelevados)}}</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            Dato: [],
            //Promedio: null
        };
    },
    mounted(){
        this.ObtenerProducto();
        //this.ObtenerPromedio();
    },
    methods:{
        async ObtenerProducto(){
            const buscado = this.$route.params.id;
            const res = await fetch("http://179.43.113.170:8082/test/tc/articulos.json");
            const resJson = await res.json();
            this.Dato = await resJson.find(aux => aux.codigo == buscado);
        },
        ObtenerPromedio: function(aux){
            let max=0,i=0;
            for (i in aux){
                max += aux[i];
                i++;
            }
            return max/i;
        }
    }
}        
</script>

<style scoped>
.promocion {
  color: green;
}
.nopromocion {
  color: red;
}
</style>