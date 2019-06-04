<template>
    <div class="home">
        {{this.$store.state.count}} <br>
        {{this.$store.getters.getStateCount}}
        <HelloWorld></HelloWorld>
        <button @click="reductionFun">-----</button>
        <button @click="addFun">+++++</button>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'home',
        data() {
            return {
                msg: 'jun'
            }
        },
        methods:{
            reductionFun(){
                this.$store.dispatch("reductionFun")
            },
            addFun(){
                const n=10;
                this.$store.dispatch("addFun",n)
            },
        },
        components: {
            HelloWorld
        }
    }
</script>
<style lang="less">
    .home {
        background: @e60;
        color: @006;
    }
</style>
