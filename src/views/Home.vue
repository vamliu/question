<template>
  <div class="home">
    <answer-area></answer-area>
    <center-area></center-area>
    <answer-area></answer-area>
  </div>
</template>

<script>
import AnswerArea from "@/views/AnswerArea.vue";
import CenterArea from "@/views/CenterArea";
export default {
  name: "Home",
  components: {
    AnswerArea,
    CenterArea
  }
};
</script>
<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  background: url("~@/assets/bg.png") no-repeat center;
  background-size: 100% 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>
