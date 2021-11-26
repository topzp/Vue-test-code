<template>
  <div class="cell">
    <div v-if="ryu.username==='ryu'">
      <span v-if="onshow"><img :src="ryu.img"
             class="image"
             @click="selected(ryu.id)" /></span>
    </div>

    <div v-if="ken.username==='ken'">
      <span v-if="onshow"><img :src="ken.img"
             class="image"
             @click="selected(ken.id)" /></span>
    </div>
    <div v-if="img.username==='ryu'||img.username==='ken'">
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
    },
    active: {
      type: Function
    }



  },

  data () {
    return {
      b: [],
      onshow: true,
      chess: false
    }
  },

  methods: {
    selected (id) {
      if (this.ryu.id === id) {
        Bus.$emit('childByValue', this.ryu)
        setTimeout(this.onshow = !this.onshow, 1000);
      } else if (this.ken.id === id) {
        Bus.$emit('childByValue', this.ken)
        setTimeout(this.onshow = !this.onshow, 1000);
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