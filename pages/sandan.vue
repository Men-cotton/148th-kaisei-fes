<template>
  <div class="container-sandan">
    <Header/>
    <div class="title">
      <div class="long"><img src="../assets/sectionmark_along.svg"><div class="long-line"><p>企画一覧</p></div></div>
    </div>
    <div class="usage">
      <p>開成祭で行われる企画の一覧ページです。</p>
      <h3>操作方法</h3>
      <p>各団体のカードをタップ・クリックすると詳細が開きます。<br>
        「マップを見る」でその企画がやっている場所の地図を見ることができます。 「詳しく」で展示内容の詳しい情報を見ることができます。</p>
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
      <v-content class="card-setting">
        <SandanCard v-for="(project) in projects"
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
    import algoliasearch from 'algoliasearch/lite';
    import Header from '~/components/Myheader.vue';
    import SandanCard from '~/components/sandancard.vue';

    const searchClient = algoliasearch(
        'CBBW6NQXPV',
        '7a788ae60b68dff01a8328d0e1150c85'
    );

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
    background: #F8F9FA;
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
  .usage {
    color: white;
    margin: 10px 0;
  }
  .usage >p{
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
  .long{
    border-left-style: revert;
    position: relative;
    font-size: 32px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    padding:  10px 0;

  }
  .long-line{
    width: 100%;
    border-bottom: #CCBD14 2px solid;
  }
  .long-line >p{
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
