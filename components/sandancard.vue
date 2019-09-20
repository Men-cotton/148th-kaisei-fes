<template>
  <div class="card">
    <div v-on:click="cardUpdate" class="grid-container">
      <div class="thumbnail"><img :src="img_src" height="55px"></div>
      <div class="place">{{ project.Place }} {{project.Room}}</div>
      <div class="name">{{ project.Name }}</div>
      <div class="description">{{ project.Description }}</div>
    </div>
    <div v-show=tap class="grid-container2">
      <nuxt-link v-bind:to="{name:'projects-id',params:{id:project.id}}"><div class="buttons map"><p>マップを見る</p></div></nuxt-link>
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

<script src="https://www.gstatic.com/firebasejs/5.10.1/firebase.js"/>
<script>
    import * as firebase from "firebase/app";
    import "firebase/storage";

    const firebaseConfig = {
        apiKey: "AIzaSyDzflD6t_Q4_J5YUncEibNGxqvOad-yfw0",
        authDomain: "kaisei-fes.firebaseapp.com",
        databaseURL: "https://kaisei-fes.firebaseio.com",
        projectId: "kaisei-fes",
        storageBucket: "kaisei-fes.appspot.com",
        messagingSenderId: "740800746798",
        appId: "1:740800746798:web:adf5b003b15d0d6a"
    };
    firebase.initializeApp(firebaseConfig);

    var storageRef = firebase.storage().ref();


    export default {
        name: "sandancard",
        props: ['project'],
        data() {
            return {
                tap: false,
                moreinfo: false,
                link: '',
            }
        },
        methods: {
            cardUpdate: function () {
                this.tap = !this.tap;
                this.moreinfo = false;
            },
        },
        computed: {
            img_src: function () {
                if (this.project.Thumbnail == '') return 'https://www.myoji-yurai.net/profileImages/noimage.png';
                else {
                    var childRef = storageRef.child(this.project.Thumbnail);
                    childRef.getDownloadURL().then((url) => this.link = url);
                    return this.link;
                }
            }
        }
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
    grid-template-columns: 55px auto;
    grid-template-rows: 18px 26px 20px;
  }

  .thumbnail {
    display: flex;
    justify-content: center;
    flex-direction: column;

    grid-column: 1;
    grid-row: 1 / 4;
  }

  .thumbnail > img {
    border-radius: 27.5px;
    height: 50px;
    width: 50px;
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