<template>
      <div>
            <h1></h1>

            <input style="display: none" id="burger" type="checkbox" />
            <label for="burger">
                  <span></span>
                  <span></span>
                  <span></span>
            </label>
            <nav>
                  <ul>
                        <li><n-link to="/">トップ</n-link></li>
                        <li><n-link to="information">ご案内</n-link></li>
                        <li><n-link to="">校内マップ</n-link></li>
                        <li><n-link to="sandan">企画一覧</n-link></li>
                        <li><n-link to="timetable">タイムテーブル</n-link></li>
                        <li><n-link to="foodmenu">食品メニュー</n-link></li>
                        <li><n-link to="feature">文化祭特集</n-link></li>
                  </ul>
            </nav>
      </div>
</template>
<style lang="scss">
      $blackColor: #411415;
      body {
            h1 {
                  position: fixed;
                  top: 20px;
                  left: 20px;
                  z-index: 6;
                  font-size: 20px;
                  font-weight: 900;
                  font-family: sans-serif;
                  text-transform: uppercase;
                  > span {
                        text-transform: none;
                        opacity: .5;
                        font-weight: 300;
                        font-size: 12px;
                  }
            }
            ul {
                  list-style: none;
            }
            input {
                  position: relative;
            }
            input + label {
                  position: fixed;
                  top: 13.5px;
                  right: 20px;
                  height: 25px;
                  width: 24px;
                  z-index: 5;
                  span {
                        position: absolute;
                        width: 100%;
                        height: 2px;
                        top: 50%;
                        margin-top: -1px;
                        left: 0;
                        display: block;
                        background: white;
                        transition: .5s;
                  }
                  span:first-child {
                        top: 2px;
                  }
                  span:last-child {
                        top: 22px;
                  }
            }
            label:hover {
                  cursor: pointer;
            }
            input:checked + label {
                  span {
                        opacity: 0;
                        top: 50%;
                  }
                  span:first-child {
                        opacity: 1;
                        transform: rotate(405deg);
                  }
                  span:last-child {
                        opacity: 1;
                        transform: rotate(-405deg);
                  }
            }
            input ~ nav {
                  background: #495057;
                  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25);;
                  position: fixed;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 50px;
                  z-index: 3;
                  transition: .3s;
                  transition-delay: 0s;
                  overflow: hidden;
                  > ul {
                        padding: 0;
                        color: white;
                        text-align: center;
                        position: absolute;
                        top: 10vh;
                        left: 10%;
                        right: 10%;
                        > li {
                              opacity: 0;
                              transition: .5s;
                              transition-delay: 0s;
                              > a {
                                    text-decoration: none;
                                    text-transform: uppercase;
                                    color: white;
                                    font-size: 17px;
                                    font-weight: 700;
                                    font-family: sans-serif;
                                    display: block;
                                    padding: 3.5vh;
                              }
                        }
                  }
            }
            input:checked ~ nav {
                  height: 100%;
                  transition-delay: 0s;
                  > ul {
                        > li {
                              opacity: 1;
                              transition-delay: .2s;
                        }
                  }
            }
            @media screen and (min-width: 600px) {

            }
      }
</style>
