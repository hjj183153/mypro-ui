<template>
  <div>
    <myHeader></myHeader>
    <!-- 顶部链接导航 -->
    <div class="nav1">
      <a href="javascript:;" title="菜谱">菜谱</a>
      <a href="javascript:;" title="食材">食材</a>
      <a href="javascript:;" title="健康">健康</a>
      <a href="javascript:;" title="话题">话题</a>
      <a href="javascript:;" title="专题">专题</a>
    </div>
    <div class="searchbox">
      <div>
        <input type="text" id="wap_a_search" placeholder="搜索菜谱、食材或菜单...">
        <a href="javascript:;" id="wap_a_search_btn">
          <span>搜索</span>
        </a>
      </div>
    </div>
    <!-- 轮播 -->
    <div class="carousel_swipe">
      <mt-swipe :auto="4000" @change="handleChange" style="width:375px; height:187.5px;" >
        <mt-swipe-item>
          <a href="javascript:;">
            <img src="http://127.0.0.1:3000/img/index/carousel_1.jpg">
          </a>
        </mt-swipe-item>
        <mt-swipe-item>
          <a href="javascript:;">
            <img src="http://127.0.0.1:3000/img/index/carousel_2.jpg">
          </a>
        </mt-swipe-item>
        <mt-swipe-item>
          <a href="javascript:;">
            <img src="http://127.0.0.1:3000/img/index/carousel_3.jpg">
          </a>
        </mt-swipe-item>
        <mt-swipe-item>
          <a href="javascript:;">
            <img src="http://127.0.0.1:3000/img/index/carousel_4.jpg">
          </a>
        </mt-swipe-item>
        <mt-swipe-item>
          <a href="javascript:;">
            <img src="http://127.0.0.1:3000/img/index/carousel_5.jpg">
          </a>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!--二级导航 -->
    <div class="hot41">
      <ul>
        <li>
          <a href="javascript:;">
            <i></i>
            <span>新菜谱</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <i></i>
            <span>人气菜谱</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <i></i>
            <span>菜谱分类</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <i></i>
            <span>菜单</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <i></i>
            <span>家常菜</span>
          </a>
        </li>
      </ul>
    </div>
    <!-- 菜单专题列表 -->
    <div class="timeline">
      <ul id="timeline" 
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
      >
        <li class="t2" v-for="item in list" :key="item">
          <p style="display:none">{{item}}</p>
          <a href="javascript:;">
            <h2>焖茄子：营养美味又下饭，一盘不嫌多！</h2>
            <ul class="t2_ul">
              <li>
                <img src="http://127.0.0.1:3000/img/index/itemlist1_1.jpg">
              </li>
              <li>
                <img src="http://127.0.0.1:3000/img/index/itemlist1_2.jpg">
              </li>
              <li>
                <img src="http://127.0.0.1:3000/img/index/itemlist1_3.jpg">
              </li>
              <li>
                <img src="http://127.0.0.1:3000/img/index/itemlist1_4.jpg">
              </li>
            </ul>
            <span>专题</span>
          </a>
        </li>

        <!-- <li class="t1">
          <a href="javascript:;">
            <div>
              <img src="" alt="">
            </div>
            <div>
              <p></p>
              <p></p>
              <p></p> 
            </div>
          </a>
        </li> -->
        <li class="t1">
          <a href="javascript:;">
            <div>
              <b>
              <img src="http://127.0.0.1:3000/img/index/itemlist1_4.jpg" alt="">
              </b>
            </div>
            <div class="hot_desc">
              <h2>一周热门</h2>
              <p>最新最热的菜都在这，别错过~</p>
              <p>菜谱排行</p> 
            </div>
          </a>
        </li>
        <!-- <li class="t3">
          <a href="javascript:;">
            <h2></h2>
            <div>
              <img src="" alt="">
            </div>
            <p></p>
          </a>
        </li> -->
        <li class="t3">
          <a href="javascript:;">
            <h2>孜然牙签肉</h2>
            <div>
              <b>
                <img src="http://127.0.0.1:3000/img/index/itemlist3_1.jpg" alt="">
              </b>
            </div>
            <p>菜谱</p>
          </a>
        </li>
        <li class="t3">
          <a href="javascript:;">
            <h2>孜然牙签肉</h2>
            <div>
              <b>
                <img src="http://127.0.0.1:3000/img/index/itemlist3_1.jpg" alt="">
              </b>
            </div>
            <p>菜谱</p>
          </a>
        </li>
      </ul>
    </div>
    <!-- 引入脚组件 -->
    <myFooter></myFooter>
  </div>
</template>
<script>
//引入头组件
import myHeader from './Header.vue';
import myFooter from './Footer.vue';
export default {
  components:{myHeader,myFooter},
  data(){
    return {
      // list:[0,1]
      list:[0,1,2,3,4,5,6,7,8,9]
    }
  },
  methods:{
    handleChange(index){
      console.log(index);
    },
    loadMore(){
      this.loading=true;
      setTimeout(()=>{
        let last=this.list[this.list.length-1];
        for(let i=1;i<10;i++){
          this.list.push(last+i);
        }
        this.loading=false;
      },2500)
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
.nav1{
  height:40px;
  border-top:1px solid #eee;
  border-bottom:1px solid #ff6767;
  line-height:26px;
  /* text-align: center; */
  background:#f3f3f3;
}
.nav1 a{
  color:#333;
  font-size:16px;
  float:left;
  width:20%;
  line-height:40px;
  /* text-align:center; */
}
.searchbox{
  padding: 10px;
}
.searchbox>div{
  height: 44px;
  line-height:44px;
  background:#fff;
  border:1px solid #bbb;
  border-radius: 3px;
  padding-right:65px;
  position: relative;
  overflow: hidden;
}
.searchbox>div>input#wap_a_search{
  border:none;
  float:left;
  width:100%;
  height:44px;
  font-size: 15px;
  text-indent: 10px;
}
#wap_a_search_btn{
  float:right;
  width:70px;
  height:100%;
  position: absolute;
  top:0px;
  right:0px;
  color:#333;
  font-size:15px;
  
}
#wap_a_search_btn>span{
  height: 19px;
  line-height: 19px;
  width:100%;
  padding:0 15px 0 17px;
  border-left:1px solid #bbb;
}
.carousel_swipe .mint-swipe-item img{
  width:375px;
}
.hot41{
  overflow: hidden;
}
.hot41 ul:before{
  content:"";
  display:table;
}
.hot41 ul:after{
  content:"";
  display:table;
  clear:both;
}
.hot41 li{
  width:20%;
  float:left;
}
.hot41>ul>li>a{
  display:block;
  padding:15px 0;
  /* text-align:center; */
  font-size:12px;
  color:#333;
}
.hot41>ul>li>a>i{
  display:block;
  background-image: url(http://127.0.0.1:3000/img/index/icon3.png);
  width:40px;
  height:40px;
  margin:0 auto;
  border-radius: 50%;
  background-size: 200px 40px;
  background-position: 0 0;
}
.hot41>ul>li:nth-child(2) i{
  background-position: -40px 0;
}
.hot41>ul>li:nth-child(3) i{
  background-position: -80px 0;
}
.hot41>ul>li:nth-child(4) i{
  background-position: -120px 0;
}
.hot41>ul>li:nth-child(5) i{
  background-position: -160px 0;
}
/*底部详细列表*/
.timeline .t2{
  padding-left:20px;
  
}
.timeline a::before{
  content:"";
  display:table;
}
.timeline a::after{
  content:"";
  display:table;
  clear:both;
}
.timeline .t2 a{
  padding:10px 15px 10px 0;

}
.timeline a{
  color:#888;
  display:block;
  border-top:1px solid #ccc;
  
}
/*为最后一个li设置border-bottom*/ 
.timeline ul>li:last-child a{
  border-bottom:1px solid #ccc;
}
.timeline .t2 a>h2{
  padding:5px 0 10px;
}
.timeline h2{
  font-size: 18px;
  color:#111;
  overflow:hidden;
  text-overflow: hidden;
  white-space:nowrap;
  line-height:18px;
  font-weight: 400;
}
.timeline .t2_ul>li{
  float: left;
  width:25%;
}
.timeline .t2_ul>li>img{
  width:80px;
  height:80px;
}
.timeline .t2 a>span{
  display:block;
  text-align:left;
  font-size:12px;
  line-height:100%;
  padding:10px 0 0 0;
  clear:both;
}
/*t1类*/ 
.timeline .t1{
  padding-left:20px;
}
.timeline .t1 a{
  padding:10px 15px 5px 0;
}
.timeline .t1 a>div:first-child{
  float:left;
  width:25%;
  margin:0 5px 0 0;
}
.timeline .t1 a>div:first-child>b{
  margin:0 5px 0 0;
  display:block;
  height:0;
  overflow: hidden;
  padding-bottom:100%;
}
.timeline .t1 img{
  display:block;
  width:100%;
}
/*段落样式*/ 
.timeline div.hot_desc{
  text-align:left;

}
.timeline div.hot_desc>p:nth-child(2){
  font-size:14px;
  padding:3% 5px 3% 0;
  height:1em;
}
.timeline div.hot_desc>p:nth-child(3){
  font-size:12px;
  padding:2% 0;
}
/*t3类*/ 
.timeline .t3{
  padding-left:20px;
}
.timeline .t3 a{
  padding:10px 20px 10px 0;
}
.timeline .t3 h2{
  padding:0 0 10px 0;
  text-align: left;
}
.timeline .t3 div{
  width:100%;
}
.timeline .t3 div>b>img{
  width:100%;
}
.timeline .t3 a p{
  font-size:12px;
  text-align:left;
  padding:10px 0 0 0;
}





</style>
