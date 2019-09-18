<template>
    <div id="container">
        <Head></Head>
        <h1 id="title">校内マップ</h1>
        <div>
            <iframe src="/SVG/All.html" style="width:95vmin; height:95vmin; overflow:hidden; border: none;" id="map"></iframe>
        </div>
        <Foot></Foot>
    </div>
</template>

<script>
    import Head from "~/components/Myheader.vue"
    import Foot from "~/components/Myfooter.vue"
    export default {
        name: "map",
        head() {
            return {
                meta:
                    [
                        {charset: 'utf-8'},
                        {name: 'viewport', content: 'width=device-width, initial-scale=1'}
                    ]
            }
        },
        components:{
            Head,
            Foot
        }

    }
</script>

<style scoped>
    #container{
        background-color: #411445;
    }

    #title{
        position:relative;
        left:50%;
        transform: translateX(-50%);
        text-align: center;
        margin-top:50px;
        margin-bottom:30px;
        padding-top:50px;
        padding-bottom:-20px;

        font-family: Noto Sans JP;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;

        width:40%;
        max-width:300px;

        color:white;

        border-bottom: 1px solid #CCBD14;

        /* white */
    }
    #map {
        position: relative;
        left: 50%;
        transform: translateX(-50%);

        border-radius: 5vmin;

        max-width:500px;
        max-height: 500px;
        margin-bottom:100px;
    }
</style>