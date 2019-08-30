<template>
  <div class="container">
    <Header/>
    <div class="title">
      <p>企画一覧</p>
    </div>
    <div class="search-box-title">
      <p>キーワード検索</p>
    </div>
    <div>
      <input class="search-box" v-model="search_text">
    </div>
    <div class="search-box-title">
      <p>絞り込み</p>
    </div>
    <div class="focus-on">
      <div class="tenji buttons">展示</div>
      <div class="sanka buttons">参加型</div>
      <div class="eiga buttons">映画</div>
      <div class="perform buttons">パフォーマンス</div>
      <div class="eats buttons">飲食・販売</div>
    </div>

    <v-app>
      <v-content>
        <div v-for="(project) in projects"
             v-bind:datasrc="project.picture"
             v-on:click="tap=!tap"
             class="card">
          <v-avatar>
            <div class="grid-container">
              <div class="thumbnail"><img src="" height="55px"></img></div>
              <div class="place">{{ project.Place }}</div>
              <div class="name">{{ project.Name }}</div>
              <div class="description">{{ project.Description }}</div>
              <div class="waitingtime">1<span class="minute">分</span></div>
            </div>
            <div class="grid-container2">
              <div v-if=tap class="buttons map"><p>マップを見る</p></div>
              <div v-if=tap class="buttons details"><p>詳しく</p></div>
            </div>
          </v-avatar>
        </div>
      </v-content>
    </v-app>



    <!--一応残したやつ-->
    <div>
      <div v-on:click="tap=!tap"
           class="card">
        <div class="grid-container">
          <div class="thumbnail"><img src="" height="55px"></img></div>
          <div class="place"></div>
          <div class="name">鉄道研究部</div>
          <div class="description">部誌の配布</div>
          <div class="waitingtime">1分</div>
        </div>
        <div v-if="tap" class="grid-container2">
          <div class="buttons map"><p>マップを見る</p></div>
          <div class="buttons details"><p>詳しく</p></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import algoliasearch from 'algoliasearch/lite';
    import Header from '~/components/Myheader.vue'

    export default {
        components: {
          Header
        },
        name: 'project',
        data: function () {
            return {
                projects: [],
                index: null,
                search_text: '',
                tap: false,
            };
        },
        created: function () {
            var self = this;
            var searchClient = algoliasearch(
                'CBBW6NQXPV',
                '7a788ae60b68dff01a8328d0e1150c85'
            );
            self.index = searchClient.initIndex('project');
            this.searchProject();
        },
        watch: {
            search_text: function () {
                this.searchProject()
            }
        },
        methods: {
            searchProject: function () {
                var self = this;
                self.index.search(self.search_text, (err, {hits} = {}) => {
                    self.projects = hits;
                });
            }
        }
    }

</script>

<style>
  .search-box-title{
    margin-top: 10px;
    background: #912A55;
    color: white;
    padding: 2px 0;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    border-radius: 5px 5px 0 0;
  }
  .search-box{
    width: 100%;
    height: 35px;
    border-radius: 0 0 5px 5px;
  }
  .focus-on{
    background: #F8F9FA;
    display: grid;
    grid-template-columns: 33% 16.5% 16.5% 33%;
    grid-template-rows: 50px 50px;
    border-radius: 0 0 5px 5px;
  }
  .buttons{
    margin: 5px;
  }
  .tenji{
    grid-column: 1/2;
    grid-row: 1/2;

  }
  .sanka{
    grid-column: 2/4;
    grid-row: 1/2;
  }
  .eiga{
    grid-column: 4/5;
    grid-row: 1/2;
  }
  .perform{
    grid-column: 1/3;
    grid-row: 2/3;
  }
  .eats{
    grid-column: 3/5;
    grid-row: 2/3;
  }
  .img {
    border-radius: 27.5px;
  }

  .container {
    padding: 30px 15px;
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
    margin: 10px 0;
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
    font-size: 19px;
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
    font-size: 30px;
    display: flex;
    align-items: center;
    text-align: center;

    grid-column: 3;
    grid-row: 1 / 4;
  }
  .minute{
    font-size: 15px;
    margin-top: 10px;
  }

  .grid-container2 {
    display: grid;
    grid-template-columns: 49.5% 1% 49.5%;
    margin: revert;
  }

  .map {
    grid-column: 1/2;
  }

  .details {
    grid-column: 3/4;
  }


</style>
