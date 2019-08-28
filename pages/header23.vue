<template>
      <div>
            <b-navbar>
                  <template slot="brand">
                        <b-navbar-item href="/">

                        </b-navbar-item>
                  </template>
                        <template slot="end">
                              <b-navbar-item href="timetable">
                                    タイムテーブル
                              </b-navbar-item>
                              <b-navbar-item href="sandan">
                                    規格一覧
                              </b-navbar-item>
                        </template>

            </b-navbar>


      </div>
</template>

<script>
      import BNavbar from "buefy/src/components/navbar/Navbar";
      import BNavbarItem from "buefy/src/components/navbar/NavbarItem";

      export default {
            components: {
                  BNavbarItem,
                  BNavbar,
            }

      }


</script>

<style>
      body {
            align-items: center;
            display: flex;
            height: 100vh;
            justify-content: center;
            margin: 0;
      }
      svg {
            height: 80px;
            position: absolute;
            width: 80px;
      }
      .plates {
            display: flex;
            flex-wrap: wrap;
            max-height: 160px;
            width: 640px;
      }
      @media (max-width: 640px) {
            .plates {
                  width: 320px;
            }
      }
      .plate {
            height: 80px;
            width: 80px;
      }
      .burger {
            filter: url(#gooeyness);
      }
      .x {
            transform: scale(0);
            transition: transform 300ms;
      }
      .line {
            fill: none;
            stroke: black;
            stroke-width: 6px;
            stroke-linecap: round;
            stroke-linejoin: round;
            transform-origin: 50%;
            transition: stroke-dasharray 400ms 200ms, stroke-dashoffset 400ms 200ms, transform 400ms 200ms;
      }
      .x .line {
            stroke-width: 5.5px;
      }
      /* First plate */

      .active .x {
            transform: scale(1);
            transition: transform 300ms 250ms;
      }
      /* El segundo plato */

      /* O terceiro prato */

      /* Den femte rätten */
      .plate5 .line {
            transition: stroke-dasharray 300ms 100ms, stroke-dashoffset 300ms 100ms, transform 300ms 100ms;
      }
      .plate5 .line1 {
            stroke-dasharray: 40 40;
      }
      .plate5 .line2 {
            stroke-dasharray: 21 39;
      }
      .plate5 .line3 {
            stroke-dasharray: 21 39;
      }
      .plate5 .line4 {
            stroke-dasharray: 40 40;
      }
      .plate5 .x {
            transition: transform 300ms 50ms;
      }

      .active.plate5 .line {
            transition: stroke-dasharray 300ms, stroke-dashoffset 300ms, transform 300ms;
      }
      .active.plate5 .line1 {
            stroke-dasharray: 1 40;
            stroke-dashoffset: -33px;
      }
      .active.plate5 .line2 {
            stroke-dasharray: 5 39;
            stroke-dashoffset: -37px;
      }
      .active.plate5 .line3 {
            stroke-dasharray: 5 39;
            stroke-dashoffset: -37px;
      }
      .active.plate5 .line4 {
            stroke-dasharray: 1 40;
            stroke-dashoffset: -33px;
      }
      .active.plate5 .x {
            transition: transform 300ms 50ms;
      }
      /* Шестая пластина */

</style>
