<template>
  <div class="container">
    <div class="title">
      <p>企画一覧</p>
    </div>
    <v-app>
      <v-content>
        <div v-for="(project) in projects" v-bind:datasrc="project.picture">
          <v-avatar>
            {{project.Name}}
          </v-avatar>
        </div>
      </v-content>
    </v-app>


    <ais-instant-search
            index-name="148th_Kaisei-Fes"
            :search-client=searchClient>
      <ais-search-box placeholder="Search for products..."

      />
      <ais-hits>
        <div slot="item" slot-scope="{ item }">
          <div v-on:click="tap=!tap"
               v-for="item in items"
               :key="item.objectID"
               class="card">
            <div class="grid-container">
              <div class="thumbnail"><img src="" height="55px"></img></div>
              <div class="place">{{ item.Place }}</div>
              <div class="name">{{ item.Name }}</div>
              <div class="description">{{ item.Description }}</div>
              <div class="waitingtime">1分</div>
            </div>
            <div class="grid-container2">
              <div v-if=tap class="buttons map"><p>マップを見る</p></div>
              <div v-if=tap class="buttons details"><p>詳しく</p></div>
            </div>
          </div>
        </div>
      </ais-hits>
    </ais-instant-search>
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
    //import {algoliasearch} from 'vue-instantsearch';
    import algoliasearch from 'algoliasearch/lite';

    export default {
        name: 'project',
        data: function () {
            return {
                projects: [],
                index: null,
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
        methods: {
            searchProject: function () {
                var self = this;
                self.index.search("手品", (err, {hits} = {}) => {
                    self.projects = hits;
                });
            }
        }

        /*使えない？わけわからん
        components: {
          'ais-InstantSearch': InstantSearch,
          'ais-SearchBox': SearchBox,
          'ais-Hits': MyCustomHits,
        },
        */
    }

</script>

<style>
  .MyCustomInstantSearch {
    height: 20px;
    width: 80%;
  }

  .MySearchBox {
    height: 200px;
    width: 80px;

  }

  .MyCustomHits {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));

  }

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

  .grid-container2 {
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
