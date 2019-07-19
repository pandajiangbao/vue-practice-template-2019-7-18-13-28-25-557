<template>
    <div class="">
        <Counter :click-call-back="ParentTest" v-for="n in limit" :key="n"/>
        <div>{{CounterSum}}</div>
    </div>
</template>

<script>
import Counter from "./Counter.vue";
// import CounterSum from "./CounterSum.vue";

export default {
    props:["limit"],
    components:{
        Counter,
    },
    data() { 
        return {
            CounterSum:0
        }
    },
    methods:{
        ParentTest(val){
            this.CounterSum+=val
        }
    }
 }
</script>

<style lang="" scoped>
</style>