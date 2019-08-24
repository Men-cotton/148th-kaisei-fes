<template>
  <div class="container">
    <div class="title">
      <h1>Pick UP! 文化祭</h1>
    </div>

    <div class="search">
      <h2 class="search-text">絞り込み</h2>
      <div class="search-button left-button">
        <h2 class="button-text">文化祭準備編</h2>
      </div>
      <div class="search-button right-button">
        <h2 class="button-text">プロフェッショナル編</h2>
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
    position: static;
    width: 345px;
    height: 85px;
    margin-top: 20px;

    /* ivory */
    background: #F8F9FA;
    box-sizing: border-box;
    box-shadow: 3px 3px 6px rgba(255, 255, 255, 0.25);
    border-radius: 5px;
  }

  .search-text {
    display: inline-block;
    position: relative;
    width: 345px;
    height: 25px;
    top: -1px;
    padding-top: 3px;

    /* red */
    background: #912A55;
    border-radius: 5px 5px 0px 0px;
    text-align: center;
  }

  .search-button {
    display: inline-block;
    position: relative;
    width: 162.5px;
    height: 40px;
    top: 10px;

    /* red */
    background: #912A55;
    border-radius: 5px;
    text-align: center;
  }

  .left-button {
    left: 5px;
  }

  .right-button {
    left: 10px;
  }

  .button-text {
    display: inline-block;
    margin-top: 12px;
  }
</style>