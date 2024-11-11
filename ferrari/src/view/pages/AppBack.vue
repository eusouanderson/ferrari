<template>
  <div 
    class="background-container" 
    :class="backgroundClass" 
    @mousemove="handleMouseMove"
  >
    <h1>Mova o mouse para mudar o background</h1>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'BackgroundChanger',
  setup() {
    const backgroundClass = ref('background1');

    const handleMouseMove = (event) => {
      const { clientX, clientY, currentTarget } = event;
      const { offsetWidth, offsetHeight } = currentTarget;

      // Calcular posição relativa do mouse dentro do elemento
      const xPos = clientX / offsetWidth;
      const yPos = clientY / offsetHeight;

      // Definir a classe de background com base na posição do mouse
      if (xPos > 0.7) {
        backgroundClass.value = 'background2'; // fundo para a direita
      } else if (xPos < 0.3) {
        backgroundClass.value = 'background3'; // fundo para a esquerda
      } else if (yPos > 0.7) {
        backgroundClass.value = 'background4'; // fundo para baixo
      } else if (yPos < 0.3) {
        backgroundClass.value = 'background5'; // fundo para cima
      } else {
        backgroundClass.value = 'background1'; // fundo central
      }
    };

    return { backgroundClass, handleMouseMove };
  },
};
</script>

<style scoped>
.background-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
}

.background1 {
  background-color: #3498db; /* azul */
}

.background2 {
  background-color: #e74c3c; /* vermelho */
}

.background3 {
  background-color: #2ecc71; /* verde */
}

.background4 {
  background-color: #f1c40f; /* amarelo */
}

.background5 {
  background-color: #9b59b6; /* roxo */
}
</style>
