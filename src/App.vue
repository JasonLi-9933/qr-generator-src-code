<template>
  <div id="app">
    
    
    <transition mode="out-in"  appear
               enter-active-class="animate__animated animate__fadeIn"
               leave-active-class="animate__animated animate__fadeOut">
      <keep-alive>
        <component :is='selectedComponent' 
                  @componentChanged='selectedComponent = $event'>
        </component>
      </keep-alive>
      

    </transition>
      
  </div>
</template>

<script>
  import welcomePage from './assets/components/Welcome.vue';
  import generatorApp from './assets/components/QrGenerator.vue';
  import codeImage from './assets/components/QrCode.vue';

  export default {
    name: 'app',
    data() {
      return {
        selectedComponent: 'welcomePage'
      }
    },


    components: {
      welcomePage,
      generatorApp,
      codeImage
    }
  }

</script>

<style>
  body {
    font-family: "Lato", sans-serif;
    background-color: #ECECEC;
    text-align: center;
    color: #111;
  }
  .btn {
    margin: 20px auto;
    border: none;
    padding: 10px 44px;
    position: relative;
    cursor: pointer;
  }

  .btn::before {
    transition: all 0.85s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    content: '';
    width: 50%;
    height: 100%;
    background: black;
    position: absolute;
    top: 0;
    left: 0;
  }

  .btn:hover::before {
    background: black;
    width: 100%;
  }

  .btn .btn-text {
    color: white;
    mix-blend-mode: difference;
  }
  /*<transition >

     <button v-if="!entered" @click="entered = !entered" class='btn'>
       <span class='btn-text'>Create Your QR Code!</span>
    </button>

    </transition> */
</style>


  