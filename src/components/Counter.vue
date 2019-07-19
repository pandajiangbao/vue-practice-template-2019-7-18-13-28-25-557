<template>
    <div class="">
        <button @click="add">+</button>{{number}}<button @click="decrease">-</button>
    </div>
</template>

<script>
export default {
    data() { 
        return {
            number:0
        }
    },
    methods:{
        add(){
            this.number++
        },
        decrease(){
            this.number--
        }
    }
 }
</script>

<style lang="" scoped>
</style>