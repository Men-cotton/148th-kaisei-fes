<template>
  <div class="card">
    <div v-on:click="cardUpdate" class="grid-container">
      <!-- <div class="thumbnail"><img :src="require('~/assets'+'/images/4-6.jpeg')" height="55px"></div> -->
      <div class="place">{{ project.Place }} {{project.Room}}</div>
      <div class="name">{{ project.Name }}</div>
      <div class="description">{{ project.Description }}</div>
      <div class="waitingtime">0<span class="minute">分</span></div>
    </div>
    <div v-show=tap class="grid-container2">
      <div class="buttons map"><p>マップを見る</p></div>
      <div v-on:click="moreinfo=!moreinfo" class="buttons details"><p>詳しく</p></div>
    </div>
    <div v-show=moreinfo class="describe-more">
      <div class="about-this"><img src="~/assets/sectionmark_alone.svg">
        <p>この団体について</p>
      </div>
      <div v-html="project.Introduction"></div>
      <!--
      <div class="about-this"><img src="~/assets/sectionmark_alone.svg">
        <p>Image</p></div>
      <div>{{project.Thumbnail}}</div>
      -->
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
                moreinfo: false,
            }
        },
        methods: {
            cardUpdate: function () {
                this.tap = !this.tap;
                this.moreinfo = false;
            }
        },
    }
</script>

<style scoped>
  .card {
    margin: 5px 0;
    border: solid 0.5px #828282;
    border-radius: 10px;
    background-color: #F8F9FA;
    padding: 10px 10px;
    align-items: center;
  }


  .grid-container {
    display: grid;
    grid-template-columns: 55px auto 40px;
    grid-template-rows: 18px 26px 20px;
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
    text-align: right;

    grid-column: 3;
    grid-row: 1 / 4;
  }

  .minute {
    font-size: 18px;
    margin-top: 10px;
  }

  @media screen and (min-width: 750px) {
    .card {
      margin: 5px 0;
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
  }

  @media screen and (max-width: 750px) {
    .grid-container2 {
      grid-template-columns: 100%;
      grid-template-rows: 40px 40px;
      grid-gap: 10px;
    }

    .map {
      grid-row: 1/2;
    }

    .details {
      grid-row: 2/3;
    }
  }

  .describe-more {
    margin: 0 10px;
  }

  .about-this {
    display: flex;
    flex-direction: row;
    font-size: 18px;
    padding-top: 7px;
  }

  .about-this > p {
    position: relative;
    left: 5px;
  }
</style>