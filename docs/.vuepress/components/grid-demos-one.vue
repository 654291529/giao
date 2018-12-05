<template>
  <div>
    <gear-row class="demoRow">
      <gear-col span="8">
        <div class="demoCol">8</div>
      </gear-col>
      <gear-col span="8">
        <div class="demoCol">8</div>
      </gear-col>
      <gear-col span="8">
        <div class="demoCol">8</div>
      </gear-col>
    </gear-row>

    <gear-row class="demoRow">
      <gear-col span="6">
        <div class="demoCol">6</div>
      </gear-col>
      <gear-col span="6">
        <div class="demoCol">6</div>
      </gear-col>
      <gear-col span="6">
        <div class="demoCol">6</div>
      </gear-col>
      <gear-col span="6">
        <div class="demoCol">6</div>
      </gear-col>
    </gear-row>

    <gear-row class="demoRow">
      <gear-col span="4">
        <div class="demoCol">4</div>
      </gear-col>
      <gear-col span="4">
        <div class="demoCol">4</div>
      </gear-col>
      <gear-col span="4">
        <div class="demoCol">4</div>
      </gear-col>
      <gear-col span="4">
        <div class="demoCol">4</div>
      </gear-col>
      <gear-col span="4">
        <div class="demoCol">4</div>
      </gear-col>
      <gear-col span="4">
        <div class="demoCol">4</div>
      </gear-col>
    </gear-row>

    <gear-row class="demoRow">
      <gear-col span="2">
        <div class="demoCol">2</div>
      </gear-col>
      <gear-col span="2">
        <div class="demoCol">2</div>
      </gear-col>
      <gear-col span="2">
        <div class="demoCol">2</div>
      </gear-col>
      <gear-col span="2">
        <div class="demoCol">2</div>
      </gear-col>
      <gear-col span="2">
        <div class="demoCol">2</div>
      </gear-col>
      <gear-col span="2">
        <div class="demoCol">2</div>
      </gear-col>
      <gear-col span="2">
        <div class="demoCol">2</div>
      </gear-col>
      <gear-col span="2">
        <div class="demoCol">2</div>
      </gear-col>
      <gear-col span="2">
        <div class="demoCol">2</div>
      </gear-col>
      <gear-col span="2">
        <div class="demoCol">2</div>
      </gear-col>
      <gear-col span="2">
        <div class="demoCol">2</div>
      </gear-col>
      <gear-col span="2">
        <div class="demoCol">2</div>
      </gear-col>
    </gear-row>
  </div>
  
</template>

<script>
  import Col from '../../../src/col'
  import Row from '../../../src/row'
  export default {
    components: {
      'gear-col': Col,
      'gear-row': Row,
    }
  }
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }
  .demoRow{
    margin: 10px 0;
  }
  .demoCol {
    height: 50px;
    border: 1px solid #ccc;
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>