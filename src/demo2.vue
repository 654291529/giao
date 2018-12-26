<template>
  <div>
    <gear-slides :selected="selected">
      <gear-slides-item name="1">
        <div class="box">1</div>
      </gear-slides-item>
      <gear-slides-item name="2">
        <div class="box">2</div>
      </gear-slides-item>
      <gear-slides-item name="3">
        <div class="box">3</div>
      </gear-slides-item>
    </gear-slides>
  </div>
</template>

<script>
  import Slides from './slides'
  import SlidesItem from './slides-item'

  export default {
    name: 'demo2',
    components: {
      'gear-slides': Slides,
      'gear-slides-item': SlidesItem
    },
    data() {
      return {
        selected: '1'
      }
    },
    created() {
      let n = 1
      setInterval(() => {
        if(n === 4) {
          n = 1
        }
        this.selected = n.toString()
        n++
      },2000)
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .box {
    width: 200px;
    height: 150px;
    background: #ddd;
    border: 1px solid red;
  }
</style>