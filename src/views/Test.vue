<template>
    <div>
        输入框：
        <input type="text" v-model="msg"/>
        <br/>
        <button @click="clickItem">改变名字</button>
        <br>
        计算属性：{{comMsg}};
        <br/>
        过滤器：<div>{{price | toMoney}}</div>
        <table class="table">
             
        </table>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                msg:"",
                price:10,
                obj:{
                    name:"jack"
                }
            };
        },
        filters:{
            toMoney(data){
                return '￥'+data;
            }
        },
        methods:{
            clickItem(){
                this.obj.name="tom";
            }
        },

        //监听某个数据的变化
        watch:{
            msg(val,oldVal){
                //根据逻辑做操作
                console.log(val);
                console.log(oldVal);

            },
            "obj.name":{
                handler(val,oldVal){
                    //根据逻辑做操作
                console.log(val);
                console.log(oldVal);
                },
                deep:true
            }
        },
        computed:{
            comMsg(){
                return this.msg+'abc'
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>