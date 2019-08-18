<template>
  <div class="container">
    <div class="title">
      <p>企画一覧</p>
    </div>
    <ais-instant-search :search-client="searchClient" index-name="demo_ecommerce">
      <ais-search-box />
      <ais-hits>
        <div slot="item" slot-scope="{ item }">
          <h2>{{ item.name }}</h2>
        </div>
      </ais-hits>
    </ais-instant-search>
    <div v-on:click="tap=!tap" class="card">
      <div class="grid-container">
        <div class="thumbnail"><img src="" height="55px"></img></div>
        <div class="place">B会場１階</div>
        <div class="name">Let's talk Kaisei 2019</div>
        <div class="description">パンの販売をしています</div>
        <div class="waitingtime">1分</div>
      </div>
      <div class="grid-container2">
      <div v-if=tap class="buttons map"><p>マップを見る</p></div>
      <div v-if=tap class="buttons details"><p>詳しく</p></div>
      </div>
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
  .card {
    border: solid 0.5px #828282;
    border-radius: 10px;
    background-color: #F8F9FA;
    padding: 10px 10px;
    align-items: center;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 55px auto 45px;
    grid-template-rows: 17px 25px 20px;
  }

  .thumbnail {
    grid-column: 1;
    grid-row: 1 / 4;
  }

  .place {
    font-size: 13px;
    color: #495057;
    grid-column: 2 / 3;
    grid-row: 1;
  }

  .name {
    font-size: 20px;
    font-weight: bold;
    grid-column: 2 / 3;
    grid-row: 2;
  }

  .description {
    font-size: 13px;
    color: #912A55;
    grid-column: 2 / 3;
    grid-row: 3;
  }

  .waitingtime {
    font-size: 25px;
    grid-column: 3;
    grid-row: 1 / 4;
  }
  .grid-container2{
    display: grid;
    grid-template-columns: 49.5% 1% 49.5%;
  }
  .map {
    grid-column: 1/2;
  }

  .details {
    grid-column: 3/4;
  }


</style>
