<template>
  <div class="bg" :style="bgStyle">
    <div class="header">
      <fate-header></fate-header>
      <welcome></welcome>
    </div>
  </div>
</template>
<script>
  import config from './config.js';
  import header from '../header/index.vue';
  import welcome from '../welcome/index.vue'
  export default{
      name:'background',
      components:{fateHeader:header,welcome},
      data(){
          return{
              bgStyle:{},
          }
      },
      created(){
          //需要拿到游戏的进行程度：
          // 1——游戏的 开始时间 不超过7天，发生的 战斗总数 不超过3场，且 死亡从者的数量 为0
          // 2——游戏的 开始时间 不超过7天，发生的 战斗总数 大于等于3场，且 死亡从者的数量 为0
          // 3——游戏的 开始时间 大于等于7天，或 死亡从者的数量 大于等于1
          let step = 1;

          let color = step==1?config.bgColor.light:(step==2?config.bgColor.warm:config.bgColor.blood)
          let _d = (new Date()).getHours();
          this.bgStyle = {
              'background-color':_d>=18 && _d < 23 ? color[1] : (_d>=23 || _d<4 ? color[2] : color[0])
          }
      }
  }
</script>
<style scoped>
  .bg{
      position:absolute;
      top:0;
      bottom:0;
      left:0;
      right:0;
  }
  .header{
      background-color: #000;
      color:#BBB;
      width:100%;
      height:4rem;
  }
</style>
