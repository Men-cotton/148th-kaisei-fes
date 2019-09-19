<template>
    <div id="root">
        <Header/>
        <div id="vain-square"></div>
        <div id="title">
            <div class="box-lower box-lower-short"></div>
            <div class="box-upper box-upper-short"></div>

            <p id="title-title">喫茶 令和</p>

            <div class="box-lower box-lower-long"></div>
            <div class="box-upper box-upper-long"></div>
        </div>

        <div id="poet">
            <img id="beautiful-pic" src="../assets/waffle.jpg" alt="すごく美しい写真">
            <p id="poet-p">落ち着いた幸せ空間。A会場２階で運営中！</p>
        </div>

        <div id="menu">
            <div id="menu-title">
                <img src="../assets/menu-short-deco.svg" alt="deco" class="menu-deco-short-left">
                <h1 id="menu-title-title">Menu</h1>
                <img src="../assets/menu-short-deco.svg" alt="deco" class="menu-deco-short-right">
            </div>
            <div class="menu-item">
                <div class="menu-location">
                    <img src="../assets/hotsandwich.jpg" class="menu-location-photo" alt="booth-b-picture">
                    <div class="menu-location-text">ホットサンド</div>
                    <img src="../assets/waffle.jpg" class="menu-location-photo" alt="booth-b-picture">
                    <div class="menu-location-text">ワッフル</div>
                    <img src="../assets/chrros.jpg" class="menu-location-photo" alt="booth-b-picture">
                    <div class="menu-location-text">チュロス</div>
                    <img src="../assets/tapioca.jpg" class="menu-location-photo" alt="booth-b-picture">
                    <div class="menu-location-text">タピオカ</div>
                </div>
                <div class="menu-menu">
                    <div class="menu-menu-item">ホットサンド</div>
                    <div class="menu-menu-sum">300  yen</div>
                </div>
                <div class="menu-description">
                    ピザ・ピーナッツバター・カレー
                </div>

                <div class="menu-menu">
                    <div class="menu-menu-item">ワッフル</div>
                    <div class="menu-menu-sum">300  yen</div>
                </div>
                <div class="menu-description">
                抹茶・ベリーベリー
                </div>
                <div class="menu-menu">
                    <div class="menu-menu-item">チュロス</div>
                    <div class="menu-menu-sum">150  yen</div>
                </div>
                <div class="menu-description">
                    ごま＆きな粉・シナモンシュガー
                </div>
                <div class="menu-menu">
                    <div class="menu-menu-item">タピオカ</div>
                    <div class="menu-menu-sum">300  yen</div>
                </div>
                <div class="menu-description">
                    ミルクティー・マンゴー
                </div>
                <div class="menu-menu">
                    <div class="menu-menu-item">ケーキ</div>
                    <div class="menu-menu-sum">300  yen</div>
                </div>
                <div class="menu-description">
                    くまのチョコ・フルーツショート・チーズ
                </div>

                <div class="menu-menu">
                    <div class="menu-menu-item">ドリンク</div>
                    <div class="menu-menu-sum">150 yen</div>
                </div>
                <div class="menu-description">
                    コーヒー(Ice/hot)・アイスティー・コーラ・りんごジュース・オレンジジュース・ジンジャーエール
                </div>



                <button class="buttons menu-item-button">マップを見る</button>
            </div>
            <div class="menu-item">
                <div class="menu-location">
                    <img src="../assets/chrros.jpg" class="menu-location-photo" alt="booth-tennis-court-picture">
                    <div class="menu-location-text">喫茶令和、A会場２階にて営業中！</div>
                </div>
                <button class="buttons  menu-item-button">マップを見る</button>
            </div>
            <img src="../assets/menu-long-deco.svg" alt="deco" class="menu-deco-long">

            </div>
        <!--
        <div id="notice">

            <img src="../assets/notice-line-vertical-long.svg" alt="線" class="notice-deco-left notice-deco-top">
            <h1 id="notice-notice">Notice</h1>
            <img src="../assets/notice-line-vertical-long.svg" alt="線" class="notice-deco-right notice-deco-top">
            <div id="notice-color-box">
                <div class="notice-item">
                    <h2 class="notice-item-title">《開成焼き・チヂミ購入案内》</h2>
                    <p class="notice-item-paragraph">
                        　開成焼き・チヂミの購入には、食券が必要です。お買い求めの方は、まずテニスコートの部室棟2階に設置された券売機までお進みください。食券に記載された時間帯に商品の引き換えを中庭にて行わせていただきますので、その際には委員の誘導にしたがってください。
                        　なお、生産状況等によっては食券の購入を制限させていただく場合がございますので予めご了承ください。</p>
                    <div class="notice-line-vertical-right"></div>
                    <div class="notice-line-vertical-left"></div>
                </div>
                <div id="notice-line-t-right"></div>
                <div id="notice-line-t-left"></div>
                <div class="notice-item">
                    <h2 class="notice-item-title">《ドリンク・かき氷購入案内》</h2>
                    <p class="notice-item-paragraph">
                        　ドリンク・かき氷は、テニスコート奥のテントにて会計を行います。お買い求めの方は、直接テニスコートの方までお越しください。お並びになる際には委員の誘導にしたがってください。
                        　なお荒天時には販売を中止させていただく場合がございます。</p>
                    <div class="notice-line-vertical-right"></div>
                    <div class="notice-line-vertical-left"></div>
                </div>
            </div>
            <img src="../assets/notice-line-vertical-long.svg" alt="線" class="notice-deco-left notice-deco-bottom">
            <h3 id="notice-mogiten">Mogiten</h3>
            <img src="../assets/notice-line-vertical-long.svg" alt="線" class="notice-deco-right notice-deco-bottom">

        </div>
        <div id="empty-box"></div>
        <div class="footer-box-wrapper">
            <div class="box-lower footer-box-lower"></div>
            <div class="box-upper footer-box-upper"></div>
        </div>
        -->
        <Footer/>
    </div>
</template>

<script>

    import Header from '~/components/Myheader.vue';

    export default {
        layout(context){
            return 'default'
        },
        components: {
            Header
        },

        head() {
            return {
                meta:
                    [
                        {charset: 'utf-8'},
                        {name: 'viewport', content: 'width=device-width, initial-scale=1'}
                    ]
            }
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Noto+Sans&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Abel|Arima+Madurai:300&display=swap');

    :root {
        background: #E9E6DB;
    }

    #root {
        background: #E9E6DB;
        margin-top: 54px;
    }

    #beautiful-pic{
        width:100vw;
        max-width: 600px;
        position: relative;
        left:50%;
        transform: translateX(-50%);
    }

    #poet-p{
        position: relative;
        text-align: center;
        margin-top:-50px;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 23px;
        background-color: rgba(255,255,255,0.3);
    }

    #menu {
        width: 95%;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 150px;
        max-width: 500px;
        min-width: 350px;
    }

    .menu-deco-short-left {
        position: absolute;
        top: 10px;
        left: 5px;
    }

    .menu-deco-short-right {
        position: absolute;
        right: 5px;
        top: 10px;
    }

    .menu-deco-long {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
    }

    #menu-title{
        position: relative;
        height:56px;
    }


    #menu-title-title {
        font-family: 'Arima Madurai', cursive;
        font-style: normal;
        font-weight: normal;
        font-size: 25px;
        line-height: 52px;

        position: absolute;

        top:50%;
        left : 50%;

        transform: translateX(-50%) translateY(-50%);


        color: #232323;
    }

    .menu-item-button{
        position:relative;
        left:100%;
        transform: translateX(-110%);
        margin-top:20px;
        margin-bottom: 40px;
    }

    .menu-location-text{
        width:100%;
        max-width: 600px;
        background-color: white;
        font-family: Noto Sans JP,sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 20px;
        /* or 100% */

        display: flex;
        align-items: center;
        text-transform: capitalize;

        width:100vw;
        position: relative;
        top:-44px;
        left:50%;

        transform: translateX(-50%);

        height:40px;

        padding-left:10px;

        opacity: 0.5;

        margin-bottom:-44px;


        color: #000000;
    }



    .menu-menu-item {
        font-family: Noto Sans JP;
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 20px;
        /* identical to box height, or 111% */

        display: flex;
        align-items: center;
        text-transform: capitalize;

        margin-right: auto;
    }

    .menu-menu-item::before{
        content: url("../assets/images/booth/dot.png");
        display: inline;

        transform: translateY(-4px);
        margin-left:10px;
        margin-right: 10px;
    }

    .menu-menu-sum{
        font-family: Abel;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 20px;
        /* identical to box height, or 111% */

        display: flex;
        align-items: center;
        text-transform: capitalize;

        padding-right:20px;

        color: #000000;
    }

    .menu-menu-sum::before{
        content: url("../assets/images/booth/line.png");
        margin-right: 10px;
    }

    .menu-description{
        font-family: Noto Sans JP;
        font-style: normal;
        font-weight: 300;
        font-size: 13px;
        line-height: 20px;

        display: flex;
        align-items: center;
        text-transform: capitalize;

        padding-top:10px;
        padding-left:20px;

        color: #000000;
    }

    .menu-location-photo{
        width:100vw;
        max-width: 600px;
        position: relative;

        left:50%;

        transform: translateX(-50%);
    }

    .menu-menu {
        display: flex;
        padding-top:20px;
        justify-content: flex-end;
    }


    #notice-color-box {
        background-color: #E9DBCE;
        width: 80%;
        left: 10%;
        position: relative;
    }

    #notice {
        width: 95%;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 150px;
        margin-bottom: 100px;
        max-width: 500px;
        min-width: 350px;
    }

    #notice-notice {
        font-family: Abel, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 31px;
        /* identical to box height */
        text-align: center;
        position: relative;
        top: -20px;
    }

    .notice-item {
        position: relative;
    }

    .notice-deco-left {
        position: absolute;
        left: 0;
    }

    .notice-deco-right {
        position: absolute;
        right: 0;
    }

    .notice-deco-top {
        position: absolute;
        top: 0;
    }

    .notice-deco-bottom {
        position: absolute;
        bottom: 0;
    }


    #notice-mogiten {
        font-family: Abel, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 31px;
        /* identical to box height */

        text-align: center;
        position: relative;
        top: 15px;
    }

    .notice-item-title {
        font-family: Noto Sans JP, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 20px;
        text-align: center;

        padding-top: 20px;
        padding-bottom: 5px;

    }

    .notice-item-paragraph {
        width: 90%;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 23px;
        color: #495057;

        position: relative;
        left: 50%;
        transform: translateX(-50%);

        padding-bottom: 20px;
    }


    #notice-line-t-right {
        position: relative;
        transform: translateX(-50%);
        width: 40px;
        height: 0;
        border: solid 1px #1B6882;
    }

    #notice-line-t-left {
        position: relative;
        transform: translateX(-50%);
        width: 40px;
        left: 100%;
        top: -2px;
        height: 0;
        border: solid 1px #1B6882;
    }

    .notice-line-vertical-left {
        position: absolute;
        height: 90%;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        border: 1px solid #1B6882;
    }

    .notice-line-vertical-right {
        position: absolute;
        height: 90%;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        border: 1px solid #1B6882;
    }


    #vain-square {
        width: 100%;
        height: 25px;
        background: #EAEFF2;
    }

    #title {
        width: 100%;
        height: 65px;
        background-color: #0096AE;

        display: flex;
        position: relative;
        align-items: center;
        justify-items: center;
    }

    #title-title {
        font-family: Noto Sans JP, serif;
        font-style: normal;
        font-weight: 300;
        font-size: 32px;
        display: flex;
        align-items: center;


        /* white */

        color: #F8F9FA;

        position: absolute;
        left: 45px;
    }

    .box-lower {
        background: #411445;
        height: 10px;
    }

    .box-upper {
        background: #CE371A;
        height: 10px;
    }

    .box-upper-short {
        position: absolute;
        width: 20px;
        left: 0;
        top: 25px;
    }

    .box-lower-short {
        position: absolute;
        width: 30px;
        left: 0;
        top: 30px;
    }

    .box-upper-long {
        position: absolute;
        width: 150px;
        right: 0;
        top: 25px;
    }

    .box-lower-long {
        position: absolute;
        width: 130px;
        right: 0;
        top: 30px;
    }

    .footer-box-wrapper {
        position: relative;
    }

    .footer-box-upper {
        width: 100%;
        position: absolute;
        top: 0;
    }

    .footer-box-lower {
        width: 100%;
        position: absolute;
        top: 5px;
    }

    #empty-box {
        height: 100px;
    }
</style>