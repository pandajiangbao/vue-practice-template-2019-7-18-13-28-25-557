<template>
    <div class>
        <Counter v-for="n in limit" :key="n" />
        <div>{{countSum}}</div>
    </div>
</template>

<script>
import Counter from "./Counter.vue";
import { mapState } from "vuex";
export default {
    props: ["limit"],
    components: {
        Counter
    },
    computed: mapState(["countSum"]),
    methods: {
    }
};
</script>

<style lang="" scoped>
</style>