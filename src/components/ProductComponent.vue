<template>
  
    <div class="producto shadow" :class="'element_' + id">

        <div class="producto__numero d-flex justify-content-center align-items-center">
            <span> {{ producto.voto }} </span>
        </div>

        <div class="producto__info">

            <h3 class="producto__nombre">{{ producto.producto }}</h3>

            <p class="producto__descripcion">
                {{ shortDescription }}
            </p>
        </div>

        <div class="producto__boton d-flex justify-content-center align-items-center">
            <button @click="votar" class="btn btn-light w-75 font-weight-bold">Votar</button>
        </div>

    </div>

</template>

<script>

export default {
    props: {
        producto: {
            type: Object,
            required: true,
        },
        id: {
            required: true,
        }
    },
    computed: {

        shortDescription(){
            return ( this.producto.descripcion.length > 62 )? this.producto.descripcion.substring(0,62) + '...' : this.producto.descripcion 
        },
    },
    methods: {
        votar(){
            this.$store.commit('votacion', this.id)
        }
    }
}

</script>




<style lang="scss" scoped>

.producto{
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    padding: 5px;   
    border: 3px solid gainsboro;
    border-radius: 8px;
    gap: 15px;

    &__numero{
        grid-column: 1 / 4;
        border-radius: 8px;
        margin: 5px;
        background-color: red;
        span{
            font-weight: bold;
            font-size: 30px;
        }
    }

    &__info{
        grid-column: 4 / 10;
        // height: 130px;
        padding: 15px 0;
    }

    &__nombre{
        font-size: 20px;
        font-weight: bold;
        margin: 0 0 10px 0;
    }

    &__boton{
        grid-column: 10 / 13;
    }
}

.element_0, .element_3, .element_4, .element_7{
    .producto__numero{
        background-color: plum;
    }
}
.element_1, .element_5{
    .producto__numero{
        background-color: skyblue;
    }
}


.element_0, .element_1, .element_2, .element_3{
    grid-column: 1 / 2;
}

</style>