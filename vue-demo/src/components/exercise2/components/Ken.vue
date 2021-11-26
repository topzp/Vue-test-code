<template>
  <div class="Ken">
    <span style="font-size: 20px; color: #000;">肯</span>
    <div class="table">
      <div v-for="(item,index) in ken"
           :key="index">
        <Cell :ken="item" />
      </div>

    </div>

  </div>

</template>

<script>
import Cell from '@/components/exercise2/components/Cell.vue'
export default {
  components: {
    Cell
  },
  data () {
    return {

      ken: [
        {
          id: 21,
          username: 'ken',
          img: require('@/assets/ken.jpg')
        },
        {
          id: 22,
          username: 'ken',
          img: require('@/assets/ken.jpg')
        },
        {
          id: 23,
          username: 'ken',
          img: require('@/assets/ken.jpg')
        },
        {
          id: 24,
          username: 'ken',
          img: require('@/assets/ken.jpg')
        },
        {
          id: 25,
          username: 'ken',
          img: require('@/assets/ken.jpg')
        },
        {
          id: 26,
          username: 'ken',
          img: require('@/assets/ken.jpg')
        },
        {
          id: 27,
          username: 'ken',
          img: require('@/assets/ken.jpg')
        },
        {
          id: 28,
          username: 'ken',
          img: require('@/assets/ken.jpg')
        },
        {
          id: 29,
          username: 'ken',
          img: require('@/assets/ken.jpg')
        },
        {
          id: 30,
          username: 'ken',
          img: require('@/assets/ken.jpg')
        },
        {
          id: 31,
          username: 'ken',
          img: require('@/assets/ken.jpg')
        },
        {
          id: 32,
          username: 'ken',
          img: require('@/assets/ken.jpg')
        },
      ]


    }
  },
  methods: {

  }

}
</script>

<style scoped>
.Ken {
  margin-top: 20px;
  width: 500px;
  height: 200px;
  border: 1px solid black;
  background-color: rgb(245, 24, 54);
  /* border: 2px solid #c4c0c0; */
}

.table {
  margin-top: 10px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
</style>