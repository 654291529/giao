<template>
  <div>
    <div class="box">
      <gear-input value="Normal"></gear-input>
      <gear-input type="password" placeholder="type password"></gear-input>
      <gear-input value="Disabled" :disabled="true"></gear-input>
      <gear-input value="Readonly" :readonly="true"></gear-input>
    </div>

    <div class="box">
      <gear-input value="Error" error="出现错误了!"></gear-input>
    </div>

    <div class="box">
      <gear-input :error="error" @input="inputValueChange" v-model="message2"  placeholder="不能超过5个字符"></gear-input>
    </div>

    <div class="box">
      <gear-input value="双向数据绑定" v-model="message"></gear-input><p class="message">{{message}}</p>
    </div>
  </div>
</template>

<script>
  import Icon from '../../../src/icon'
  import Input from '../../../src/input'
  export default {
    components: {
      'gear-input': Input
    },
    data() {
      return {
        message: '双向数据绑定',
        message2: '',
        error: '',
      }
    },
    methods: {
      inputChange(e) {
        console.log(e)
      },
      inputValueChange() {
        if (this.message2.length > 5) {
          this.error = '不能超过5个字符！'
        } else {
          this.error = ''
        }
      },
    }
  }
</script>

<style scoped>
  .box {
    margin: 20px 0;
  }
  .message {
    display: inline-flex;
    font-size: 10px;
    line-height: 10px;
    margin-left: 10px;
  }
</style>