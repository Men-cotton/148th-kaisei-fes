<template>
      <div>
            <b-navbar>
                  <template slot="brand">
                        <b-navbar-item href="/">

                        </b-navbar-item>
                  </template>
                        <template slot="end">
                              <b-navbar-item tag="div" href="timetable">
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

</style>
