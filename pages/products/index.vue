<template>
    <div>
        <div class="grid sm:grid-cols-4 gap-5 grid-cols-2">
            <div v-for="p in products">
                <ProductCard :product="p"/>

            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout:'products'
})

const {data:products} = await useFetch('https://fakestoreapi.com/products')

useHead({
    title:'Martins Store | Products',
    meta:[
        {
            name:'description',content:'Martins Store | Products'
        }
    ]
})

</script>

<style  scoped>

</style>