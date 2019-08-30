<template>
  <div class="container">
    <Header/>
    <div class="title">
      <p>Pick Up! 文化祭</p>
    </div>

    <div class="search">
      <div class="search-text"><p>絞り込み</p></div>
      <div class="button-grid">
        <div class="buttons left-button">
          <p>文化祭準備編</p>
        </div>
        <div class="buttons right-button">
          <p>プロフェッショナル編</p>
        </div>
      </div>

    </div>
    <div class="all-post">
<!---以下が一つの投稿カードです--->
    <div class="post-container">
      <div class="thumbnail">
        <img src="">
      </div>
      <div class="post-details">
        <div class="post-date">2019/08/25</div>
        <div class="post-title">睡魔との戦い-睡眠同好会</div>
        <div class="post-type">プロフェッショナル編</div>
      </div>
    </div>

    <div class="post-container">
      <div class="thumbnail">
        <img src="">
      </div>
      <div class="post-details">
        <div class="post-date">2019/08/25</div>
        <div class="post-title">睡魔との戦い-睡眠同好会</div>
        <div class="post-type">プロフェッショナル編</div>
      </div>
    </div>

      <!---３つ目--->
      <div class="post-container">
        <div class="thumbnail">
          <img src="">
        </div>
        <div class="post-details">
          <div class="post-date">2019/08/25</div>
          <div class="post-title">睡魔との戦い-睡眠同好会</div>
          <div class="post-type">プロフェッショナル編</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
    import Header from '~/components/Myheader.vue'
    import Logo from '~/assets/mister_fujino.jpg'
    import Article from '~/components/FeatureArticle.vue'

    export default {
        name: "feature",
        components: {
            Logo,
            Article,
          Header
        },
        data() {
            return {
                message: "Hello"
            }
        }
    }
</script>

<style scoped>
  a {
    color: #ccbd14
  }

  .container {
    padding: 30px 15px;
    background-color: #411445;
    color: white;
  }

  .title {
    color: white;
    font-size: 32px;
    padding: 80px 0px;
  }

  .search {
    height: 85px;

    /* ivory */
    background: #F8F9FA;
    box-shadow: 3px 3px 6px rgba(255, 255, 255, 0.25);
    border-radius: 5px;
  }
  .button-grid{
    margin: 10px;
    display: grid;
    grid-template-columns: 49.5% 1% 49.5%;
  }

  .search-text {
    position: relative;
    width: 100%;
    height: 25px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;

    /* red */
    background: #912A55;
    border-radius: 5px 5px 0px 0px;
    text-align: center;
  }

  .left-button {
    grid-column: 1/2;

  }

  .right-button {
    grid-column: 3/4;
  }

  @media screen and (min-width:768px){
    .post-container{
      width: 100%;
    }
    .all-post{
      display: grid;
      grid-template-columns: 49% 49%;
      grid-column-gap: 20px;
    }
  }
  /* 投稿のあれ */
  .post-container{
    margin: 10px 0px;
  }
  .thumbnail{
    height: 150px;
    background: #7f828b;
    border-radius: 10px 10px 0 0;

  }
  .post-details{
    height: 70px;
    padding: 5px 10px;
    background: #F8F9FA;
    color: black;
    border-radius: 0px 0px 10px 10px;

  }
  .post-date{
    color: black;
    font-size: 12px;
    font-weight: bold;
  }
  .post-title{
    color: black;
    font-size: 18px;
    font-weight: bold;
  }
  .post-type{
    color: #495057;
    font-size: 12px;
  }

</style>