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
         <td>小講堂</td> <td id="auditorium_delay"></td> <td  id="auditorium_group"></td>
        </tr>
        <tr>
          <td>食堂</td> <td id="hall_delay"></td> <td id="hall_group"></td>
        </tr>
        <tr>
         <td>中学視聴覚室</td > <td id="audiovisual_delay"></td> <td id="audiovisual_group"></td>
        </tr>
      </table>
    </div>
    <div class="p-alone"><img src="../assets/sectionmark_alone.svg"><p>参団混雑状況</p></div>
    <div class="menu-desc">
      <p><strong>混雑している参団</strong></p>
      <div id="crowded"></div>
      <p><strong>空いている参団</strong></p>
      <div id="empty"></div>
    </div>
    <p id="lottery">チケット抽選結果</p>
    <p id="note">備考</p>
  </div>

</template>


<script>
    import Header from '~/components/Myheader.vue'
    import firebase from "firebase";
    import "firebase/storage";

    // Your web app's Firebase configuration
 const firebaseConfig={
   apiKey: "AIzaSyCJmoENVUJ-GBk9EgNAhHjIPcQmEFKtHhA",
   authDomain: "realtime-253416.firebaseapp.com",
   databaseURL: "https://realtime-253416.firebaseio.com",
   projectId: "realtime-253416",
   storageBucket: "realtime-253416.appspot.com",
   messagingSenderId: "378184994132",
   appId: "1:378184994132:web:b30698159ff14affbd8cc1"
 };
    // Initialize Firebase
    if (!firebase.apps.length) {
		  firebase.initializeApp(firebaseConfig);
    }
    var db = firebase.firestore();

    //db.collection("fes").doc("crowded").A101=true;

    var doccrowded = db.collection("fes").doc("crowded");

    doccrowded.get().then(function (doc) {

      if (doc.exists) {
        var num2name = [
          { num: "A101", name: "バンド演奏" },
          { num: "A103", name: "バンド演奏" },
          { num: "A201", name: "ワールドチェスクラブ" },
          { num: "A202", name: "Never to Return" },
          { num: "A203", name: "古本市" },
          { num: "A211", name: "にほんごで遊ぶ男たち2nd" },
          { num: "A212", name: "ア・カペラ" },
          { num: "A301", name: "鉄研の車窓から2019" },
          { num: "A302", name: "DCG Project" },
          { num: "A303", name: "プラネタリウム" },
          { num: "A304", name: "天文気象部" },
          { num: "A305", name: "金の匙 Returns" },
          { num: "A306-1", name: "銃は剣よりも強し" },
          { num: "A306-2", name: "弱くても勝てます 6th" },
          { num: "A307", name: "大道芸、自由自在。" },
          { num: "A308", name: "Kaisei Casino Group" },
          { num: "A401", name: "クイズ研究部" },
          { num: "A402", name: "Let's talk Kaisei 2019" },
          { num: "A403", name: "弁論文春" },
          { num: "A404", name: "開成合格のための裏試験Ⅱ" },
          { num: "A405", name: "数学研究部" },
          { num: "A406", name: "賭博酒場" },
          { num: "A407", name: "ムッキーズFINAL" },
          { num: "A408", name: "彼女は手品好き?" },
          { num: "B201", name: "R×R Anima-tion!" },
          { num: "B202", name: "カジノ処in道灌山" },
          { num: "B203", name: "おばけTHEシューティング" },
          { num: "B204", name: "江戸城を奪還せよ！" },
          { num: "B205", name: "野比家からの大脱出！" },
          { num: "B206", name: "迷Q" },
          { num: "B207", name: "勝率10％" },
          { num: "B211", name: "プロジェクトK＆PV中継" },
          { num: "B301", name: "スペースウォーズ" },
          { num: "B302", name: "パズル参団エニグマ16" },
          { num: "B303", name: "ポケモンリーグカイセイ" },
          { num: "B304-1", name: "~沈~（しずみ）" },
          { num: "B304-2", name: "サラブレッド研究同好会" },
          { num: "B304-3", name: "開成写真館" },
          { num: "B304", name: "文芸部" },
          { num: "B304-5", name: "遊戯的背景音楽論" },
          { num: "B305", name: "折り紙研究部" },
          { num: "B306", name: "飛車ちゅうFOCUS" },
          { num: "B307", name: "社会科研究部 70th" },
          { num: "B401", name: "COSMOSTARR" },
          { num: "B402-1", name: "紳士の娯楽" },
          { num: "B402-2", name: "美術部" },
          { num: "B403", name: "GO GO VR!" },
          { num: "B404", name: "クリプトグラファー" },
          { num: "B405-2", name: "NeXUS PLUS" },
          { num: "B406-1", name: "紫雁俳句会" },
          { num: "B406-2", name: "開成書道展" },
          { num: "B407", name: "囲碁サロン開成" },
          { num: "B412", name: "圧倒的..コンピューター部" },
          { num: "B501", name: "開成管弦楽団 室内楽演奏会" },
          { num: "B502", name: "演劇部" },
          { num: "C101", name: "進撃の生物部" },
          { num: "C102", name: "開成模型製作所" },
          { num: "C201", name: "物理部本館" },
          { num: "C202", name: "開成模型製作所" },
          { num: "C203", name: "物理部ゲーム館" },
          { num: "C301", name: "開成鉱石・化石館" },
          { num: "C303", name: "音楽部アンサンブル" },
          { num: "C401", name: "大化学実験" },
          { num: "C402", name: "大化学実験" },
        ];

        //連想配列をループ処理で値を取り出してセレクトボックスにセットする
        for (var i = 0; i < num2name.length; i++) {
          // a 要素の作成と属性の指定
          var newP = document.createElement("p");
          var newTxt = document.createTextNode(num2name[i].name);
          newP.appendChild(newTxt);
          if (doc.data()[num2name[i].num]) {
            document.getElementById("crowded").appendChild(newP);
          } else {
            document.getElementById("empty").appendChild(newP);
          }
        }
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }).catch(function (error) {
      console.log("Error getting document:", error);
    });

    var docothers = db.collection("others").doc("others");

    docothers.get().then(function (doc) {
      document.getElementById("lottery").value = doc.data().lottery;
      document.getElementById("note").value = doc.data().note;
    }).catch(function (error) {
      console.log("Error getting document:", error);
    });

  db.collection("stage").doc("auditorium").get().then(function (doc) {
    if (doc.exists) {
      document.getElementById("auditorium_delay").value = doc.data().delay;
      document.getElementById("auditorium_group").value = doc.data().group;
    } else {
      console.log("No such document!");
    }
  }).catch(function (error) {
    console.log("Error getting document:", error);
  });


  db.collection("stage").doc("hall").get().then(function (doc) {
    if (doc.exists) {
      document.getElementById("hall_delay").value = doc.data().delay;
      document.getElementById("hall_group").value = doc.data().group;
    } else {
      console.log("No such document!");
    }
  }).catch(function (error) {
    console.log("Error getting document:", error);
  });

  db.collection("stage").doc("audiovisual").get().then(function (doc) {
    if (doc.exists) {
      document.getElementById("audiovisual_delay").value = doc.data().delay;
      document.getElementById("audiovisual_group").value = doc.data().group;
    } else {
      console.log("No such document!");
    }
  }).catch(function (error) {
    console.log("Error getting document:", error);
  });

    export default {
      data() {
        return {
          firebaseConfig: firebaseConfig,
        }
      },
      components: {
        Header
      },
    }
</script>

<!-- The core Firebase JS SDK is always required and must be listed first -->


  <!-- TODO: Add SDKs for Firebase products that you want to use
       https://firebase.google.com/docs/web/setup#config-web-app -->
  


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