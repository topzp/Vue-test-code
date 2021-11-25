<template>
  <div class="cell">
    <div v-if="ryu.id===1">
      <span><img :src="ryu.img"
             class="image"
             @click="selected(1)" /></span>
    </div>

    <div v-if="ken.id===2">
      <span><img :src="ken.img"
             class="image"
             @click="selected(2)" /></span>
    </div>
    <div v-if="img.id===2||img.id===1">
      <span><img :src="img.img"
             class="image" /></span>
    </div>

  </div>

</template>

<script>
import Bus from '@/components/exercise2/components/bus.js'
export default {
  props: {
    ryu: {
      type: Object,
      default () {
        return {}
      }
    },
    ken: {
      type: Object,
      default () {
        return {}
      }
    },
    img: {
      type: Object,
      default () {
        return {}
      }
    }
  },

  data () {
    return {

    }
  },

  methods: {
    selected (id) {
      if (this.ryu.id === id) {
        Bus.$emit('childByValue', this.ryu)
      } else if (this.ken.id === id) {
        Bus.$emit('childByValue', this.ken)
      }
    }
  }
}
</script>

<style scoped>
.cell {
  border: 1px solid black;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-content: center;
  /* -moz-border-radius: 50px;
  -webkit-border-radius: 50px;
  border-radius: 50px; */
  /* font-size: 65px; */
  margin: 5px 5px;
}
.image {
  width: 50px;
  height: 50px;
  -moz-border-radius: 50px;
  -webkit-border-radius: 50px;
  border-radius: 50px;
}
</style>