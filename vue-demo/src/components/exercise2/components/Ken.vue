<template>
  <div class="Ken">
    <span style="font-size: 20px; color: #000;">肯</span>
    <div class="table">
      <Cell :ken="ken" />
      <Cell :ken="ken" />
      <Cell :ken="ken" />
      <Cell :ken="ken" />
      <Cell :ken="ken" />
      <Cell :ken="ken" />
      <Cell :ken="ken" />
      <Cell :ken="ken" />
      <Cell :ken="ken" />
      <Cell :ken="ken" />
      <Cell :ken="ken" />
      <Cell :ken="ken" />

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

      ken: {
        id: 2,
        img: require('@/assets/ken.jpg')
      },


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