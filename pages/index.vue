<template>
  <div class="container">
    <Header/>
    <section class="top">
        <img src="~/assets/logo.svg" alt="logo" class="logo">
        <div class="date">創立148周年記念開成祭<br><br>開催日時<br>2019.09.21(土)09:00-17:00<br>2019.09.22(日)09:00-16:30</div>
    </section>
    <!---
    <section class="ontheday">
      <div class="day-desc">
        <p>開成祭へようこそ！</p>
        <p>↓混雑している参団、現在のステージ企画進行状況、などを随時更新しております。</p>
        <nuxt-link to="/realtime"><div class="buttons">開成祭リアルタイム</div></nuxt-link>
        <p>↓当日実施されている大企画に関する情報が掲載されています。</p>
        <nuxt-link to="/today"><div class="buttons">当日のご注意</div></nuxt-link>
      </div>
    </section>--->
    <section class="ontheday">
      <div class="day-desc">
        <p style="font-size: 24px;text-align: center; font-weight: bold">参団グランプリ結果</p>
        <p style="font-size: 22px; font-weight:bold">部活参団部門</p>
        <p style="font-size: 18px">第一位 物理部　651票</p>
        <p style="font-size: 16px">第二位 折り紙研究部　559票　第三位 彼女は手品好き♡　556票</p>
        <p style="font-size: 16px">第四位 プラネタリウム・天文気象部　522票　第五位 クイズ研究部　451票</p>
        <p style="font-size: 16px">第六位 鉄研の車窓から2019　394票　第七位 進撃の生物部　313票　<br>第八位 開成鉱石・化石館　236票</p>

        <p style="font-size: 22px ;font-weight:bold">HR参団部門</p>
        <p style="font-size: 18px">第一位 スペースウォーズ　509票</p>
        <p style="font-size: 16px">第二位 野比家からの大脱出！　370票　第三位 勝率10％　315票　第四位 迷Q　305票
        </p>

        <p style="font-size: 22px ;font-weight:bold">有志参団部門</p>
        <p style="font-size: 18px">第一位 金の匙 Returns　544票</p>
        <p style="font-size: 16px">第二位 開成生フルボッコだドンⅡ　372票　第三位 GO GO VR!　366票</p>
        <p style="font-size: 16px">第四位 弱くても勝てます 6th　304票　第五位Never to Return　209票　第六位 ポケモンリーグカイセイ　190票</p>

        <p style="font-size: 22px ;font-weight:bold">実演参団部門</p>
        <p style="font-size: 18px">第一位 開成ピアノの会　271票</p>
        <p style="font-size: 16px">第二位 折り紙研究部　266票　第三位 彼女は手品好き♡　262票</p>
        <p style="font-size: 16px">第四位 開成管弦楽団　175票　第五位 音楽部　163票　第六位 大道芸、自由自在。 145票</p>
        <p>　ご来場いただいた皆様、参団グランプリの投票にご協力いただきありがとうございました。<br>　148th文化祭準備委員会参団係</p>

      </div>
    </section>
    <section class="menu">
      <div class="flex-box">
        <nuxt-link to="information">
          <img :src="img1" class="box-img">
        </nuxt-link>
        <nuxt-link to="map">
          <img :src="img2" class="box-img">
        </nuxt-link>
        <nuxt-link to="/timetable">
          <img :src="img4" class="box-img">
        </nuxt-link>
        <nuxt-link to="/sandan">
          <img :src="img3" class="box-img">
        </nuxt-link>


        <nuxt-link to="feature">
          <img :src="img5" class="box-img">
        </nuxt-link>
        <nuxt-link to="foodmenu">
          <img :src="img6" class="box-img">
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
