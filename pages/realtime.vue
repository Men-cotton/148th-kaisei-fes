<template>
  <div class="container-foodmenu">
    <Header/>
    <div class="title">
      <div class="long"><img src="../assets/sectionmark_along.svg"><div class="long-line"><p>開成祭</p></div></div>
    </div>

    <div class="page-desc">
      <p>文化祭当日、このページで各種混雑状況等をおしらせします。</p>
    </div>

    <div class="p-alone"><img src="../assets/sectionmark_alone.svg"><p>ステージ企画進行状況</p></div>

    <div class="menu-desc">
      <p>小講堂</p>
      <table>
        <tr>
          <th>場所</th> <th>遅延状況</th> <th>現在実演中の団体</th>
        </tr>
        <tr>
         <td>小講堂</td> <td>15分遅れ</td> <td>大道芸、自由自在。</td>
        </tr>
        <tr>
          <td>食堂</td> <td></td> <td></td>
        </tr>
        <tr>
         <td>中学視聴覚室</td> <td></td> <td></td>
        </tr>
      </table>
    </div>
    <div class="p-alone"><img src="../assets/sectionmark_alone.svg"><p>参団混雑状況</p></div>
    <div class="menu-desc">
      <p><strong>混雑している参団</strong></p>
      <p>お化け屋敷</p>
      <p><strong>空いている参団</strong></p>
      <p>写真部</p>
    </div>
  </div>

</template>

<script>
    import Header from '~/components/Myheader.vue'
    import Logo from '~/assets/mister_fujino.jpg'
    import Article from '~/components/FeatureArticle.vue'

    export default {
      components: {
        Header
      },
    }
</script>

<style scoped>
  a {
    color: #ccbd14
  }

  .container-foodmenu {
    padding: 0px 15px 30px;
    background-color: #411445;
    color: white;
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
  .p-alone{
    position: relative;
    left: 5px;
    padding-top: 10px;
    padding-bottom: 5px;
  }
  .p-alone{
    font-weight: bold;
    font-size: 19px;
    display: flex;
    flex-direction: row;
  }
  .p-alone >p{
    position: relative;
    left: 7px;
  }


  .buttons{
    margin: 5px 0;
  }
  .menu-desc{
    margin: 0 5px 35px;
    padding: 20px 10px;
    background: rgba(226, 226, 226, 0.3);
    border: rgba(226, 226, 226, 0.3) double;
  }

  .menu-desc >table{
    width: 100%;
  }


</style>