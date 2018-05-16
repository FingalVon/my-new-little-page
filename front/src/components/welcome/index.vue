<template>
  <div style="margin:15% auto">
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
  export default {
      name:'welcome'
  }
</script>
<style>
  .welcome-animation {
    font-family: Palatino Linotype;
  }
  .welcome-fate{
    font-size:4rem;
    color:rgba(255,255,255,0);
  }
  .welcome-fate span {
    display:inline-block;
    width:4rem;
    line-height:4rem;

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
    font-size:36px;
    color:rgba(255,255,255,0);
  }
  .welcome-text span {
    display:inline-block;
    width:32px;
    line-height: 32px;

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
      color:rgba(255,255,255,0);
    }
    to {
      font-size: 56px;
      color:rgba(255,255,255,1);
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
      color:rgba(255,255,255,1);
      -webkit-transform: translateY(0);
      transform: translateY(0)}
  }
</style>
