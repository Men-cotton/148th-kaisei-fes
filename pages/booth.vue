<template>
    <div id="root">
        <div id="vain-square"></div>
        <div id="title">
            <div class="box-lower box-lower-short"></div>
            <div class="box-upper box-upper-short"></div>

            <p id="title-title">模擬店</p>

            <div class="box-lower box-lower-long"></div>
            <div class="box-upper box-upper-long"></div>
        </div>

        <div id="poet">
            <!--                        <img id="beautiful-pic" src="../assets/beautiful-pic" alt="すごく美しい写真">-->
            <p id="poet-p">poet</p>
        </div>

        <div id="menu">
            <div id="menu-title">
                <img src="../assets/menu-short-deco.svg" alt="deco" class="menu-deco-short-left">
                <h1 id="menu-title-title">Menu</h1>
                <img src="../assets/menu-short-deco.svg" alt="deco" class="menu-deco-short-right">
            </div>
            <div class="menu-item">
                <h2 class="menu-location">う</h2>
                <div class="menu-menu">あ</div>
                <div class="menu-menu">あ</div>
                <button class="menu-location-button">あ</button>
            </div>
            <div class="menu-item">
                <h2 class="menu-location">う</h2>
                <div class="menu-menu">あ</div>
                <div class="menu-menu">あ</div>
                <button class="menu-location-button">あ</button>
            </div>
            <img src="../assets/menu-long-deco.svg" alt="deco" class="menu-deco-long">

        </div>
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
        <Footer/>
    </div>
</template>

<script>
    import Header from '~/components/Myheader.vue';

    export default {
        components:{
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
    }

    #menu {
        width: 95%;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 100px;
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

    #menu-title-title {
        font-family: 'Arima Madurai', cursive;
        font-style: normal;
        font-weight: normal;
        font-size: 25px;
        line-height: 52px;
        align-items: center;
        text-align: center;

        color: #232323;
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
        background-color: #495057;

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
        line-height: 46px;
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
        background: #912A55;
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
        width: 200px;
        right: 0;
        top: 25px;
    }

    .box-lower-long {
        position: absolute;
        width: 180px;
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