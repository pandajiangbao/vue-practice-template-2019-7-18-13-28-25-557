<template>
    <div id="app">
        <input v-model.number="limit" type="text">
        <CounterGroup :limit="limit" />
    </div>
</template>

<script>
import CounterGroup from "./components/CounterGroup.vue";
export default {
    name: "app",
    data() { 
        return {
            limit:0
        }
    },
    watch:{
        limit:function(){
            this.$store.commit('clear')
        }
    },
    components: {
        CounterGroup
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
