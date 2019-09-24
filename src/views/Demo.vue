<template>
    <div class="home">
        输入框：<input type="text" v-model="msg">

        <div>
            我是msg：{{msg}}
        </div>
<br>
        <button @click="updateMsg">改变msg</button>
<br>
        <select v-model="selectVal">
            <option >苹果</option>
            <option >香蕉</option>
            <option >橘子</option>

        </select>
    我是下拉框的值：{{selectVal}}
    <br>
    <input type="radio" name="" id="" v-model="sex" value="男">男
    <input type="radio" name="" id="" v-model="sex" value="女">女
    我是单选框的值：{{sex}}
    </div>
   

</template>
<script>
export default {
    name:"home",
    data() {
        return {
            msg:'',
            selectVal:'',
            sex:''
        }
    },
    methods:{
        updateMsg(){
            this.msg=456;
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>