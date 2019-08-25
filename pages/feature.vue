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

</style>