<template>
  <div class="master-box">
    <div class="head-img" style="float:left">御主头像</div>
    <div class="master-info">
      <li style="text-align: left; height:1.3rem">{{masterInfo.name}}</li>
      <ni label="体力" :percent="masterInfo.sv" title=""></ni>
      <ni label="魔力" :percent="masterInfo.mp" color="#0000CD" style="margin-top: 0.2rem"></ni>
    </div>
  </div>
</template>
<script>
  import ni from './numberIndicator.vue'
  export default {
      components:{ni},
      props:{
          userId:{
              type:String
          }
      },
      data() {
          return {
              masterInfo:{
                  name:'藤丸立香',//御主姓名
                  sv:0,    //体力值
                  mp:0     //魔力值
              },
              svTitle:'御主进行移动时'
          }
      },
      created(){
        let _o = this.$getSess('master_'+this.userId);
        if(_o) {
            this.masterInfo = _o;
        } else {
//            从后台拿数据,并放进session里
        }
      }
  }
</script>
<style scoped>
  .master-box {
    display:inline-block;
    float: left;
  }
  .master-info {
    margin-left: 4.5rem;
  }
</style>
