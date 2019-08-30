<template>
      <div>
            <div>

            </div>
            <svg>
                  <defs>
                        <filter id="gooeyness">
                              <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur" />
                              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="gooeyness" />
                              <feComposite in="SourceGraphic" in2="gooeyness" operator="atop" />
                        </filter>
                  </defs>
            </svg>
            <div class="plates">
                  <div class="plate plate5" onclick="this.classList.toggle('active')">
                        <svg class="burger" version="1.1" height="100" width="100" viewBox="0 0 100 100">
                              <path class="line line1" d="M 30,35 H 70 " />
                              <path class="line line2" d="M 50,50 H 30 L 34,32" />
                              <path class="line line3" d="M 50,50 H 70 L 66,68" />
                              <path class="line line4" d="M 30,65 H 70 " />
                        </svg>
                        <svg class="x" version="1.1" height="100" width="100" viewBox="0 0 100 100">
                              <path class="line" d="M 34,32 L 66,68" />
                              <path class="line" d="M 66,32 L 34,68" />
                        </svg>
                  </div>
            </div>
      </div>
</template>
<style>
      svg {
            height: 70px;
            position: absolute;
            width: 70px;
      }

      @media (max-width: 640px) {
            .plates {
                  width: 320px;
            }
      }
      .plate {
            height: 60px;
            width: 60px;
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
            stroke: white;
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
