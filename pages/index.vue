<template>
  <div class="container">
    <Header/>
    <section class="top">
        <img src="~/assets/logo.svg" alt="logo" class="logo">
        <div class="date">2019.09.21(Sat)09:00-16:30<br>2019.09.22(Sun)09:00-17:00</div>
    </section>
    <section class="menu">
      <div class="flex-box">
        <nuxt-link to="information" no-prefetch>
          <img :src="img1" class="box-img">
        </nuxt-link>
        <nuxt-link to="map" no-prefetch>
          <img :src="img2" class="box-img">
        </nuxt-link>
        <nuxt-link to="sandan" no-prefetch>
          <img :src="img3" class="box-img">
        </nuxt-link>
        <nuxt-link to="timetable" no-prefetch>
          <img :src="img4" class="box-img">
        </nuxt-link>
        <nuxt-link to="feature" no-prefetch>
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
    padding:40vh 4vw;
    display:flex;
    justify-content:space-between;
  }
  .logo{
    width:40vw;
  }
  .date{
    min-width:300px;
    height:8vw;
    font-family: Ubuntu Condensed;
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
  @media screen and (orientation:portrait){
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
