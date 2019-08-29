<template>
      <div class="container">
            <div type="button" class="menu-icon" v-on:click="toggle">
                  <hamburger></hamburger>
            </div>
            <div class="menu" v-show="isOpen">
                  <ul class="menu-list">
                        <li><n-link to="information" no-prefetch>ご案内</n-link></li>
                        <li><n-link to="map" no-prefetch>校内マップ</n-link></li>
                        <li><n-link to="sandan" no-prefetch>企画一覧</n-link></li>
                        <li><n-link to="timetable" no-prefetch>タイムテーブル</n-link></li>
                        <li><n-link to="menu" no-prefetch>食品メニュー</n-link></li>
                        <li><n-link to="feature" no-prefetch>文化祭特集</n-link></li>
                  </ul>
            </div>
      </div>
</template>

<script>
      import hamburger from '~/components/hamburger.vue'


      export default {
            components:{
                  hamburger
            },
            data () {
                  return {
                        isOpen: false,
                        iconText: 'menu'
                  }
            },
            methods: {
                  toggle: function() {
                        this.isOpen = !this.isOpen;
                        this.iconText = this.isOpen ? 'close' : 'menu';
                  }
            }
      }


</script>

<style>
      .container{
            height: 100vh;
      }


      .menu-icon {
            height: 70px;
            background-color: #411445;
            border: none;
            cursor: pointer;
            outline: none;
      }

      .menu-list {
            padding: 20px 0;
            background: #411445;
            list-style-type: none;
            text-align: center;
      }

</style>
