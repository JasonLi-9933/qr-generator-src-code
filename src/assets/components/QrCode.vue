<template>
  <div class='result'>
    <img :src="$store.state.url" alt="qrcode" class='code'>

    <button class='btn' @click='generateCode()'>
      <span class='btn-text' >Get Another One</span>
    </button>

    <!-- <button class='btn' type="submit">
      <a class='btn-text' download :href='$store.state.url'>Download QR Code</a>
    </button> -->

    <h3>Note: The QR code is only valid for 24 hr.</h3>
  </div>
</template>

<script>
  //   import {bus} from '../../main.js';

  export default {
    data() {
      return {}
    },


    methods: {
      generateCode() {
        this.$emit('componentChanged', 'generatorApp');
      }
    }

  }

</script>

<style scoped>
  .result {
    display: flex;
    flex-direction: column;
    margin: 15vh auto;
  }

  .btn-text {
    font-size: 20px;
  }

  .code {
    height: 200px;
    width: 200px;
    margin: 10vh auto 4vh auto;
  }

</style>
