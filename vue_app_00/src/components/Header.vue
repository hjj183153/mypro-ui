<template>
  <header>
    <div class="header">
      <a href="javascript:;" class="header_a1">
        <img src="http://127.0.0.1:3000/img/index/logo.png" alt="美食天下">
      </a>
      <a href="javascript:;" class="header_a2">
        <img src="http://127.0.0.1:3000/img/index/down.png" alt="">
      </a>
    </div>
  </header>
</template>
<script>
export default {
  data(){
    return {

    }
  }
}
</script>
<style scoped>
*{padding:0;margin:0;}
a{
  text-decoration: none;
  color:#5e5e5c;
}
img{
  vertical-align: middle;
  border:none;
}
ul{list-style:none;}
.header{
  height:50px;
  position: relative;
}
.header_a1{
  float: left;
  height:22px;
  padding:13px 10px 14px 20px;
}
.header_a1 img{
  float: left;
  height:22px;
}
.header_a2{
  float:right;
  height:26px;
  padding:12px 20px 12px 10px;
}
.header_a2 img{
  float:right;
  height:26px;
}
</style>
