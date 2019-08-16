<template>
  <div class="container">
    <div class="title">
      <p>企画一覧</p>
    </div>
    <div v-on:click="tap=!tap" class="grid-container">
      <div class="thumbnail"><img src="" height="55px"></img></div>
      <div class="place">B会場１階</div>
      <div class="name">Let's talk Kaisei 2019</div>
      <div class="description">パンの販売をしています</div>
      <div class="waitingtime">1分</div>

      <div v-if=tap class="map"><p>マップを見る</p></div>
      <div v-if=tap class="details"><p>詳しく</p></div>
    </div>
  </div>
</template>

<script>
    import Logo from '~/components/Logo.vue'

    export default {
        components: {
            Logo,
        },
        data() {
            return {
                tap: false,
            };
        },
    }

</script>

<style>
  .img {
    border-radius: 27.5px;
  }

  .container {
    padding: 0px 15px;
    background-color: #3F0E47;

  }

  .title {
    color: white;
    font-size: 32px;
    padding: 80px 0px;

  }

  .grid-container {
    border: solid 0.5px #828282;
    border-radius: 10px;
    background-color: #F8F9FA;
    padding: 10px 10px;
    align-items: center;
    display: grid;
    grid-template-columns: 17.7% 32.2% 37% 12.9%;
    grid-template-rows: 17px 25px 25px 40px;
  }

  .thumbnail {
    grid-column: 1;
    grid-row: 1 / 4;
  }

  .place {
    font-size: 13px;
    color: #495057;
    grid-column: 2 / 4;
    grid-row: 1;
  }

  .name {
    font-size: 20px;
    font-weight: bold;
    grid-column: 2 / 4;
    grid-row: 2;
  }

  .description {
    font-size: 13px;
    color: #912A55;
    grid-column: 2 / 4;
    grid-row: 3;
  }

  .waitingtime {
    font-size: 25px;
    grid-column: 4;
    grid-row: 1 / 4;
  }

  .map {
    height: 40px;
    border-radius: 5px;
    background-color: #912A55;
    margin-right: 5px;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    grid-column: 1 / 3;
    grid-row: 4;
  }

  .details {
    height: 40px;
    border-radius: 5px;
    background-color: #912A55;
    margin-left: 5px;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    grid-column: 3/5;
    grid-row: 4;
  }


</style>
