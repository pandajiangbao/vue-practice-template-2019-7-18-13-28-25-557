<template>
    <div class="">
        <Counter v-for="n in limit" :key="n"/>
    </div>
</template>

<script>
import Counter from "./Counter.vue";
export default {
    props:["limit"],
    components:{
        Counter
    },
    data() { 
        return {

        }
    },
    mounted(){
    }
 }
</script>

<style lang="" scoped>
</style>