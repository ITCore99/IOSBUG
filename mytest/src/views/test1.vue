<template>
    <div class="mainContain">
         <header class="header">我是头部</header>
         <div class="main" ref="main">
           <ul>
             <li v-for="item in this.arr">{{item}}</li>
           </ul>
         </div>
         <div class="footer">
              <input type="text" v-model="text" @keyup.enter="handlerClick"/>
              <button @click="handlerClick" >发送</button>
              <button @click="handlerJump"  >跳转</button>
         </div>
    </div>
</template>

<script>
     /**使用第一种解决方案就是使用原生的来进行处理滑动,虽然可以解决问题但是没有滑动阻尼的效果，下面请看解决方法二*/
    /***解决移动端iso端 input输入框fixed定位到底部时出现的bug,会自动将fixed定位变为absolute定位如果页面变大的话就会出现输入框跟随着页面跑的情况,所以要解决的话首先就不能让页面变大所以就要使用overflow：hidden*/
    export default {
        name: "test1",
        data()
        {
          return{
            arr:["hello","hello","hello","hello","hello","hello","hello","hello","hello","hello","hello","hello","hello","hello",],
            text:""
          }
        },
        methods: {
          handlerClick()
          {
            this.arr.push(this.text);
            this.text="";
            this.$nextTick(()=>{
              let main=this.$refs.main;
              main.scrollTop=main.scrollHeight;
            })
          },
          handlerJump()
          {
            this.$router.push("/index")
          }
        },
        mounted()
        {
          document.documentElement.style.overflow="";
          document.body.style.overflow="";
          document.getElementById("app").style.overflow=""
        },
        beforeDestroy() /**页面卸载之前*/
        {
          document.documentElement.style.overflow="auto";
          document.body.style.overflow="auto";
          document.getElementById("app").style.overflow="auto"
        }
    }
</script>
<style>
  html {  /**注意这里我们设置HTML和body app的设置可能导致其他的页面出现问题导致其他的页面也不鞥刷新所以要到钩子函数中进行解决出现的问题*/
    height: 100%;
    overflow: hidden;
  }
  body{
    height:100%;
    overflow: hidden;
  }
  #app
  {
    height: 100%;
    overflow: hidden;
  }
</style>
<style scoped lang="scss">
.mainContain {
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: #f1f1f1f1;
  .header
  {
    height:45px;
    line-height: 45px;
    background: #f00;
    color:#fff;
    text-align: center;
  }
  .main
  {
    flex:1;
    overflow-y: scroll;
    -webkit-overflow-scrolling:touch;                                                  /**移动端必须要写不然会很卡*/
    background: goldenrod;

    li{
      list-style: none;
      height: 45px;
      line-height: 45px;
      color:#fff;
    }
  }
  .footer
  {
    display: flex;
    justify-content: space-between;
    input
    {
      flex: 1;  /**让其填充满整个剩余的空间*/
      -webkit-appearance:none; /**去掉移动端出现的表单元素的默认样式*/
      height: 30px;
      line-height:30px;
      padding:0 10px;
      border: 1px solid #d7d7d7;
      outline: none;
    }
    button:
    {
      width:80px;
      height:45px;
      outline:none
    }
  }
}
</style>
