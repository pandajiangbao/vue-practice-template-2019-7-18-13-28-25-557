<template>
    <div class>
        <button @click="add">+</button>
        {{number}}
        <button @click="decrease">-</button>
    </div>
</template>

<script>
export default {
    props: {
        clickCallBack: {
            type: Function, 
            required: true 
        }
    },
    data() {
        return {
            number: 0
        };
    },
    methods: {
        add() {
            this.number++
            this.$props.clickCallBack(1);
        },
        decrease() {
            this.number--
            this.$props.clickCallBack(-1);
        }
    }
};
</script>

<style lang="" scoped>
</style>