<template>
  <div class="container">
    <section class="top">
        <img src="~/assets/logo.svg" alt="logo" class="logo">
        <div class="date">2019.09.21(Sat)09:00-17:00<br>2019.09.22(Sun)09:00-17:00</div>
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

import Logo from '~/assets/mister_fujino.jpg'

export default {
  data(){
    return{
      img1: access,
      img2: map,
      img3: sandan,
      img4: timetable,
      img5: feature,

    }
  },
  components: {
    Logo
  }
}

</script>

<style>
  a{
    color: #ccbd14
  }

  .container{
    background-color: #411445;
    color: white;
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
  /* }
  .sorit{
        font-size: 24px;
        font-weight: bold;
      }
      .kaiseisai{
        font-size: 48px;
        font-weight: bold;

      }
  .title{
    padding: 80px 0px;
    margin: 0px 40px;
    height: 90vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }
  .whendes{
    height: 18vh;
  }
  .when{
    font-size: 20px;
    text-align: center;
  }
  .date{
    font-size: 22px;
    font-weight: bold;
    text-align: center;
  }
  .plzwait{
    text-align: center;
  }
  .buttons{
    margin: 20px auto;
    height: 40px;
    width: 80%;
    border-radius: 5px;
    background-color: #912A55;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    flex-direction: column; */
  
</style>
