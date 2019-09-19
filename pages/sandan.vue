<template>
  <div class="container-sandan">
    <Header/>
    <div class="title">
      <div class="long"><img src="../assets/sectionmark_along.svg">
        <div class="long-line"><p>企画一覧</p></div>
      </div>
    </div>
    <div class="usage">
      <p>開成祭で行われる企画の一覧ページです。</p>
      <h3>操作方法</h3>
      <p>各団体のカードをタップ・クリックすると詳細が開きます。<br>
        「マップを見る」は現在準備中です。「詳しく」をタップ・クリックすると展示の詳しい情報を見ることができます。</p>
    </div>

    <ais-instant-search-ssr>
      <div class="search-box-title">
        <p>キーワード検索</p>
      </div>
      <div>
        <input class="search-box" v-model="search_text">
        <div class="usage search-text">キーワードで絞り込む際は、団体名や会場名を入力してください。（例：A会場or３階）
          <no-ssr>
            <ais-powered-by theme="dark"/>
          </no-ssr>
        </div>
      </div>
      <ais-pagination/>
    </ais-instant-search-ssr>

    <div class="search-box-title">
      <p>絞り込み</p>
    </div>
    <div class="focus-on">
      <div v-on:click="search_category^=(1<<0)"
           v-bind:class="[{selected: (search_category & 1<<0) > 0},'tenji buttons']"> 展示
      </div>
      <div v-on:click="search_category^=(1<<1)"
           v-bind:class="[{selected: (search_category & 1<<1) > 0},'sanka buttons']"> 参加型
      </div>
      <div v-on:click="search_category^=(1<<2)"
           v-bind:class="[{selected: (search_category & 1<<2) > 0},'eiga buttons']"> 映画
      </div>
      <div v-on:click="search_category^=(1<<3)"
           v-bind:class="[{selected: (search_category & 1<<3) > 0},'perform buttons']"> 公演
      </div>
      <div v-on:click="search_category^=(1<<4)"
           v-bind:class="[{selected: (search_category & 1<<4) > 0},'eats buttons']"> 飲食・販売
      </div>
    </div>
    <div class="usage"></div>

    <v-app>
      <v-content class="card-setting">
        <SandanCard v-for="(project) in should_show_projects"
                    v-bind:key="project.objectID"
                    v-bind:project="project"
                    v-bind:datasrc="project.picture"
        >
        </SandanCard>
      </v-content>
    </v-app>
  </div>
</template>

<script>
    import {
        AisInstantSearchSsr,
        AisPagination,
        AisPoweredBy,
        createInstantSearch
    } from 'vue-instantsearch';
    import algoliasearch from 'algoliasearch/lite';
    import Header from '~/components/Myheader.vue';
    import SandanCard from '~/components/sandancard.vue';

    const searchClient = algoliasearch(
        'CBBW6NQXPV',
        '7a788ae60b68dff01a8328d0e1150c85'
    );
    const {tmp, rootMixin} = createInstantSearch({
        searchClient,
        indexName: 'instant_search'
    });

    export default {
        mixins: [rootMixin],
        components: {
            Header,
            SandanCard,
            AisInstantSearchSsr,
            AisPagination,
            AisPoweredBy,
        },
        name: 'project',
        data: function () {
            return {
                sorted_projects: [],
                index: null,
                search_text: '',
                search_category: 0,
                searchClient,
            };
        },
        created: function () {
            this.index = searchClient.initIndex('project');
            this.searchProject();
        },
        watch: {
            search_text: function () {
                this.searchProject()
            }
        },
        methods: {
            searchProject: function () {
                this.index.search({
                        query: this.search_text,
                        hitsPerPage: 100,
                    },
                    (err, {hits} = {}) => {
                        if (err) throw err;
                        this.sorted_projects = hits;
                    });
            }
        },
        computed: {
            randomized_projects: function () {
                var array = this.sorted_projects;
                for (var i = array.length; i > 0; i--) {
                    var rand = Math.floor(Math.random() * i);
                    [array[i - 1], array[rand]] = [array[rand], array[i - 1]]
                }
                return array;
            },
            should_show_projects: function () {
                var categories = ['展示', '参加型', '映画', '公演', '飲食・販売'];

                var search = this.search_category;
                return this.randomized_projects.filter(function (project) {
                    if (search == 0) return true;
                    var category = 0;
                    var x = categories.indexOf(project.Narrow1);
                    if (x >= 0) category += 1 << x;
                    var y = categories.indexOf(project.Narrow2);
                    if (y >= 0) category += 1 << y;

                    return (search & category) > 0;
                })
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
    background: #F8F9FA;
    font-size: 16px;
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

  .selected {
    background-color: #C2C7CA;
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

  .usage {
    color: white;
    margin: 10px 0;
  }

  .search-text {
    display: flex;
  }

  .usage > p {
    margin: 3px 0;
  }

  .img {
    border-radius: 27.5px;
  }

  .container-sandan {
    padding: 0 15px 30px;
    background-color: #411445;
  }

  .title {
    color: white;
    font-size: 32px;
    font-weight: bold;
    padding: 110px 0px 40px;
  }

  .long {
    border-left-style: revert;
    position: relative;
    font-size: 32px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    padding: 10px 0;

  }

  .long-line {
    width: 100%;
    border-bottom: #CCBD14 2px solid;
  }

  .long-line > p {
    position: relative;
    left: 7px;
  }


  /*--カードの並べ方--*/
  .card-setting {
    display: grid;
    grid-template-columns: repeat(auto-fill, min-content(375px, 1fr));
    grid-column-gap: 10px;
  }
</style>
