<template>
  <div class="container">
    <div class="title">
      <p>148th</p>
      <p>開成祭</p>
    </div>
    <div class="whendes">
      <p class="when">開催予定</p>
      <p class="date">2019.09.21(土)  9:00-17:00
        <br>2019.09.22(日)  9:00-17:00</p>
    </div>
    <div>
      公式サイトは８月下旬に公開予定です。<br>
      開成祭に向けた準備の様子をまとめた記事(Pick Up! 文化祭)を公開しています。ご覧ください。
    </div>
    <article>
      <h2>“Pick Up 文化祭” とは？</h2>
      <div>・文化祭を統括する文化祭準備委員会(文準)や、中１や高１がクラスで行う団体(HR参団)などの文化祭準備の様子を不定期に紹介
        <br>・文化祭に参加する団体(参団)が書いた、その団体のテーマに関連した記事がいっぱい
      </div>
      <p>とりあえず見ましょう.</p>
      <div class="buttons">Pick Up! 文化祭をみる！→</div>
    </article>
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
  .container{
    padding: 0px 15px;
    background-color: #3F0E47;
    color: white;

  }
  .title{
    font-size: 32px;
    padding: 80px 0px;
    height: 80vh;
    vertical-align: center;
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
  .buttons{
    height: 40px;
    width: 80%;
    border-radius: 5px;
    background-color: #1B6882;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    }


</style>
