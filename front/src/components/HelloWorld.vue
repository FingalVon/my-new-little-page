<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>账号：<input v-model="account" placeholder="请输入账号"></ul>
    <ul>密码：<input v-model="password" placeholder="请输入密码"></ul>
    <button type="button" @click="handleCreate">创建账号</button>
    <button type="button" @click="handleSignIn">点击登录</button>
    <div>
      <button type="button" @click="testCode">test验证码</button>
    </div>
    <img v-if="isvisible" style="height:30px; width:30px" :src="'data:image/png;base64,'+yzmPic"/>
    <div class="welcome-animation">
      <div class="welcome-fate">
        <span class="l1">F</span>
        <span class="l2">A</span>
        <span class="l3">T</span>
        <span class="l4">E</span>
      </div>
      <div class="welcome-text">
        <span class="t1">长</span>
        <span class="t2">草</span>
        <span class="t3">圣</span>
        <span class="t4">杯</span>
        <span class="t5">战</span>
        <span class="t6">争</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      account:'',
      password:'',
      yzmPic:'',
      isvisible:false,
    }
  },
  methods:{
    handleCreate(){
      axios.post('/api/login/createAccount',{account:this.account,password:this.password}).then((res) => {
          console.log(">>>>>>>>>>>>",res)
      })
    },
    handleSignIn(){
      axios.get('/api/login/getAccount',{params:{account:this.account,password:this.password}}).then((res) => {
        console.log("<<<<<<<<<<<<<",res)
      })
    },
    testCode(){
        axios.post('/api/yzmtest').then(res => {
            this.yzmPic = res.data;
            this.isvisible = true;
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .welcome-animation {
    font-family: Palatino Linotype;
  }
  .welcome-fate{
    font-size:56px;
    color:rgba(0,0,0,0);
  }
  .welcome-fate span {
    display:inline-block;
    width:60px;
    line-height:56px;

    animation: each-letter 2s;
    animation-fill-mode:forwards;
    -webkit-animation: each-letter 2s;
    -webkit-animation-fill-mode:forwards;
  }
  .welcome-fate .l1{
    animation-delay: 0s;
    -webkit-animation-delay: 0s;
  }
  .welcome-fate .l2{
    animation-delay: 0.75s;
    -webkit-animation-delay:0.75s;
  }
  .welcome-fate .l3{
    animation-delay: 1.5s;
    -webkit-animation-delay:1.5s;
  }
  .welcome-fate .l4{
    animation-delay: 2.25s;
    -webkit-animation-delay:2.25s;
  }

  .welcome-text {
    font-size:24px;
    color:rgba(0,0,0,0);
  }
  .welcome-text span {
    display:inline-block;
    width:24px;
    line-height: 24px;

    animation: each-character 2s;
    animation-fill-mode:forwards;
    -webkit-animation: each-character 2s;
    -webkit-animation-fill-mode:forwards;
  }
  .welcome-text .t1 {
    animation-delay: 4.25s;
    -webkit-animation-delay: 4.25s;
  }
  .welcome-text .t2 {
    animation-delay: 4.45s;
    -webkit-animation-delay: 4.45s;
  }
  .welcome-text .t3 {
    animation-delay: 4.65s;
    -webkit-animation-delay: 4.65s;
  }
  .welcome-text .t4 {
    animation-delay: 4.85s;
    -webkit-animation-delay: 4.85s;
  }
  .welcome-text .t5 {
    animation-delay: 5.05s;
    -webkit-animation-delay: 5.05s;
  }
  .welcome-text .t6 {
    animation-delay: 5.25s;
    -webkit-animation-delay: 5.25s;
  }

  @keyframes each-letter
  {
    from {
      font-size: 64px;
      color:rgba(0,0,0,0);
    }
    to {
      font-size: 56px;
      color:rgba(0,0,0,1);
    }
  }

  @keyframes each-character
  {
    from {
      font-size: 32px;
      color:rgba(0,0,0,0);
      -webkit-transform: translateY(300px);
      transform: translateY(300px)
    }
    to {
      font-size: 24px;
      color:rgba(0,0,0,1);
      -webkit-transform: translateY(0);
      transform: translateY(0)}
  }
</style>
