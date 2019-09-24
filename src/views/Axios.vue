<template>
  <div>
    <div class="container">
      <div class="row">
        <table class="table table-hover table-bordered">
          <caption class="h2 text-warning text-center">购物车</caption>
          <tr>
            <td>
              全选
              <input type="checkbox" v-model="checkAll" @change="change" />
            </td>
            <td>商品</td>
            <td>单价</td>
            <td>数量</td>
            <td>小计</td>
            <td>操作</td>
          </tr>
          <tr v-for="(product,index) in products" :key="index">
            <td>
              <input type="checkbox" v-model="product.isSelected" @change="checkOne(product)" />
            </td>
            <td>
              <img :src="product.productCover" :title="product.productName" class="image" />
              {{product.productInfo}}
            </td>
            <td>{{product.productPrice}}</td>
            <td>
              <!-- .number是v-model的修饰符 意思是吧输入框中的数据变成数字类型 -->
              <input type="number" v-model.number="product.productCount" min="1" />
            </td>
            <td>
              <!-- 过滤器 原数据不变的情况下 只改变现实效果 管道符 -->
              {{product.productCount * product.productPrice | toFixed(2)}}
            </td>
            <td>
              <button class="btn btn-danger" @click="remove(product)">删除</button>
            </td>
          </tr>
          <tr>
            <td colspan="6">总价格：{{sum | toFixed(2)}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      products: [],
      checkAll: false //是否全选
    };
  },
  filters: {
    toFixed(input, param1) {
      //保留小数后多少位
      return "￥" + input.toFixed(param1);
    }
  },

  //生命周期函数 dom 节点全部挂载完成之后，通常我们用来发送请求
  mounted() {
    //then 方法代表请求成功 catch代表失败
    axios
      .get("api/getCarts")
      .then(response => {
        let res = response.data;
        if (res.code === 200) {
            this.products = res.data;
          this.checkOne();
          this.carts = res.data;
        }
        //console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },

  methods: {
    checkOne(item) {
      //根据下面点击的结果控制上面全选的结果
      this.checkAll = this.products.every(item => {
        return item.isSelected === true;
      });
    },
    change() {
      //根据当前自己的状态确定其他人的状态 实现全选和反选
      this.products.map(item => {
        item.isSelected = this.checkAll;
      });
    },
    remove(product) {
      //p代表的是当前点击的这一项[xxx,ooo,qqq,ppp,p]
      this.products = this.products.filter(item => {
        return item !== product;
      });
    },
    getData() {
      //初始化方法
      //Promise 解决回调问题
      axios
        .get("api/getCarts")
        .then(res => {
          //success
          this.products = res.data;
          this.checkOne();
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  computed: {
    sum() {
      let sum = 0;
      this.products.map(item => {
        if (item.isSelected === true) {
          sum += item.productPrice * item.productCount;
        }
      });
      return sum;
    }
  }
};
</script>
<style lang="stylus" scoped></style>