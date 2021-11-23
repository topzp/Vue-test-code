<template>
  <div class="Ken">
    <div class="table">
      <cell />
      <cell />
      <cell />
      <cell />
      <cell />
      <cell />
      <cell />
      <cell />
      <cell />
      <cell />
      <cell />
      <cell />
      <cell />
      <cell />
      <cell />
      <cell />
      <cell />
      <cell />
      <cell />
      <cell />
    </div>
  </div>

</template>

<script>
import Cell from '@/components/exercise2/components/Cell.vue'
export default {
  components: {
    Cell
  }

}
</script>

<style scoped>
.Ken {
  margin-top: 20px;
  width: 500px;
  height: 200px;
  background-color: rgb(212, 241, 131);
  /* border: 2px solid #c4c0c0; */
}

.table {
  margin-top: 10px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
</style>