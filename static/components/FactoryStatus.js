export default {
    props: ['FactoryImage','FactoryData','FactoryName','index'],
    data: () => ({
    }),
    mounted(){
      // dummy chart rendering
      var chart = new Chart($("#factoryDounut"+this.index), {
        type: "doughnut",
        data: this.FactoryData,
        options: {
          plugins: {
            legend: {
              display: false,
              hidden: true,
            },
            tooltip: {
              enabled: false,
            },
          },
          borderColor: "transparent",
          cutout: 30,
        },
      });
    },
    template:`  <div class="w-[600px] h-48 relative flex items-center">
    <div
      class="w-40 aspect-square bg-amber-700 z-10 rounded-full flex items-center justify-center"
    >
      <div
        class="w-5/6 aspect-square  rounded-full shadow-lg"
        :style="{'backgroundImage':'url('+FactoryImage+')','backgroundSize': 'cover'}"
        >
      
      </div>
    </div>
    <div
      class="w-11/12 h-full rounded-2xl absolute right-0 z-0 bg-slate-600 bg-opacity-70 pl-28 py-4 text-white"
    >
      <!-- title -->
      <div class="text-xl pl-4">{{FactoryName}}</div>
      <!-- contents -->
      <div class="my-4 flex space-x-2">
        <!-- running time -->
        <div class="w-20 flex flex-col items-center space-y-1">
          <div
            class="w-20 aspect-square border-2 border-sky-500 rounded-lg flex flex-col items-center justify-center"
          >
            <div class="text-xl">6555.3</div>
            <div class="text-sm">
              <span>274.3</span>
              <span>일</span>
            </div>
            <div class="text-sm">
              <span>10</span>
              <span>개월</span>
            </div>
          </div>
          <div>가동시간</div>
        </div>
        <!-- chart -->
        <div class="w-64 flex space-x-2">
          <div class="w-20 flex flex-col items-center space-y-1 relative">
            <canvas
              :id="'factoryDounut'+index"
              class="RoundedDoughnut w-20"
              height="100"
              width="100"
            ></canvas>
            <div class="top-6 absolute">57 톤</div>
            <div class="">소각</div>
          </div>
          <div class="w-20 flex flex-col items-center space-y-1">
            <div
              class="w-20 aspect-square bg-emerald-400 rounded-full flex items-center justify-center"
            >
              <div
                class="w-5/6 aspect-square bg-slate-500 rounded-full flex items-center justify-center"
              >
                <div>
                  <span>140</span>
                  <span>톤</span>
                </div>
              </div>
            </div>
            <div class="">건조</div>
          </div>
          <div class="w-20 flex flex-col items-center space-y-1">
            <div
              class="w-20 aspect-square bg-sky-500 rounded-full flex items-center justify-center"
            >
              <div
                class="w-5/6 aspect-square bg-slate-500 rounded-full flex items-center justify-center"
              >
                <div>
                  <span>84</span>
                  <span>kw</span>
                </div>
              </div>
            </div>
            <div>발전</div>
          </div>
        </div>
        <!-- thermometer -->
        <div class="w-20 flex flex-col items-center space-y-1">
          <div class="flex">
            <div class="w-10 h-20 relative">
              <div
                class="w-6 h-14 bg-yellow-500 rounded-t-full flex items-end justify-center absolute top-0 z-10 left-1"
              >
                <div
                  class="w-4 h-[50px] bg-slate-500 rounded-t-full flex items-end justify-center"
                >
                  <div
                    class="bg-yellow-500 w-3 rounded-t-full"
                    style="height: 80%"
                  ></div>
                </div>
              </div>
              <div
                class="w-8 aspect-square rounded-full bg-yellow-500 absolute bottom-0 flex items-center justify-center z-0"
              >
                <div
                  class="w-6 aspect-square rounded-full bg-slate-500 flex items-center justify-center"
                >
                  <div
                    class="w-5 aspect-square rounded-full bg-yellow-500"
                  ></div>
                </div>
              </div>
            </div>
            <div class="w-12 h-20 flex items-center text-yellow-500">
              <span>80</span>
              <span>℃</span>
            </div>
          </div>
        <div>2차출구온도</div>
      </div>
      </div>
    </div>
  </div>`
 }
 