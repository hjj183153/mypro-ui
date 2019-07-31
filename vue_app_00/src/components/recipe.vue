<template>
  <div>
    <!-- <mt-header fixed >
      固定在顶部
    </mt-header> -->
    <myHeader class="fix"></myHeader>
      <div class="nav2 tab3 fix">
        <a href="javascript:;" title="菜谱分类" class="on">
          <span>菜谱分类</span>
        </a>
        <a href="javascript:;" title="家常菜">
          <span>家常菜</span>
        </a>
        <a href="javascript:;" title="食材大全">
          <span>食材大全</span>
        </a>
      </div>
    <div class="contain">
      <!-- <mt-navbar v-model="seleted">
        <mt-tab-item id="1">option1</mt-tab-item>
        <mt-tab-item id="2">option2</mt-tab-item>
        <mt-tab-item id="3">option3</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <mt-cell v-for="n in 5" :key="n" :title="'content'+n">111</mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell v-for="n in 4" :key="n" :title="'content'+n">111</mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <mt-cell v-for="n in 3" :key="n" :title="'content'+n">111</mt-cell>
        </mt-tab-container-item>
      </mt-tab-container> -->
      
      <div style="height:500px;">
        <div class="view_right" style="height:577px">
          <div class="tab_right_item" id="item0" style="padding:20px 0 0 0;">
            <div class="hot42" style="width:100%">
              <ul>
                <li>
                  <a href="javascript:;">
                    <i></i>
                    <p>最新推荐</p>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <i></i>
                    <p>一周热门</p>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <i></i>
                    <p>全部菜谱</p>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <i></i>
                    <p>最受欢迎</p>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <i></i>
                    <p>人气菜谱</p>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <i></i>
                    <p>明星菜谱</p>
                  </a>
                </li>
              </ul>
            </div>
            <div class="b_hr"></div>
            <div class="tag_img">
              <a href="javascript:;">
                <img src="http://127.0.0.1:3000/img/index/zaocan.png" alt="">
                <span></span>
              </a>
            </div>
            <div class="tag_img">
              <a href="javascript:;">
                <img src="http://127.0.0.1:3000/img/index/zaocan.png" alt="">
                <span></span>
              </a>
            </div>
            <div class="tag_img">
              <a href="javascript:;">
                <img src="http://127.0.0.1:3000/img/index/zaocan.png" alt="">
                <span></span>
              </a>
            </div>
            <div class="tag_img">
              <a href="javascript:;">
                <img src="http://127.0.0.1:3000/img/index/zaocan.png" alt="">
                <span></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import myHeader from './Header.vue';
import myFooter from './Footer.vue';
export default {
components:{myHeader,myFooter},
data(){
    return {

    }
  }
}
</script>
<style >
/* .fix{
  position: fixed;
  z-index: 1;
}
.contain{
  z-index:-1;
} */
.nav2{
  height: 40px;
  border-top:1px solid #eee;
  border-bottom:1px solid #ff6767;
  background: #f3f3f3;
  width:100%;
}
.nav2:before{
  content:"";
  display:table;
}
.nav2:after{
  content:"";
  display:table;
  clear:both;
}
.nav2 a{
  width:33.3%;
  color:#333;
  font-size:16px;
  float: left;
  line-height: 40px;
  text-align: center;
}
.nav2 a span{
  display: inline-block;
  margin:auto;
  padding:0 3px;
  
}
/*通过on类名控制a标签下划线*/ 
.nav2 a.on span{
  color:#ff6767;
  border-bottom:2px solid #ff6767;
  height: 38px;
}
.view_right{
  position:fixed;
  width:100%;
  top:92px;
  right:0;
  overflow:hidden;
}
/*适用于下面所有div布局*/ 
.tag_right_item>div{
  text-align:center;
  display:inline-block;
  font-size: 12px;
  width:33.3%;
  vertical-align: middle;
  margin-bottom:20px;
}
.hot42 li{
  width:33.3%;
  float:left;
}
.hot42 li a{
  display: block;
  padding-top:15px;
  text-align:center;
  color:#333;
}
.hot42 li a i{
  display: block;
  width: 30px;
  height: 30px;
  margin: 0 auto 5px;
  background: url(http://127.0.0.1:3000/img/index/ok.png) no-repeat;
  background-size: 120px auto;
}
.hot42 li:nth-child(2) a i{
  background-position:-90px -30px;
}
.hot42 li:nth-child(3) a i{
  background-position:-60px 0;
}
.hot42 li:nth-child(4) a i{
  background-position:-90px 0;
}
.hot42 li:nth-child(5) a i{
  background-position:0 -30px;
}
.hot42 li:nth-child(6) a i{
  background-position:-30px -30px;
}
div.b_hr{
  height: 20px;
  width:100%;
}
.tag_img img{
  width: 50px;
  height:50px;
  border-radius: 8px;
  display: inline-block;
}



</style>
