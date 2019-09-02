<template>
  <div class="container">
    <Header/>
    <section class="top">
        <img src="~/assets/logo.svg" alt="logo" class="logo">
        <div class="date">2019.09.21(Sat)09:00-16:30<br>2019.09.22(Sun)09:00-17:00</div>
    </section>
    <section class="menu">
      <div class="flex-box">
        <nuxt-link to="information">
          <img :src="img1" class="box-img">
        </nuxt-link>
        <nuxt-link to="map">
          <img :src="img2" class="box-img">
        </nuxt-link>
        <nuxt-link to="sandan">
          <img :src="img3" class="box-img">
        </nuxt-link>
        <nuxt-link to="timetable">
          <img :src="img4" class="box-img">
        </nuxt-link>
        <nuxt-link to="feature">
          <img :src="img5" class="box-img">
        </nuxt-link>
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

import Header from '~/components/Myheader.vue'

export default {
  components: {
    Header
  },
  data(){
    return{
      meta: [
        {charset: 'utf-8'},
        { name: 'viewport', content: 'width=device-width, initial-scale=1'},
        { hid: 'description', name: 'description', content: '148th開成祭の公式ホームページです。'},
        { hid: 'og:site_name', property: 'og:site_name', content: '148th開成祭' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://kaisei-fes.com' },
        { hid: 'og:title', property: 'og:title', content: '148th開成祭' },
        { hid: 'og:description', property: 'og:description', content: '2019/9/21(土),22(日)開催。' },
        { hid: 'og:image', property: 'og:image', content: 'https://kaisei-fes.com/assets/icon.JPG' },
        { name: 'Twitter:Card', content: 'Summary_large_image' }
      ],
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
    padding:37vh 4vw;
    display:flex;
    justify-content:space-between;
  }
  .logo{
    width:40vw;
  }
  .date{
    min-width:300px;
    height:8vw;
    font-family: Ubuntu Condensed,monospace;
    font-style: normal;
    font-weight: normal;
    font-size: 2vw;
    color: white;
    align-items: center;
    text-align: center;
    vertical-align:bottom;
    letter-spacing: 0.2em;
    align-self:flex-end;
  }
  .flex-box{
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    padding:0 1vw;
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
      padding:10vh 0 0 0;
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
      padding:10vh 0 0 0;
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
