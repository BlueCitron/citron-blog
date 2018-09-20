<template>
<div class="level">
  <div class="level-left">
    
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="title">제목</p>
    </div>
  </div>
  <div class="level-right">
    <div class="columns is-gapless">
      <!-- 필터 -->
      <div class="column is-0">
        <b-field>
          <b-select placeholder="Filter.." expanded>
            <option value="flint">제목</option>
            <option value="silver"></option>
          </b-select>
        </b-field>
      </div>

      <!-- 검색창 -->
      <div class="column is-0">
        <b-field>
          <b-input placeholder="Search..." type="search" icon="magnify">
          </b-input>
        </b-field>
      </div>
    </div>


  </div>
</div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
