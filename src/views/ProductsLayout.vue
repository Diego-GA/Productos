<template>
  
    <h1 class="text-center mb-5">Layout Products</h1>

    <div class="grid">

        <ProductComponent
                v-for="producto in getProducts"
                :key="producto.id"
                :producto = "producto"
                :id = "producto.id"/>

    </div>

</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
import { mapGetters } from 'vuex'


export default {

    data(){
        return {
        }
    },
    components: {
        ProductComponent: defineAsyncComponent( () => import('@/views/ProductComponent'))
    },
    computed: {
        ...mapGetters({
            getProducts: 'getProducts'
        })
    }

}

</script>

<style lang="scss" scoped>

.grid{
    display: grid;
    width: 90%;
    margin: 0 auto;
    gap: 30px;
}

@media (min-width: 768px){
    .grid{
        grid-template-columns: repeat(2, 1fr);
        grid-auto-flow: dense;
    }
}


</style>