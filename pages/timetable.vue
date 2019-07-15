<template>
  <div class="container">
    <div class="title">
      <p>タイムテーブル</p>
    </div>
    <div>
      <p>開成祭のタイムテーブル一覧です。
        縦軸が時間、横軸が開催場所になっています。
        横をタップすることで場所の切り替えができます。
      </p>
      <p>場所一覧
        小講堂・本館ホール・中学視聴覚室・柔道場・第２グラウンド
      </p>
    </div>
    <div class="grid-container">
      <div>９</div>
      <div>10</div>
      <div>11</div>
      <div>12</div>
      <div>13</div>
      <div>14</div>
      <div>15</div>
      <div>16</div>
      <div></div>
    </div>
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

  }
  .title{
    color: white;
    font-size: 32px;
    padding: 80px 0px;
  }
  .grid-container{
    width: 100%;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 50px auto auto auto;
    grid-template-rows: 50px 20px 12px 0px;
  }
  .thumbnail{
    grid-column: 1;
    grid-row: 1 / 4;
   }
  .place{
    font-size: 11px;
    color: #5A5A5A;
    grid-column: 2 / 4;
    grid-row: 1;
    }
  .name{
    font-size: 20px;
    font-weight: bold;
    grid-column: 2 / 4;
    grid-row: 2;
    }
  .description{
    font-size: 12px;
    color: #5A5A5A;
    grid-column: 2 / 4;
    grid-row: 3;
    }
  .waitingtime{
    font-size: 25px;
    grid-column: 4;
    grid-row: 1 / 4;
    }
  .map{
    border-radius: 5px;
    background-color: #1B6882;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    grid-column: 1 / 3;
    grid-row: 4;
    }
  .details{
    border-radius: 5px;
    background-color: #1B6882;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
      grid-column: 3/5;
      grid-row: 4;
    }


</style>
