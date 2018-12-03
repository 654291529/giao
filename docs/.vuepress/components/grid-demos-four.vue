<template>
  <div>
    <div>
      <gear-row class="demoRow">
        <gear-col span="24" :pad="{span:12}" :narrow-pc="{span:8}" :pc="{span:6}">
          <div class="demoCol"></div>
        </gear-col>
        <gear-col span="24" :pad="{span:12}" :narrow-pc="{span:8}" :pc="{span:6}">
          <div class="demoCol"></div>
        </gear-col>
        <gear-col span="24" :pad="{span:12}" :narrow-pc="{span:8}" :pc="{span:6}">
          <div class="demoCol"></div>
        </gear-col>
        <gear-col span="24" :pad="{span:12}" :narrow-pc="{span:8}" :pc="{span:6}">
          <div class="demoCol"></div>
        </gear-col>
        <gear-col span="24" :pad="{span:12}" :narrow-pc="{span:8}" :pc="{span:6}">
          <div class="demoCol"></div>
        </gear-col>
      </gear-row>
    </div>

    <div>
      <gear-row class="demoRow">
        <gear-col span="23" offset="1" :narrow-pc="{span:12, offset:12}">
          <div class="demoCol"></div>
        </gear-col>
      </gear-row>
    </div>
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