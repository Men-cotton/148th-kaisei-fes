<template>
  <div class="container">
    <div class="title">
      <p class="sorit">創立148周年記念</p>
      <p class="kaiseisai">開成祭</p>
    </div>
    <div class="whendes">
      <p class="when">開催予定</p>
      <p class="date">2019.09.21(土)  9:00-17:00
        <br>2019.09.22(日)  9:00-17:00</p>
    </div>
    <div class="plzwait">
      148th開成祭公式サイトは８月下旬の公開に向け鋭意準備中です。<br>
      公開までの間は開成祭公式ツイッターをご覧ください。<br>
      <a href="https://twitter.com/kaiseisai"><div class="buttons"><p>Twitterをみる</p></div></a>

    </div>
    <!---
    <article>
      <h2>“Pick Up 文化祭” とは？</h2>
      <div>・文化祭を統括する文化祭準備委員会(文準)や、中１や高１がクラスで行う団体(HR参団)などの文化祭準備の様子を不定期に紹介
        <br>・文化祭に参加する団体(参団)が書いた、その団体のテーマに関連した記事がいっぱい
      </div>
      <p>とりあえず見ましょう.</p>
      <div class="buttons">Pick Up! 文化祭をみる！→</div>
    </article>
    --->
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}

</script>

<style>
  a{
    color: #ccbd14
  }

  .container{
    padding: 0px 15px 30px;
    background-color: #411445;
    color: white;
  }
  .sorit{
        font-size: 24px;
        font-weight: bold;


      }
      .kaiseisai{
        font-size: 48px;
        font-weight: bold;

      }
  .title{
    padding: 80px 0px;
    margin: 0px 40px;
    height: 90vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }
  .sorit{
  }
  .kaiseisai{
  }
  .whendes{
    height: 18vh;
  }
  .when{
    font-size: 20px;
    text-align: center;
  }
  .date{
    font-size: 22px;
    font-weight: bold;
    text-align: center;
  }
  .plzwait{
    text-align: center;
  }
  .buttons{
    margin: 20px auto;
    height: 40px;
    width: 80%;
    border-radius: 5px;
    background-color: #912A55;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    flex-direction: column;
    }


</style>
