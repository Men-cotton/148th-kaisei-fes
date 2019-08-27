<template>
  <div class="container">
    <div class="title">
      <h1>Pick UP! 文化祭</h1>
    </div>

    <div class="search">
      <h2 class="search-text"><p>絞り込み</p></h2>
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
    import Logo from '~/assets/mister_fujino.jpg'
    import Article from '~/components/FeatureArticle.vue'

    export default {
        name: "feature",
        components: {
            Logo,
            Article,
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

  h1 {
    font-family: Noto Sans JP;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 43px;
    display: flex;
    align-items: center;
  }

  h2 {
    font-family: Noto Sans JP;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
  }

  .container {
    padding: 0px 15px 30px;
    background-color: #411445;
    color: white;
  }

  .title {
    padding-left: 57px;
    padding-top: 82px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
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