<template>
    <div class="container">
        <ul class="list-group list-group-horizontal">
        <li class="list-group-item">Articulo</li>
        <li class="list-group-item">Codigo</li>
        <li class="list-group-item">Fecha de vencimiento</li>
        <li class="list-group-item">Promedio precio</li>
        </ul><br>
        <div v-for="dato in Datos" :key="dato.codigo">    
        <ul class="list-group list-group-horizontal">
        <li class="list-group-item">{{dato.articulo}}</li>
        <li class="list-group-item">{{dato.codigo}}</li>
        <li class="list-group-item">{{dato.fechaVencimiento}}</li>
        <li class="list-group-item">Promedio..</li>
        <li class="list-group-item">
            <router-link 
            :to="`detalle/${dato.codigo}`" 
            tag="button"
            >Ver Detalle</router-link></li>
        </ul>
        </div>

    </div>
</template>

<script>
import Axios from 'axios';

export default {
    data(){
        return{
            Datos: []
        };
    },
    mounted(){
        Axios.get("http://179.43.113.170:8082/test/tc/articulos.json")
        .then(aux => (this.Datos = aux.data))
        .catch(err => console.log(err));
    },
}

</script>

<style scoped>

</style>