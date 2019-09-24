<template>
  <div class="home">
    <div>{{name}}</div>
    <div v-for="(item,index) in arr" :key="index">
      <div
        @click="clickItem(item,index)"
        class="item"
        :class="{back:index===num}"
      >{{item.name}}---{{item.price}}</div>
    </div>

    <div class="demo">
      <div class="demo1">
        <div v-if="arr1.length>0">
          <div class="left1" v-for="(left,index) in arr1" :key="left.id">
            <div @click="clickItem1(left,index)" class="left">{{left.name}}</div>
          </div>
        </div>
        <div v-else>暂无数据</div>
      </div>

      <div class="demo2">
        <div v-if="arr2.length>0">
          <div class="right1" v-for="(right,index2) in arr2" :key="right.id">
            <div @click="clickItem2(right,index2)" class="right">{{right.name}}</div>
          </div>
        </div>
        <div v-else>暂无数据</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      name: "leibin",
      num: 1,
      arr: [
        {
          name: "苹果",
          price: 20
        },
        {
          name: "香蕉",
          price: 20
        },
        {
          name: "梨子",
          price: 24
        }
      ],

      arr1: [
        {
          id:1,
          name: "sky"
        },
        {
          id:2,
          name: "alex"
        },
        {
          id:3,
          name: "jay"
        }
      ],

      arr2: [
        {
          id:4,
          name: "rose"
        },
        {
          id:5,
          name: "tom"
        },
        {
          id:6,
          name: "jack"
        }
      ]
    };
  },
  methods: {
    clickItem(item, index) {
      this.num = index;
     // alert(item.name);

      console.log(index);
    },
    clickItem1(item, index) {
      this.num = index;
      //alert(item.name);
      this.arr1.splice(index, 1);
      this.arr2.push(item);
      console.log(this.arr1);
    },
    clickItem2(item, index) {
      this.num = index;
      //alert(item.name);
      this.arr2.splice(index, 1);
      this.arr1.push(item);
      console.log(index);
    }
  }
};
</script>
<style  scoped>

.demo1 {
  border: 0.5px solid;
  height: 200px;
  width: 100px;
  float: left;
}

.demo2 {
  border: 0.5px solid;
  height: 200px;
  width: 100px;
  float: left;
  margin-left: 20px;
}

.item {
  border: 1px solid red;
  margin: 10px 0;
}
.back {
  background: skyblue;
}
</style>