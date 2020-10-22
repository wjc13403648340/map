<template>
  <div id="app">
    <div class="app-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name:'app'
};
</script>

<style lang="scss">
@import "./assets/css/reset.css";

* {
box-sizing: content-box;
-moz-box-sizing: inherit;
-webkit-box-sizing: inherit;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
  >.app-main{
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
}



 ::-webkit-scrollbar {/*滚动条整体样式*/
    width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 10px;
}
::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 5px;
    // -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.2);
}
::-webkit-scrollbar-track {/*滚动条里面轨道*/
    // -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 0;
    background: rgba(0,0,0,0.1);
}


</style>
