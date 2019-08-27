<template>
    <div id="root">
        <Header/>
        <div id="vain-square"></div>
        <div id="title">
            <div class="box-lower box-lower-short"></div>
            <div class="box-upper box-upper-short"></div>

            <p id="title-title">模擬店</p>

            <div class="box-lower box-lower-long"></div>
            <div class="box-upper box-upper-long"></div>
        </div>

        <div id="poet">
            <!--            <img id="beautiful-pic" src="../assets/beautiful-pic" alt="すごく美しい写真">-->
            <p id="poet-p">poet</p>
        </div>

        <div id="menu">
            <div id="menu-title">
                <img src="../assets/menu-short-deco.svg" alt="deco" class="menu-deco-short-left">
                <h1 id="menu-title-title">Menu</h1>
                <img src="../assets/menu-short-deco.svg" alt="deco" class="menu-deco-short-right">
            </div>
            <div class="menu-item">
                <h2 class="menu-location">うんこ</h2>
                <div class="menu-menu">あ</div>
                <div class="menu-menu">あ</div>
                <button class="menu-location-button">あ</button>
            </div>
            <div class="menu-item">
                <h2 class="menu-location">うんこ</h2>
                <div class="menu-menu">あ</div>
                <div class="menu-menu">あ</div>
                <button class="menu-location-button">あ</button>
            </div>
            <img src="../assets/menu-long-deco.svg" alt="deco" class="menu-deco-long">

        </div>
        <div id="notice">
            <h1 id="notice-notice">Notice</h1>
            <div class="notice-item">
                <h2 class="notice-item-title"></h2>
                <p class="notice-item-paragraph"></p>
            </div>

            <div class="notice-item">
                <h2 class="notice-item-title"></h2>
                <p class="notice-item-paragraph"></p>
            </div>
            <h3 id="notice-mogiten">Mogiten</h3>
        </div>
        <div class="footer-box-wrapper">
            <div class="box-lower footer-box-lower"></div>
            <div class="box-upper footer-box-upper"></div>
        </div>
        <Footer/>
    </div>
</template>

<script>
    export default {
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

    #root {
        background: #E9E6DB;
    }

    #menu {
        width: 95%;
        left:2.5%;
        position: relative;
    }
    .menu-deco-short-left{
        position: absolute;
        top :10px;
        left:5px;
    }
    .menu-deco-short-right{
        position: absolute;
        right:5px;
        top :10px;
    }
    .menu-deco-long{
        text-align: center;
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

    #notice{}
    #notice-notice{
        font-family: Abel,sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 31px;
        /* identical to box height */

        display: flex;
        align-items: center;
        text-align: center;

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
</style>