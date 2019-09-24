<template>
    <div>
        <div>
            {{msg}}
        </div>
        <button @click="sendData">传值给父组件</button>
    </div>
</template>

<script>
    export default {
        name:'goods',
        data(){
            return{
                msg:'我是商品组件',
                name:'我是子组件的name'
            }
        },
        methods:{
            sendData(){
                //分发事件  第一个参数：事件名称 第二个参数：分发的数据
                this.$emit('sendData',this.name)
           }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>