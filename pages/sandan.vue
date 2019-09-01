<template>
  <div class="container-sandan">
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
        <SandanCard v-for="(project) in projects"
                    v-bind:key="project.objectID"
                    v-bind:project="project"
                    v-bind:datasrc="project.picture"
        >
        </SandanCard>
      </v-content>
    </v-app>


    <!--一応残したやつ-->

  </div>
</template>

<script>
    import algoliasearch from 'algoliasearch/lite';
    import Header from '~/components/Myheader.vue';
    import SandanCard from '~/components/sandancard.vue';

    export default {
        components: {
            Header,
            SandanCard
        },
        name: 'project',
        data: function () {
            return {
                projects: [],
                index: null,
                search_text: '',
                // tap: false,
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
  .search-box-title {
    margin-top: 10px;
    background: #912A55;
    color: white;
    padding: 2px 0;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    border-radius: 5px 5px 0 0;
  }

  .search-box {
    width: 100%;
    height: 35px;
    border-radius: 0 0 5px 5px;
  }

  .focus-on {
    background: #F8F9FA;
    display: grid;
    grid-template-columns: 33% 16.5% 16.5% 33%;
    grid-template-rows: 50px 50px;
    border-radius: 0 0 5px 5px;
  }

  .buttons {
    margin: 5px;
  }

  .tenji {
    grid-column: 1/2;
    grid-row: 1/2;

  }

  .sanka {
    grid-column: 2/4;
    grid-row: 1/2;
  }

  .eiga {
    grid-column: 4/5;
    grid-row: 1/2;
  }

  .perform {
    grid-column: 1/3;
    grid-row: 2/3;
  }

  .eats {
    grid-column: 3/5;
    grid-row: 2/3;
  }

  .img {
    border-radius: 27.5px;
  }

  .container-sandan {
    padding: 30px 15px;
    background-color: #411445;
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
</style>
