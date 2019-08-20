<template>
  <div class="container">
    <div class="title">
      <p>企画一覧</p>
    </div>
    <div class="search">
      <ais-instantsearch>
      <ais-index index-name="148th_Kaisei-Fes"
                 app-id="7HI77HDFZJ"
                 api-key="ab6a78e7d69b029972769740214ceb56">
        <ais-results inline-templete>
          <templete slot-scope="{ result }">
            <div v-on:click="tap=!tap"
                 v-for="result in results"
                 :key="result.objectID"
                 class="card">
              <div class="grid-container">
                <div class="thumbnail"><img src="" height="55px"></img></div>
                <div class="place">{{ result.Place }}</div>
                <div class="name">{{ result.Name }}</div>
                <div class="description">{{ result.Description }}</div>
                <div class="waitingtime">1分</div>
              </div>
              <div class="grid-container2">
                <div v-if=tap class="buttons map"><p>マップを見る</p></div>
                <div v-if=tap class="buttons details"><p>詳しく</p></div>
              </div>
            </div>
          </templete>
        </ais-results>
      </ais-index>
      </ais-instantsearch>

      <ais-results>
          <div class="ais-results">
            <div v-on:click="tap=!tap"
                 class="card">
              <div class="grid-container">
                <div class="thumbnail"><img src="" height="55px"></img></div>
                <div class="place"></div>
                <div class="name">あ</div>
                <div class="description">あ</div>
                <div class="waitingtime">1分</div>
              </div>
              <div class="grid-container2">
              <div v-if=tap class="buttons map"><p>マップを見る</p></div>
              <div v-if=tap class="buttons details"><p>詳しく</p></div>
              </div>
            </div>
          </div>
        </ais-results>
    </div>
  </div>
</template>

<script>
  import algoliasearch from 'algoliasearch/lite';

  export default {
    data() {
      return {
        searchClient: algoliasearch(
                '7HI77HDFZJ',
                '2e75af599564cd587c12d48a9f8abc1d'
        ),
      };
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
/*--カードの並べ方--*/
  .ais-results {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 10px;
  }
/*--カード--*/
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
