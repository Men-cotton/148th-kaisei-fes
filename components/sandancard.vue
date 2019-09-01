<template>
  <div class="card">
    <div v-on:click="tap=!tap" class="grid-container">
      <div class="thumbnail"><img src="" height="55px"></img></div>
      <div class="place">{{ project.Place }} {{project.Room}}</div>
      <div class="name">{{ project.Name }}</div>
      <div class="description">{{ project.Description }}</div>
      <div class="waitingtime">1<span class="minute">分</span></div>
    </div>
    <div class="grid-container2">
      <div v-show=tap class="buttons map"><p>マップを見る</p></div>
      <div v-show=tap class="buttons details"><p>詳しく</p></div>
    </div>
    <div v-show="tap" class="describe-more">
      <div class="about-this"><img src="~/assets/sectionmark_alone.svg"><p>この団体について</p></div>
      <div>{{project.Sandan-introduction}}</div>
      <div class="about-this"><img src="~/assets/sectionmark_alone.svg"><p>Image</p></div>
      <div>{{project.Thumbnail}}</div>
      <div class="about-this"><img src="~/assets/sectionmark_alone.svg"><p>宣伝...</p></div>
      <div>{{project.Sandan-introduction}}</div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "sandancard",
        props: ['project'],
        data() {
            return {
                tap: false,
            }
        }
    }
</script>

<style scoped>
  .card {
    margin: 10px 0;
    border: solid 0.5px #828282;
    border-radius: 10px;
    background-color: #F8F9FA;
    padding: 10px 10px;
    align-items: center;
  }


  .grid-container {
    display: grid;
    grid-template-columns: 55px auto 45px;
    grid-template-rows: 21px 24px 20px;
  }

  .thumbnail {
    grid-column: 1;
    grid-row: 1 / 4;
  }

  .place {
    text-align: start;
    font-size: 13px;
    color: #495057;
    grid-column: 2 / 3;
    grid-row: 1;
  }

  .name {
    font-size: 19px;
    font-weight: bold;
    grid-column: 2 / 3;
    grid-row: 2;
  }

  .description {
    font-size: 13px;
    color: #912A55;
    grid-column: 2 / 3;
    grid-row: 3;
  }

  .waitingtime {
    font-size: 30px;
    display: flex;
    align-items: center;
    text-align: center;

    grid-column: 3;
    grid-row: 1 / 4;
  }

  .minute {
    font-size: 15px;
    margin-top: 10px;
  }

  .grid-container2 {
    display: grid;
    grid-template-columns: 49.5% 1% 49.5%;
  }

  .map {
    grid-column: 1/2;
  }

  .details {
    grid-column: 3/4;
  }
  .describe-more{
    margin: 0 10px;
  }
  .about-this{
    display: flex;
    flex-direction: row;
    font-size: 18px;
    padding-top: 7px;
  }
  .about-this >p{
    position: relative;
    left: 5px;
  }
</style>