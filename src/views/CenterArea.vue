<template>
  <div class="center-area">
    <span class="time">{{ time }}</span>
    <van-button>开始答题</van-button>
  </div>
</template>

<script>
export default {
  name: "CenterArea",
  data() {
    return {
      time: 10
    };
  }
};
</script>

<style lang="scss">
.center-area {
  width: 30%;
  height: 540px;
  position: relative;
  box-sizing: border-box;
  background-color: rgba(255, 98, 31, 0.8);
  padding: 100px;
  .time {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 100px;
    font-weight: 800;
  }
  .van-button {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
