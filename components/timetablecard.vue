<template>
  <div class="card">
    <div class="group" v-bind:style="{'grid-row': start_row + '/' + (end_row + 1)}">{{event.name}}</div>
    <div class="group-time" v-bind:style="{'grid-row': start_row}">{{event.start_time}}</div>
    <!-- <div class="name"></div> -->
    <div class="group-time" v-bind:style="{'grid-row': end_row}">{{event.end_time}}</div>
  </div>
</template>

<script>
    function calcRow(begin, time) {
        var times = time.split(':');
        var hour = parseInt(times[0]) - 9;
        var minute = parseInt(times[1]);
        var clock = hour * 60 + minute;

        if (begin) {
            if (clock % 15 == 10) clock += 5;
        } else {
            if (clock % 15 == 5) clock -= 5;
            if (clock % 15 == 0) clock -= 0.1;
        }
        return Math.floor(clock / 15) + 1;
    }

    export default {
        name: "timetablecard",
        props: ['event'],
        computed: {
            start_row: function () {
                return Math.min(this.end_row - 1, calcRow(true, this.event.start_time));
            },
            end_row: function () {
                return calcRow(false, this.event.end_time);
            }
        },
    }
</script>

<style scoped>
  .card {
    position: absolute;
    left: 20px;
    width: calc(100% - 40px);
    display: grid;
    grid-gap: 0px;
    grid-template-columns: 40px 1px 50px auto 1px;
    grid-template-rows: repeat(32, 32.5px);
    grid-auto-flow: column;
  }

  /*1日目小講堂*/
  .group {
    font-size: 20px;
    color: #000000;
    padding: 5px 5px 5px 25px;
    background: #F8F9FA;
    border: 1px solid #CCBD14;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: 3/5;
  }

  .group-time {
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: 3/4;
  }
</style>