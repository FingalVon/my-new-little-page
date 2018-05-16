<template>
  <div class="header-box">
    <master-block :user-id="userId"></master-block>
    <servent-block :user-id="userId"></servent-block>
  </div>
</template>

<script>
  import master from './master.vue';
  import servent from './servent.vue';
  export default {
      components:{
          masterBlock:master,
          serventBlock:servent
      },
      data(){
          return{
              userId:''
          }
      },
      created(){

          this.makeData();

          let _o = this.$getSess('userInfo');
          if(_o) {
              this.userId = _o.userId;
          } else {
              console.log('未获取到用户信息，请重新登录！')
          }
      },
      methods:{
          makeData() {
              let id = '0000'
              this.$setSess('userInfo',{
                  userId:id
              });
              this.$setSess('master_'+id,{
                  name:'莓良心的马斯塔',
                  sv:75,
                  mp:64
              });
              this.$setSess('servent_'+id,{
                  id:'001',
                  name:'玛修·基列莱特',
                  hp:100,
              })
          }
      }
  }
</script>

<style scoped>
  .header-box {
    height:100%;
    width:100%;
  }
</style>
