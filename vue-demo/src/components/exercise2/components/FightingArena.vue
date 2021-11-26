<template>
  <div class="fightingArena">

    <Cell :img="img1"
          :active="active"
          @click="active(0,0)" />
    <Cell :img="img1"
          @click="active(0,1)" />
    <Cell :img="img1"
          @click="active(0,2)" />
    <Cell :img="img1"
          @click="active(0,3)" />
    <Cell :img="img1"
          @click="active(0,4)" />
    <Cell :img="img1"
          @click="active(0,5)" />
    <Cell :img="img1"
          @click="active(1,0)" />
    <Cell :img="img1"
          @click="active(1,1)" />
    <Cell :img="img1"
          @click="active(1,2)" />
    <Cell :img="img1"
          @click="active(1,3)" />
    <Cell :img="img1"
          @click="active(1,4)" />
    <Cell :img="img1"
          @click="active(1,5)" />
    <Cell :img="img1"
          @click="active(2,0)" />
    <Cell :img="img1"
          @click="active(2,1)" />
    <Cell :img="img1"
          @click="active(2,2)" />
    <Cell :img="img1"
          @click="active(2,3)" />
    <Cell :img="img1"
          @click="active(2,4)" />
    <Cell :img="img1"
          @click="active(2,5)" />
    <Cell :img="img1"
          @click="active(3,0)" />
    <Cell :img="img1"
          @click="active(3,1)" />
    <Cell :img="img1"
          @click="active(3,2)" />
    <Cell :img="img1"
          @click="active(3,3)" />
    <Cell :img="img1"
          @click="active(3,4)" />
    <Cell :img="img1"
          @click="active(3,5)" />

  </div>
</template>

<script>
import Cell from '@/components/exercise2/components/Cell.vue'
import Bus from '@/components/exercise2/components/bus.js'
export default {
  components: {
    Cell
  },
  data () {
    return {
      img1: {},
      chess: ''

    }
  },
  // methods: {
  //   childByValue (img) {
  //     this.img = img
  //   }
  // }
  mounted: function () {
    var vm = this
    Bus.$on('childByValue', (data) => {
      console.log('ccc', data)
      vm.img1 = data
    })
  },
  methods: {
    active (x, y) {
      this.chess = true
    }

  }
}
</script>

<style scoped>
.fightingArena {
  margin-top: 40px;
  width: 375px;
  height: 320px;
  background-color: rgb(205, 248, 124);
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
</style>