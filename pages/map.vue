<template>
    <div id="container">
        <Head></Head>
        <h1 id="title">校内マップ</h1>
        <div>
            <iframe :src="'/SVG/' + map_src" style="width:95vmin; height:95vmin; overflow:hidden; border: none;"
                    id="map"></iframe>
        </div>

        <!--        <div id="suggestion">-->
        <!--            <h2 id="suggestion-text">以下の場所をお探しですか？</h2>-->
        <!--            <div class="suggestion-item">-->
        <!--                <h3 class="suggestion-location-name"></h3>-->
        <!--            </div>-->
        <!--        </div>-->
    </div>
</template>

<script>
    import Head from "~/components/Myheader.vue"



    export default {
        name: "map",
        data() {
            return {
                map_src:""
            }
        },
        head() {
            return {
                meta:
                    [
                        {charset: 'utf-8'},
                        {name: 'viewport', content: 'width=device-width, initial-scale=1'}
                    ]
            }
        },
        components: {
            Head,
        },

        methods: {
            setMap: function () {
                const urlP = location.search;
                let Param = new URLSearchParams(urlP);
                if (Param.has("p")) {
                    this.map_src = Param.get("p") + ".html";
                } else {
                    this.map_src = "All.html";
                }
                console.log(this.map_src);
            }
        },

        mounted: function () {
            this.setMap();
        },

    }
</script>

<style scoped>
    #container {
        background-color: #411445;

    }

    #title {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        margin-top: 50px;
        margin-bottom: 30px;
        padding-top: 50px;
        padding-bottom: -20px;

        font-style: normal;
        font-weight: bold;
        font-size: 32px;

        width: 50%;
        max-width: 300px;

        color: white;

        border-bottom: 1px solid #CCBD14;

        /* white */
    }

    #map {
        position: relative;
        left: 50%;
        transform: translateX(-50%);

        border-radius: 5vmin;

        max-width: 500px;
        max-height: 500px;
        margin-bottom: 100px;
    }


</style>