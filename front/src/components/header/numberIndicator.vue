<template>
  <div class="ni-box" :style="{height:typeof(height)=='string'?height:height+'rem'}">
      <span class="label-style">{{label+'：'}}</span>
      <div class="ni-outer"
           :style="{'background-color':backgroundColor,
           width:typeof(width)=='string'?width:width+'rem'}">

        <!--percent在80%及以上时显示safe，20%-80%显示injured，低于20%显示danger-->
        <div class="ni-inner"
             :style="{'background-color':typeof(color)=='string'?color:(percent>=80?color.safe:(percent>=20?color.injured:color.danger)),
             width:percent+'%'}">
        </div>

      </div>
      <span class="percent-style">{{percent+'%'}}</span>
  </div>
</template>
<script>
  export default{
      name:'ni',
      props:{
          label:{
              type:String,
              default:''
          },
          color:{
              type:[Object,String],
              default:() => {return {
                  safe:'#228B22',
                  injured:'#EEC900',
                  danger:'#FF3030'
              }}
          },
          backgroundColor:{
              type:String,
              default:'#111'
          },
          height:{
              type:[String,Number],
              default:'1rem'
          },
          width:{
              type:[String,Number],
              default:'6rem'
          },
          percent:{
              type:Number,
              default:100
          }
      },
      data() {
          return {}
      },
      created() {

      }
  }
</script>
<style scoped>
  .ni-box {
    box-sizing: border-box;
    text-align: left;
  }
  .label-style {
    display:inline-block;
    text-align: right;
    width:3rem;
  }
  .ni-outer {
    height:100%;
    display:inline-block;
    margin-bottom: -0.2rem;
    border: solid #fff 0.02rem;
  }
  .ni-inner {
    height:100%
  }
</style>
