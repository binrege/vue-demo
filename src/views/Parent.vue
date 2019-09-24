// 子组件绑定到父组件
//1.引入子组件  2.注册子组件  3.使用子组件

//父组件传递信息到子组件
//1.动态绑定数据<son :msg='msg'></son>
//2.子组件接受props:{msg:{}}

//子组件传递数据到父组件
//1.定义分发事件 <button @click="sendData">传值给父组件</button>   
              sendData(){
                //分发事件  第一个参数：事件名称 第二个参数：分发的数据
                this.$emit('sendData',this.name)
           }
//2. <goods @sendData="sendData"></goods>  
    sendData(data) {
      console.log(data);
      this.name=data;
    }
</style>
<template>
  <div>
    <!-- 3.使用子组件 -->
    <!-- 
        <son ></son>
        <goods></goods> 
    -->
    <!-- 1.动态绑定数据 -->
    <son :msg="msg"></son>

    <goods @sendData="sendData"></goods>
    <div>
      我是子组件分发事件的name：{{name}}
    </div>
  </div>
</template>

<script>
//1.引入子组件
import son from "../components/parent/Son";
import goods from "../components/parent/Goods";
export default {
  name: "parent",
  //2.注册子组件
  components: {
    //son: son
    son,
    goods
  },
  data() {
    return {
      msg: "我是父组件的信息",
      name:''
    };
  },
  methods: {
    sendData(data) {
      console.log(data);
      this.name=data;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>