<template>
    <div class>
        <button @click="add">+</button>
        {{number}}
        <button @click="reduce">-</button>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    data() {
        return {
            number: 0
        };
    },
    computed: mapState([
        "countSum"
    ]),
    watch: {
        countSum: function(newValue) {
            if(newValue===0){
                this.number=0
            }
        }
    },
    methods: {
        add() {
            this.number++;
            this.$store.commit("increment");
        },
        reduce() {
            this.number--;
            this.$store.commit("decrease");
        }
    }
};
</script>

<style lang="" scoped>
</style>