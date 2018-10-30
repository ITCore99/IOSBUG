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
              <button @click="handlerClick" ref="btn" >发送</button>
         </div>
    </div>
</template>

<script>
     /**使用第二种解决方案来处理滑动优化滑动的阻尼效果 (也就是使用better-scroll插件)*/
     import BScroll from "better-scroll"
    export default {
        name: "test1",
        data()
        {
          return{
            arr:["hello","hello","hello","hello","hello","hello","hello","hello","hello","hello","hello","hello","hello","hello",],
            text:"",
            BS:"",
          }
        },
        methods: {
          handlerClick()
          {
            this.arr.push(this.text);
            this.text="";
            this.$nextTick(()=>{
              this.BS.refresh();/**用于当DOM结构变化时重新的计算better-scroll*/
              // this.BS.scrollToElement(this.$refs.btn);使用这个也可以定位滚动到所需要元素的位置。
              let distance=this.$refs.main.scrollHeight-this.$refs.main.offsetHeight;
              this.BS.scrollTo(0,-distance,300);
            })
          },
          initScroll()
          {
            this.$nextTick(()=>{
              let main=this.$refs.main;
              this.BS=new BScroll(main,{mouseWheel:true,scrollbar:true});
            })
          }
        },
        mounted()
        {
          this.initScroll()
        }

    }
</script>
<style>
  html {
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
    overflow: hidden;
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
