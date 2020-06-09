<template>
  <div class="answer-area">
    <div class="question">
      <span>第{{ active + 1 }}题</span>
    </div>
  </div>
</template>

<script>
import q from "@/assets/data";
export default {
  name: "AnswerArea",
  data() {
    return {
      active: 0,
      q: []
    };
  },
  created() {
    this.q = q.sort(() => 0.5 - Math.random());
  }
};
</script>

<style lang="scss">
.answer-area {
  width: 30%;
  height: 80%;
  background-color: rgba(101, 142, 255, 0.8);
  .question {
  }
}
</style>
