<template>
  <div 
    class="background-container" 
    :class="backgroundClass" 
    @mousemove="handleMouseMove"
  >
    <h1>Ferrari</h1>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'BackgroundChanger',
  setup() {
    const backgroundClass = ref('background1');
    const transformStyle = ref('scale(1)');
    let timeout = null;

    const handleMouseMove = (event) => {
      
      const { currentTarget } = event;

      if (!currentTarget) return; // Se currentTarget for nulo, sai da função
      
      if (timeout) {
        clearTimeout(timeout);
      }

      
      timeout = setTimeout(() => {
        const { clientX, clientY } = event;
        const { offsetWidth, offsetHeight } = currentTarget;

        
        const xPos = clientX / offsetWidth;
        const yPos = clientY / offsetHeight;

        if (xPos > 0.7) {
          backgroundClass.value = 'background2';
        } else if (xPos < 0.3) {
          backgroundClass.value = 'background3';
        } else if (yPos > 0.7) {
          backgroundClass.value = 'background4';
        } else if (yPos < 0.3) {
          backgroundClass.value = 'background5';
        } else {
          backgroundClass.value = 'background1';
        }

        
        const scaleX = (xPos - 0.5) * 0.2 + 1; 
        const scaleY = (yPos - 0.5) * 0.2 + 1; 
        transformStyle.value = `scale(${Math.max(scaleX, scaleY)})`; 
      }, 20); 
    };

    return { backgroundClass, handleMouseMove, transformStyle };
  },
};


</script>

<style scoped>
.background-container {
  width: auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-image 0.3s ease, transform 0.3s ease; 
  background-size: cover;
  background-position: center;
  transform-origin: center; 
}

.background-container:hover {
  transform: scale(1.5); 
}

.background1 {
  background-image: url('@/assets/img/ferrari0.jpg');
}

.background2 {
  background-image: url('@/assets/img/ferrari1.jpg');
}

.background3 {
  background-image: url('@/assets/img/ferrari2.jpg');
}

.background4 {
  background-image: url('@/assets/img/ferrari3.jpg');
}

.background5 {
  background-image: url('@/assets/img/ferrari4.jpg');
}

.background-container {
  transform: var(--transform-style);
}
</style>
