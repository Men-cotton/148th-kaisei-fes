<template>
  <div class="container">
    <div class="title">
      <p>企画一覧</p>
    </div>
    <div class="grid-container">
      <div class="thumbnail"><img src="over.vue" height="55px"></img></div>
      <div class="place">B会場１階</div>
      <div class="name">ラ・スール・リマーレ</div>
      <div class="description">パンの販売をしています</div>
      <div class="waitingtime">10分</div>
      <div class="map">マップを見る</div>
      <div class="details">メニューを見る</div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
  .img{
    border-radius: 27.5px;
  }
  .container{
    padding: 0px 15px;
    background-color: #3F0E47;

  }
  .title{
    color: white;
    font-size: 32px;
    padding: 80px 0px;
  }
  .grid-container{
    border: solid 1px #828282 ;
    border-radius: 10px;
    background-color: #F8F9FA;
    padding: 10px;
    width: 100%;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 55px auto auto 55px;
    grid-template-rows: 11px 20px 12px 40px;
  }
  .thumbnail{
    grid-column: 1;
    grid-row: 1 / 4;
   }
  .place{
    font-size: 11px;
    color: #5A5A5A;
    grid-column: 2 / 4;
    grid-row: 1;
    }
  .name{
    font-size: 20px;
    font-weight: bold;
    grid-column: 2 / 4;
    grid-row: 2;
    }
  .description{
    font-size: 12px;
    color: #5A5A5A;
    grid-column: 2 / 4;
    grid-row: 3;
    }
  .waitingtime{
    font-size: 25px;
    grid-column: 4;
    grid-row: 1 / 4;
    }
  .map{
    border-radius: 5px;
    background-color: #1B6882;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    grid-column: 1 / 3;
    grid-row: 4;
    }
  .details{
    border-radius: 5px;
    background-color: #1B6882;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
      grid-column: 3/5;
      grid-row: 4;
    }


</style>
