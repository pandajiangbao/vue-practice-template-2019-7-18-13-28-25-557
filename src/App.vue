<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <input v-model.number="limit" type="text">
        <CounterGroup :limit=limit />
    </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import CounterGroup from "./components/CounterGroup.vue";
export default {
    name: "app",
    data() { 
        return {
            limit:0
        }
    },
    components: {
        HelloWorld,
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
