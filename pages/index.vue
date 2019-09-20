<template>
  <div class="container">
    <Header/>
    <section class="top">
        <img src="~/assets/logo.svg" alt="logo" class="logo">
        <div class="date">創立148周年記念開成祭<br><br>開催日時<br>2019.09.21(土)09:00-17:00<br>2019.09.22(日)09:00-16:30</div>
    </section>
    <section class="ontheday">
      <div class="day-desc">
        <p>開成祭へようこそ！</p>
        <p>↓混雑している参団、現在のステージ企画進行状況、などを随時更新しております。</p>
        <nuxt-link to="/realtime"><div class="buttons">開成祭リアルタイム</div></nuxt-link>
        <p>↓当日実施されている大企画に関する情報が掲載されています。</p>
        <nuxt-link to="/today"><div class="buttons">当日のご注意</div></nuxt-link>
      </div>
    </section>
    <section class="menu">
      <div class="flex-box">
        <nuxt-link to="information">
          <img :src="img1" class="box-img">
        </nuxt-link>
<!--        <nuxt-link to="map">
          <img :src="img2" class="box-img">
        </nuxt-link>  -->
        <nuxt-link to="/timetable">
          <img :src="img4" class="box-img">
        </nuxt-link>
        <nuxt-link to="/sandan">
          <img :src="img3" class="box-img">
        </nuxt-link>
        <nuxt-link to="foodmenu">
          <img :src="img6" class="box-img">
        </nuxt-link>

        <nuxt-link to="feature">
          <img :src="img5" class="box-img">
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
  import VueAnalytics from 'vue-analytics'

import access from '~/assets/access.svg';
import map from '~/assets/map.svg';
import sandan from '~/assets/sandan.svg';
import timetable from '~/assets/timetable.svg';
import feature from '~/assets/feature.svg';
import foodmenu from '~/assets/foodmenu.svg';


import Header from '~/components/Myheader.vue';
import Footer from '~/components/Myfooter.vue';


  export default {
    head: {
      script: [{
        type: 'application/ld+json'
      }],

      VueAnalytics:{
        id: 'UA-147087049-1'
      }
    },
  components: {
    Header,
    Footer,
  },
  data(){
    return{
      img1: access,
      img2: map,
      img3: sandan,
      img4: timetable,
      img5: feature,
      img6: foodmenu,

    }
  },
}

</script>

<style>
  a{
    color: #ccbd14
  }

  .container{
    background-color: #411445;
  }
  .top{
    padding:33vh 4vw 18vh;
    display:flex;
    justify-content:space-between;
  }
  .logo{
    width:40vw;
  }
  .date{
    margin-top: 30px;
    min-width:300px;
    font-style: normal;
    font-weight: normal;
    font-size: 2vw;
    color: white;
    align-items: center;
    text-align: center;
    vertical-align:bottom;
    letter-spacing: 0.2em;
    align-self:center;
  }

  .ontheday{
    color: white;
    margin: 0 20px;
  }
  .day-desc{
    padding: 20px 10px;
    margin: 10px 0;
    background: rgba(226, 226, 226, 0.3);
    border: rgba(226, 226, 226, 1) double 3px;
  }
  .day-desc >p{
    padding: 5px 0;
  }



  .flex-box{
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    padding:0 1vw 30px;

  }
  .flex-box a{
    margin:1vw;
  }
  .box-img{
    width:47vw;
  }
  @media screen and (min-width: 900px){
    .box-img{
      width: 30vw;
    }
  }
  @media screen and (min-width: 600px) and (max-width: 800px) {
    .top{
      flex-wrap:wrap;
      justify-content:center;
    }
    .logo{
      width:80vw;
    }
    .date{
      font-size:4.5vw;
      padding:0vh 0 0 0;
    }
  }
  @media screen and (max-width: 600px){
    .top{
      flex-wrap:wrap;
      justify-content:center;
    }
    .logo{
      width:80vw;
    }
    .date{
      font-size:4.5vw;
      padding:0vh 0 0 0;
    }
    .flex-box a{
      margin:2vw 0;
    }
    .box-img{
      width:92vw;
    }
    #img3{
      order:4;
    }
    #img4{
      order:3;
    }
    #img5{
      order:5;
    }
  }
</style>
