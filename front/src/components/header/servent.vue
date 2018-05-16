<template>
  <div class="servent-box">
    <div class="head-img" style="float:right">从者头像</div>
    <div class="servent-info">
      <li style="height:1.3rem; padding-left: 0.6rem; margin-top: 0.2rem">{{serventInfo.name}}</li>
      <ni label="HP" :percent="serventInfo.hp" style="margin-top: 0.8rem"></ni>
    </div>
  </div>
</template>
<script>
  import ni from './numberIndicator.vue'
  export default {
    name:'servent',
    components:{ni},
    props:{
      userId:{
        type:String
      }
    },
    data() {
      return {
        serventInfo:{
          id:'',
          name:'???',//从者姓名
          hp:0,
          mp:0
        }
      }
    },
    created(){
      let _o = this.$getSess('servent_'+this.userId);
      console.log(_o,this.userId)
      if(_o) {
        this.serventInfo = _o;
      } else {
//            从后台拿数据,并放进session里
      }
    }
  }
</script>
<style scoped>
  .servent-box {
    display:inline-block;
    float: right;
  }
  .servent-info {
    margin-right: 4.5rem;
    text-align: left;
  }
</style>
