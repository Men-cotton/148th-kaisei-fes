<template>
      <div>
            <div type="button" class="menu-icon" v-on:click="toggle">
                  <hamburger></hamburger>
            </div>
            <div class="menu" v-show="isOpen">
                  <ul class="menu-list">
                        <li>企画一覧</li>
                        <li>タイムテーブル</li>
                        <li>食品メニュー</li>
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
      .menu-icon {
            background-color: transparent;
            border: none;
            cursor: pointer;
            outline: none;
      }

      .menu-list {
            list-style-type: none;
            text-align: left;
      }

</style>
