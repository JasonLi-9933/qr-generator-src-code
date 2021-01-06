<template>
  <div class="wrapper">
    <h1>Welcome!</h1>
    <button class='btn' @click='alterComponent()'>
      <span class='btn-text'>Create Your QR Code!</span>
    </button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selectedComponent: 'welcomePage'
      }
    },

    methods: {
      alterComponent() {
        var currentComponent = this.selectedComponent;
        if (currentComponent == 'welcomePage') {
          this.selectedComponent = 'generatorApp';
        } else {
          this.selectedComponent = 'welcomePage'
        }

        this.$emit('componentChanged', this.selectedComponent);
      }
    },
  }

</script>

<style scoped>
  .wrapper {
      margin: 30vh auto;
  }

  .btn-text {
      font-size: 36px;
  }
  


  /* .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active {
    animation: fade-in .6s;
  }

  .fade-enter-to,
  .fade-leave {
    opacity: 1;
  }

  .fade-leave-active {
    animation: fade-in .6s reverse;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 0.5;
    }

    100% {
      opacity: 1;
    }
  } */

</style>
