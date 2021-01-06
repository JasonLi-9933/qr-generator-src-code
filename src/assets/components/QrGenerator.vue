<template>
  <div class='generator'>

    <div class="input-field">
      <label for="url-input">URL: </label>
      <input type="text" id="url-input" v-model='url'>
    </div>

    <div class="radio-btns">
      <span>Type: </span>

      <div class="option">
        <input type="radio" value=".png" v-model="imgType" id='png'>
        <label for="png">PNG</label>
      </div>

      <div class="option">
        <input type="radio" value=".svg" v-model="imgType" id='svg'>
        <label for="svg">SVG</label>
      </div>
    </div>

    <div class='background'>
      <span>Image Background: </span>

      <div>
        <input type="checkbox" value="true" v-model="isTransparent" id='yes'>
        <label for="yes">Transparent</label>
      </div>
    </div>

    <div class="px-size">
      <label for="px-size">Pixel Size: </label>
      <input type="number" id="px-size" v-model='size'>
    </div>


      <button class='btn' @click='generateCode()'>
        <span class='btn-text'>Generate!</span>
      </button>


    <h3>
      Tip 1: If you want to save the image later.<br>
      Uncheck the Transparent box.</h3>
    
    <h3>Tip 2: Increase Pixel Size for better resolution.</h3>
  </div>
</template>

<script>
  // import {bus} from '../../main.js';

  export default {
    data() {
      return {
        url: '',
        imgType: '.png',
        isTransparent: true,
        size: 0,
      }
    },

    methods: {
      generateCode() {
        var api = 'https://qrtag.net/api/qr';
        if (this.isTransparent) {
          api = api + '_transparent';
        }

        if (this.size > 0) {
          api = api + '_' + this.size;
        }

        api = api + this.imgType;
        if (this.url != '') {
          api = api + '?url=' + this.url;
        }

        this.$store.state.url = api;
        this.$emit('componentChanged', 'codeImage');
      }
    }
  }

</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@500&display=swap');

  .generator {
    font-family: 'Mukta', sans-serif;
    display: flex;
    flex-direction: column;
    margin: 25vh 30vw 0 30vw;
    font-size: 20px;
  }

  input {
    border-radius: 5px;
    border-color: black;
    border-width: medium;
    margin: 0 8px;
  }


  .input-fields,
  .radio-btns,
  .background,
  .px-size {
    display: flex;
    flex-direction: row;
    margin: 10px auto;
    justify-content: flex-end;
  }

  .btn-text {
    font-size: 16px;
  }

  label {
    margin: 0 2px;
  }

</style>
