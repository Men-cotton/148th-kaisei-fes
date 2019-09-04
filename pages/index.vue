<template>
  <div class="container">
    <Header/>
    <section class="top">
        <img src="~/assets/logo.svg" alt="logo" class="logo">
        <div class="date">創立148周年記念開成祭<br><br>開催日時<br>2019.09.21(土)09:00-17:00<br>2019.09.22(日)09:00-16:30</div>
    </section>
    <section class="menu">
      <div class="flex-box">
        <nuxt-link to="information">
          <img :src="img1" class="box-img">
        </nuxt-link>
<!--        <nuxt-link to="map">
          <img :src="img2" class="box-img">
        </nuxt-link>  -->
        <nuxt-link to="sandan">
          <img :src="img3" class="box-img">
        </nuxt-link>
        <nuxt-link to="timetable">
          <img :src="img4" class="box-img">
        </nuxt-link>
        <nuxt-link to="foodmenu"><div class="buttons b-in">食品メニュー</div></nuxt-link>
        <!--
        <nuxt-link to="feature">
          <img :src="img5" class="box-img">
        </nuxt-link>-->
      </div>
    </section>
  </div>
</template>

<script>

import access from '~/assets/access.svg';
import map from '~/assets/map.svg';
import sandan from '~/assets/sandan.svg';
import timetable from '~/assets/timetable.svg';
import feature from '~/assets/feature.svg';

import Header from '~/components/Myheader.vue';
import Footer from '~/components/Myfooter.vue';


  export default {
    head: {
      script: [{
        innerHTML: `{
  "name": "148th開成祭",
  "description": "2019年9月21日,22日に行われる148th開成祭の公式ホームページです。",
  'og:type': 'website',
  'og:url': 'https://kaisei-fes.com',
  'og:title': '創立148周年記念開成祭',
        'og:description': '2019/9/21(土),22(日)開催　148th開成祭',
        'og:image': 'https://kaisei-fes.com/assets/icon.JPG',
        'Twitter:Card': 'Summary_large_image',
  "location": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "港区",
      "addressRegion": "東京都",
      "streetAddress": "西日暮里4丁目2番4号"
    },
    "name": "開成学園中学校・高等学校",
    "url": "https://kaiseigakuen.jp"
  },
  "startDate": "2019-09-21",
  "endDate": "2019-09-22",
  "url": "https://kaisei-fes.com"
}`,
        type: 'application/ld+json'
      }]
    },
  components: {
    Header,
    Footer
  },
  data(){
    return{
      img1: access,
      img2: map,
      img3: sandan,
      img4: timetable,
      img5: feature,

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
