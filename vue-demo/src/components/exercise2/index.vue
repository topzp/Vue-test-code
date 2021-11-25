<template>
  <div class="checkerboard">
    <div class="wrapper">
      <FightingArena />
    </div>
    <div class="figure">
      <Ryu />
      <Ken />
    </div>

  </div>
</template>

<script>
import Ryu from '@/components/exercise2/components/Ryu.vue'
import Ken from '@/components/exercise2/components/Ken.vue'
import FightingArena from '@/components/exercise2/components/FightingArena.vue'
import Cell from '@/components/exercise2/components/Cell.vue'
export default {

  components: {
    FightingArena,
    Ryu,
    Ken,
    Cell
  }

}
</script>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

.checkerboard {
  width: 100%;
  height: 900px;
  background-color: rgb(255, 255, 255);
}
.wrapper {
  display: flex;
  justify-content: center;
}

.figure {
  margin-top: 30px;
  width: 100%;
  height: 400px;
  /* border: 2px solid #b6b5b5; */
  display: flex;
  justify-content: space-around;
}
</style>