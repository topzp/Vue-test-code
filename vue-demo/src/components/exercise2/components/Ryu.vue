<template>
  <div class="Ryu">
    <span style="font-size: 20px; color: #000;">隆</span>
    <div class="table">
      <div v-for="(item,index) in ryu"
           :key="index">
        <Cell :ryu="item" />
      </div>
    </div>
  </div>
</template>

<script>
import Cell from '@/components/exercise2/components/Cell.vue'
// import Bus from '@/components/exercise2/components/bus.js'
export default {
  components: {
    Cell
  },
  data () {
    return {
      ryu: [

        {
          id: 1,
          username: 'ryu',
          img: require('@/assets/ryu.jpg')
        },
        {
          id: 2,
          username: 'ryu',
          img: require('@/assets/ryu.jpg')
        },
        {
          id: 3,
          username: 'ryu',
          img: require('@/assets/ryu.jpg')
        },
        {
          id: 4,
          username: 'ryu',
          img: require('@/assets/ryu.jpg')
        },
        {
          id: 5,
          username: 'ryu',
          img: require('@/assets/ryu.jpg')
        },
        {
          id: 6,
          username: 'ryu',
          img: require('@/assets/ryu.jpg')
        },
        {
          id: 7,
          username: 'ryu',
          img: require('@/assets/ryu.jpg')
        },
        {
          id: 8,
          username: 'ryu',
          img: require('@/assets/ryu.jpg')
        },
        {
          id: 9,
          username: 'ryu',
          img: require('@/assets/ryu.jpg')
        },
        {
          id: 10,
          username: 'ryu',
          img: require('@/assets/ryu.jpg')
        },
        {
          id: 11,
          username: 'ryu',
          img: require('@/assets/ryu.jpg')
        },
        {
          id: 12,
          username: 'ryu',
          img: require('@/assets/ryu.jpg')
        },
      ]
    }
  },
  methods: {

  }

}
</script>

<style scoped>
.Ryu {
  margin-top: 20px;
  width: 500px;
  height: 200px;
  border: 1px solid black;
  /* background-color: rgb(212, 241, 131); */
  /* border: 2px solid #c4c0c0; */
}
.table {
  margin-top: 10px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.image {
  width: 50px;
  height: 50px;
}
</style>