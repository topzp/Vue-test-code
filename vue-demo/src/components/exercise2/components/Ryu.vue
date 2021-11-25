<template>
  <div class="Ryu">
    <span style="font-size: 20px; color: #000;">隆</span>
    <div class="table">
      <Cell :ryu="ryu" />
      <Cell :ryu="ryu" />
      <Cell :ryu="ryu" />
      <Cell :ryu="ryu" />
      <Cell :ryu="ryu" />
      <Cell :ryu="ryu" />
      <Cell :ryu="ryu" />
      <Cell :ryu="ryu" />
      <Cell :ryu="ryu" />
      <Cell :ryu="ryu" />
      <Cell :ryu="ryu" />
      <Cell :ryu="ryu" />

    </div>
    <!-- <div class="ryu">
      <span><img :src="img"
             class="image" /></span>
    </div> -->
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
      ryu: {
        id: 1,
        img: require('@/assets/ryu.jpg')
      }

    }
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