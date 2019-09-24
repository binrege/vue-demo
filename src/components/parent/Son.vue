<template>
  <div>
    <div>{{sonmsg}}</div>
    <div>{{msg}}</div>
  </div>
</template>

<script>
export default {
  name: "son",
  data() {
    return {
      sonmsg: "我是子组件 "
    };
  },
  //   2.接收父组件传递过来的msg
  props: {
    msg: {
      type: [String, Number],
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
</style>